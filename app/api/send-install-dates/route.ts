import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { InstallDate } from '@/lib/data';
import { getUserIdFromSession } from '../../../lib/session';

export async function POST(req: NextRequest) {
	const { installDates } = await req.json();
	const userId = await getUserIdFromSession();

	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: 587,
		secure: false,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASSWORD,
		},
	});

	const dateList = installDates
		.map(
			(d: InstallDate, i: number) =>
				`Date ${i + 1}: ${
					d.date ? new Date(d.date).toLocaleDateString() : 'Not set'
				}\nTimes: ${d.times.join(', ')}`
		)
		.join('\n\n');

	const mailOptions = {
		from: 'no-reply@SecondNature.com',
		to: 'zsimpson@secondnature.com', // TODO: Replace with actual recipient
		subject: `Install Dates for User ${userId}`,
		text: `User ID: ${userId}\n\nSelected Install Dates:\n\n${dateList}`,
	};

	try {
		const info = await transporter.sendMail(mailOptions);
		return NextResponse.json({ success: true, messageId: info.messageId });
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
