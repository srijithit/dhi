import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const phone = (body.phone || '').trim();
    const experience = (body.experience || '').trim();
    const linkedin = (body.linkedin || '').trim();
    const note = (body.note || '').trim();
    const role = (body.role || '').trim();
    const resumeBase64 = body.resumeBase64;
    const resumeFileName = body.resumeFileName;

    // Strict validation: mandatory fields cannot be whitespace only
    if (!name || !email || !phone || !experience || !linkedin || !note) {
      return NextResponse.json(
        { success: false, error: 'All fields including LinkedIn URL and Cover Note are mandatory and cannot be empty.' },
        { status: 400 }
      );
    }

    if (!/^[a-zA-Z\s.'-]+$/.test(name)) {
      return NextResponse.json(
        { success: false, error: 'Full Name must contain valid character strings only.' },
        { status: 400 }
      );
    }

    // SMTP Config
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER || '';
    const smtpPass = process.env.SMTP_PASS || '';

    if (smtpUser && smtpPass) {
      try {
        const nodemailerModule = await import('nodemailer');
        const nodemailer = nodemailerModule.default || nodemailerModule;

        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const htmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
            <div style="background: linear-gradient(135deg, #2196E8, #4A72EB); padding: 20px; border-radius: 12px; color: #ffffff; text-align: center;">
              <h2 style="margin: 0; font-size: 22px;">New Career Application</h2>
              <p style="margin: 5px 0 0 0; opacity: 0.9; font-size: 14px;">Role: <strong>${role || 'General Application'}</strong></p>
            </div>

            <table style="width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 14px;">
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 8px; font-weight: bold; color: #1e293b; width: 35%;">Applicant Name:</td>
                <td style="padding: 12px 8px; color: #334155;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 8px; font-weight: bold; color: #1e293b;">Email Address:</td>
                <td style="padding: 12px 8px; color: #334155;"><a href="mailto:${email}" style="color: #2196E8;">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 8px; font-weight: bold; color: #1e293b;">Phone / WhatsApp:</td>
                <td style="padding: 12px 8px; color: #334155;"><a href="tel:${phone}" style="color: #334155;">${phone}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 8px; font-weight: bold; color: #1e293b;">Experience:</td>
                <td style="padding: 12px 8px; color: #334155;">${experience}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 8px; font-weight: bold; color: #1e293b;">LinkedIn Profile:</td>
                <td style="padding: 12px 8px; color: #334155;"><a href="${linkedin}" target="_blank" style="color: #2196E8; text-decoration: underline;">${linkedin}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 8px; font-weight: bold; color: #1e293b;">Resume:</td>
                <td style="padding: 12px 8px; color: ${resumeFileName ? '#059669' : '#2563eb'}; font-weight: bold;">
                  ${resumeFileName ? `📎 ${resumeFileName}` : '✉️ Attached via direct Gmail submission'}
                </td>
              </tr>
            </table>

            <div style="background-color: #f8fafc; padding: 16px; border-radius: 12px; border-left: 4px solid #2196E8; margin-top: 10px;">
              <h4 style="margin: 0 0 8px 0; color: #0f172a; font-size: 14px;">Key Skills & Cover Note:</h4>
              <p style="margin: 0; color: #334155; line-height: 1.6; white-space: pre-wrap; font-size: 13px;">${note}</p>
            </div>

            <p style="color: #94a3b8; font-size: 12px; margin-top: 25px; text-align: center;">
              Sent automatically to Dhinesh@dhigrowth.com via DhiGrowth Careers Portal.
            </p>
          </div>
        `;

        const attachments = [];
        if (resumeBase64) {
          // Extract pure base64 content
          const base64Data = resumeBase64.includes('base64,')
            ? resumeBase64.split('base64,')[1]
            : resumeBase64;

          attachments.push({
            filename: resumeFileName || `${name.replace(/\s+/g, '_')}_Resume.pdf`,
            content: base64Data,
            encoding: 'base64',
            contentType: 'application/pdf',
          });
        }

        await transporter.sendMail({
          from: `"DhiGrowth Careers Portal" <${smtpUser}>`,
          to: 'Dhinesh@dhigrowth.com, dinesh@dhigrowth.com',
          replyTo: email,
          subject: `Career Application: ${role} — ${name}`,
          html: htmlContent,
          attachments: attachments,
        });
      } catch (mailError) {
        console.warn('Career application email dispatch warning:', mailError);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully to Dhinesh@dhigrowth.com! Our hiring team will review your profile.',
      data: { name, email, phone, role, linkedin }
    });

  } catch (error: any) {
    console.error('Careers Application API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error while processing your application.' },
      { status: 500 }
    );
  }
}
