import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Send email to Odd Shoes team
    await resend.emails.send({
      from: 'Odd Shoes Contact <onboarding@resend.dev>',
      to: 'blueoxrecruit@gmail.com',
      subject: `New Contact: ${data.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #1a1a1a; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #e05a3a; color: white; padding: 30px 20px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; }
            .content { background: #f8f6f2; padding: 30px 20px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: 600; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
            .value { color: #1a1a1a; font-size: 16px; }
            .message-box { background: white; padding: 20px; border-radius: 8px; margin-top: 10px; border-left: 4px solid #e05a3a; }
            .footer { text-align: center; padding: 20px; color: #888; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>💬 New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${data.name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>
              
              ${data.service ? `
              <div class="field">
                <div class="label">Service Interested In</div>
                <div class="value">${data.service}</div>
              </div>
              ` : ''}
              
              ${data.budget ? `
              <div class="field">
                <div class="label">Budget</div>
                <div class="value">${data.budget}</div>
              </div>
              ` : ''}
              
              ${data.referral ? `
              <div class="field">
                <div class="label">How They Found Us</div>
                <div class="value">${data.referral}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">${data.message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>Submitted from oddshoes.co/contact</p>
              <p style="margin-top: 10px;">Respond within 24 hours ✝️</p>
            </div>
          </div>
        </body>
        </html>
      `
    });
    
    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message' }, 
      { status: 500 }
    );
  }
}
