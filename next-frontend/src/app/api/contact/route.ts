import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const phone = (body.phone || '').trim();
    const company = (body.company || '').trim();
    const service = (body.service || '').trim();
    const message = (body.message || '').trim();

    // Input validation: Must not be empty or whitespace only
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message cannot be empty or contain only spaces.' },
        { status: 400 }
      );
    }

    if (!/^[a-zA-Z\s.'-]+$/.test(name)) {
      return NextResponse.json(
        { success: false, error: 'Name must contain valid character strings only.' },
        { status: 400 }
      );
    }

    const GOOGLE_SHEETS_WEBAPP_URL =
      process.env.GOOGLE_SHEETS_WEBAPP_URL ||
      'https://script.google.com/macros/s/AKfycbwEmhM2qRndFKOdT5MGgR6hqHkK_XXGVmAc4ezw6q-dnDR2L3oCd4lJpnEKVrEVSnzhjg/exec';

    // 1. Sync submission to Google Spreadsheet
    try {
      await fetch(GOOGLE_SHEETS_WEBAPP_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          name,
          phone: phone || 'N/A',
          email,
          company: company || 'N/A',
          service: service || 'General Inquiry',
          message,
          to: 'dhinesh@dhigrowth.com',
          cc: 'pranitha@dhigrowth.com, mathanraj@dhigrowth.com',
        }),
        redirect: 'follow',
      });
    } catch (sheetError) {
      console.warn('Google Sheets sync warning:', sheetError);
    }

    // 2. Configure Transporter (supports environment variables or fallback SMTP settings)
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER || '';
    const smtpPass = process.env.SMTP_PASS || '';

    // If SMTP credentials exist, dynamically load nodemailer and dispatch email
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
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <h2 style="color: #2196E8; margin-top: 0;">New Service Inquiry — DhiGrowth</h2>
            <p style="color: #475569; font-size: 14px;">You have received a new consultation inquiry from the DhiGrowth website:</p>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px; font-weight: bold; color: #1e293b; width: 30%;">Full Name:</td>
                <td style="padding: 10px; color: #334155;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px; font-weight: bold; color: #1e293b;">Email Address:</td>
                <td style="padding: 10px; color: #334155;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px; font-weight: bold; color: #1e293b;">Phone / WhatsApp:</td>
                <td style="padding: 10px; color: #334155;">${phone || 'N/A'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px; font-weight: bold; color: #1e293b;">Company / Brand:</td>
                <td style="padding: 10px; color: #334155;">${company || 'N/A'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px; font-weight: bold; color: #1e293b;">Requested Service:</td>
                <td style="padding: 10px; color: #334155;">${service || 'General Inquiry'}</td>
              </tr>
            </table>
            <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #2196E8; margin-top: 15px;">
              <h4 style="margin: 0 0 8px 0; color: #0f172a;">Message / Requirements:</h4>
              <p style="margin: 0; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #94a3b8; font-size: 12px; margin-top: 25px; text-align: center;">
              Sent automatically by DhiGrowth Web Platform • CC: pranitha@dhigrowth.com, mathanraj@dhigrowth.com
            </p>
          </div>
        `;

        await transporter.sendMail({
          from: `"DhiGrowth Contact Form" <${smtpUser}>`,
          to: 'dhinesh@dhigrowth.com',
          cc: ['pranitha@dhigrowth.com', 'mathanraj@dhigrowth.com'],
          replyTo: email,
          subject: `New Inquiry from ${name} — ${service || 'General Inquiry'}`,
          html: htmlContent,
        });
      } catch (mailError) {
        console.warn('Nodemailer dynamic import or send failed:', mailError);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully! Our team will contact you shortly.',
      data: { name, email, phone, service, message }
    });

  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error. Failed to send email inquiry.' },
      { status: 500 }
    );
  }
}
