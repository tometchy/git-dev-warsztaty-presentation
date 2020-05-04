exports.handler = function (event, context, callback) {
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
