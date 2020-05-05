exports.handler = function (event, context, callback) {
    console.log('------------- REQUEST STARTED -------------------- VER 2020_05_05__18_39');

    console.log('event http method: ' + event.httpMethod);
    console.log('event body: ' + event.body);

    const SENDGRID_API_ENDPOINT = "https://api.sendgrid.com/v3/mail/send";
    const SENDGRID_API_KEY = process.env.SENDGRID;
    console.log("SendGrid api key: " + SENDGRID_API_KEY.substring(0, 4) + "...");

    const MAILERLITE_API_KEY = process.env.MAILERLITE;
    console.log("MailerLite api key: " + MAILERLITE_API_KEY.substring(0, 4) + "...");

    const fetch = require("node-fetch");

    const eventBody = JSON.parse(event.body);

    console.log("email: " + eventBody.email);
    console.log("agreeGitInbox: " + eventBody.agreeGitInbox);
    console.log("agreeGitWarsztatyInbox : " + eventBody.agreeGitWarsztatyInbox);
    console.log("camefromformlocation : " + eventBody.camefromformlocation);
    
    try {
        try {
            // This will use SendGrid which often fails, but it's only informational for us, so we don't show failure to user
            informUs(false);
        } catch (e) {
            console.log('Exception catched during informing us, but can be hidden for user, swallowing it');
            console.error(e);
        }

        if(eventBody.agreeGitInbox || eventBody.agreeGitWarsztatyInbox) {
            subscribe(); // This will send materials with MailerLite if camefromformlocation is materialy
        }
        else{
            if(eventBody.camefromformlocation.toLowerCase() === "materialy")
                sendMaterialsWithSendgrid();
        }
        
        if(eventBody.camefromformlocation.toLowerCase() === "kontakt") {
            // This will use SendGrid which often fails, but at this moment we know that user wanted to contact us
            // so if sending contact details to us fails, then we should show failure to user
            informUs(true);
        }

    } catch (e) {
        console.log('Exception catched');
        console.error(e);
        callback(new Error('General failure'));
    }
};
