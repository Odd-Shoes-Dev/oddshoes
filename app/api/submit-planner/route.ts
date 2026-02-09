import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Send email to Odd Shoes team
    await resend.emails.send({
      from: 'Odd Shoes Planner <onboarding@resend.dev>',
      to: 'blueoxrecruit@gmail.com',
      subject: `New Project Planner: ${data.name} - ${data.company || 'No Company'}`,
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
            .services { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
            .service-tag { background: #e05a3a; color: white; padding: 4px 12px; border-radius: 4px; font-size: 14px; }
            .footer { text-align: center; padding: 20px; color: #888; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 New Project Planner Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Contact Person</div>
                <div class="value">${data.name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>
              
              ${data.company ? `
              <div class="field">
                <div class="label">Company</div>
                <div class="value">${data.company}</div>
              </div>
              ` : ''}
              
              ${data.phone ? `
              <div class="field">
                <div class="label">Phone</div>
                <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Project Type</div>
                <div class="value">${data.projectType || 'Not specified'}</div>
              </div>
              
              <div class="field">
                <div class="label">Budget</div>
                <div class="value">${data.budget || 'Not specified'}</div>
              </div>
              
              ${data.services && data.services.length > 0 ? `
              <div class="field">
                <div class="label">Services Requested</div>
                <div class="services">
                  ${data.services.map((service: string) => `<span class="service-tag">${service}</span>`).join('')}
                </div>
              </div>
              ` : ''}
              
              ${data.description ? `
              <div class="field">
                <div class="label">Project Description</div>
                <div class="value">${data.description.replace(/\n/g, '<br>')}</div>
              </div>
              ` : ''}
              
              ${data.startMonth && data.startYear ? `
              <div class="field">
                <div class="label">Preferred Start Date</div>
                <div class="value">${data.startMonth} ${data.startYear}</div>
              </div>
              ` : ''}
              
              ${data.launchMonth && data.launchYear ? `
              <div class="field">
                <div class="label">Target Launch Date</div>
                <div class="value">${data.launchMonth} ${data.launchYear}</div>
              </div>
              ` : ''}
              
              ${data.hearAbout ? `
              <div class="field">
                <div class="label">How They Found Us</div>
                <div class="value">${data.hearAbout}</div>
              </div>
              ` : ''}
            </div>
            <div class="footer">
              <p>Submitted from oddshoes.co/planner</p>
              <p style="margin-top: 10px;">Respond within 24 hours ✝️</p>
            </div>
          </div>
        </body>
        </html>
      `
    });
    
    return NextResponse.json({ success: true, message: 'Planner submitted successfully' });
  } catch (error) {
    console.error('Error sending planner email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send planner submission' }, 
      { status: 500 }
    );
  }
}
