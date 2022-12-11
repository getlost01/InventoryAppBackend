import nodemailer from "nodemailer";
import * as dotenv from 'dotenv'; 
dotenv.config();

export default async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: process.env.SMTP_PORT,
			secure:true,
			auth :{
				user:process.env.MAIL_USER,
				pass: process.env.MAIL_PASSWORD
			}
		})

		await transporter.sendMail({
			from: `InventoryApp <creator.gl01@gmail.com>`, 
			to: email,
			subject: subject,
			text: text,
		});
		console.log("Email sent successfully");
	} catch (error) {
		console.log("Email not sent!");
		console.log(error);
		return error;
	}
};
