import nodemailer from 'nodemailer'

export const verifyEmail=async(token, email)=>{
    const transporter=nodemailer.createTransport({
        service:'Gmail',
        auth:{
            
        }
    })
}