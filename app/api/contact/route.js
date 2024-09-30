import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, phone,  city } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: "himansu.thetechnovate@gmail.com",
                pass: process.env.password, 
            }
        });

        const mailOptions = {
            from: 'himansu.thetechnovate@gmail.com',
            to: 'rnrstudiezsweb@gmail.com',
            
            subject: 'Contact Us Lead',
            html: `
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>City: ${city}</p>
                
              
            `
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email", error: error.message }, { status: 500 });
    }
}













