export const GOOGLE_SHEETS_WEBAPP_URL =
  process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBAPP_URL ||
  'https://script.google.com/macros/s/AKfycbwEmhM2qRndFKOdT5MGgR6hqHkK_XXGVmAc4ezw6q-dnDR2L3oCd4lJpnEKVrEVSnzhjg/exec';

export const LEAD_EMAILS = {
  to: 'dhinesh@dhigrowth.com',
  cc: ['pranitha@dhigrowth.com', 'mathanraj@dhigrowth.com'],
  ccString: 'pranitha@dhigrowth.com, mathanraj@dhigrowth.com',
};

export interface LeadSubmission {
  name: string;
  phone?: string;
  email: string;
  company?: string;
  service?: string;
  message?: string;
}

/**
 * Direct client-side submission to Google Apps Script Web App (saves to Google Sheet).
 * Uses mode: 'no-cors' for silent, robust execution across all browsers.
 */
export async function submitToGoogleSheets(lead: LeadSubmission): Promise<boolean> {
  try {
    const payload = {
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      name: lead.name,
      phone: lead.phone || 'N/A',
      email: lead.email,
      company: lead.company || 'N/A',
      service: lead.service || 'General Inquiry',
      message: lead.message || 'N/A',
      to: LEAD_EMAILS.to,
      cc: LEAD_EMAILS.ccString,
    };

    await fetch(GOOGLE_SHEETS_WEBAPP_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    return true;
  } catch (err) {
    console.warn('Google Sheets client sync note:', err);
    return false;
  }
}
