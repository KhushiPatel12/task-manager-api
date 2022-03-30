const sgMail=require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'khushipatel.dcs22n@vnsu.ac.in',
        subject:'Welcome Email',
        text:`Welcome to the app ${name}`
    })
}
const sendCancelEmail =(email,name)=>{
    sgMail.send({
        to:email,
        from:'khushipatel.dcs22n@vnsu.ac.in',
        subject:'Cancelation Email',
        text:`Good Bye ${name}`
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancelEmail
}