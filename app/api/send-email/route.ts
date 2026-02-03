import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { companyName, contactEmail, contactPhone, industry, callVolume, country, goals, language } = body

    // Validacija
    if (!companyName || !contactEmail || !contactPhone || !industry || !callVolume) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Slanje emaila
    const { data, error } = await resend.emails.send({
      from: 'Ethan Demo <demo@ethan.tel>',
      to: ['sales@vanadium.solutions'],
      subject: `New Demo Request from ${companyName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d97706; border-bottom: 2px solid #d97706; padding-bottom: 10px;">
            New Demo Request
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Company:</strong> 
              <span style="color: #1f2937;">${companyName}</span>
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Email:</strong> 
              <a href="mailto:${contactEmail}" style="color: #d97706;">${contactEmail}</a>
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Phone:</strong> 
              <a href="tel:${contactPhone}" style="color: #d97706;">${contactPhone}</a>
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Industry:</strong> 
              <span style="color: #1f2937;">${industry}</span>
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Call Volume:</strong> 
              <span style="color: #1f2937;">${callVolume}</span>
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Country/Languages:</strong> 
              <span style="color: #1f2937;">${country || 'Not specified'}</span>
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Goals:</strong> 
              <span style="color: #1f2937;">${goals || 'Not specified'}</span>
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Form Language:</strong> 
              <span style="color: #1f2937;">${language || 'en'}</span>
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          
          <p style="color: #6b7280; font-size: 12px; text-align: center;">
            Submitted from ethan.tel
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    console.log('✅ Email sent successfully!')
    console.log('Resend response:', data)
    console.log('Email ID:', data?.id)
    
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
