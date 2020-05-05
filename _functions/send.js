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
    const atob = require("atob");

    const eventBody = JSON.parse(event.body);

    console.log("email: " + eventBody.email);
    console.log("agreeGitInbox: " + eventBody.agreeGitInbox);
    console.log("agreeGitWarsztatyInbox : " + eventBody.agreeGitWarsztatyInbox);
    console.log("camefromformlocation : " + eventBody.camefromformlocation);

    function checkStatus(res, propagateFailure) {
        if (res.ok) { // res.status >= 200 && res.status < 300
            return res;
        } else {
            console.error("Response status is not ok");
            console.error(res);

            if (propagateFailure) {
                console.log("Propagating failure from wrong response status to user");
                callback(new Error('Could not send'));
            }

            return res;
        }
    }

    function informUs(propagateFailure) {
        const informUsBody = {
            personalizations: [{to: [{email: "kontakt@gitwarsztaty.pl"}]}],
            from: {email: eventBody.email},
            subject: "Nowy request o " + eventBody.camefromformlocation + " od " + eventBody.email,
            content: [{
                type: "text/plain",
                value: "Nowy request o " + eventBody.camefromformlocation + " od " + eventBody.email + "\n\n" +
                    "Czy zgodził się na Git w Twojej skrzynce: " + eventBody.agreeGitInbox + "\n\n" +
                    "Czy zgodził się na GitWarsztaty w Twojej skrzynce: " + eventBody.agreeGitWarsztatyInbox + "\n\n" +
                    "Czas: " + eventBody.time + "\n\n" +
                    "Czy w firmie: " + eventBody.inCompany + "\n\n" +
                    "Numer telefonu: " + atob(decodeURIComponent(escape(eventBody.phoneNumber))) + "\n\n" +
                    "(JEZELI W FIRMIE) Nazwa firmy: " + atob(decodeURIComponent(escape(eventBody.companyName))) + "\n\n" +
                    "(JEZELI W FIRMIE) Adres biura: " + atob(decodeURIComponent(escape(eventBody.officeAddress))) + "\n\n" +
                    "(JEZELI OTWARTE) Kto: " + atob(decodeURIComponent(escape(eventBody.who))) + "\n\n" +
                    "(JEZELI OTWARTE) Gdzie: " + atob(decodeURIComponent(escape(eventBody.whichCity))) + "\n\n" +
                    "Dodatkowe informacje: " + atob(decodeURIComponent(escape(eventBody.additionalInfo))) + "\n\n"
            }]
        };

        fetch(SENDGRID_API_ENDPOINT, {
            method: 'post',
            body: JSON.stringify(informUsBody),
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                'Authorization': ('Bearer ' + SENDGRID_API_KEY)
            }
        })
            .then(res => checkStatus(res, propagateFailure))
            .then(response => {
                console.log("Got response for informing us email:");
                console.log(response)
            })
            .catch(error => {
                console.log("Error catched during informing us email");
                console.error(error);

                if (propagateFailure) {
                    console.log("Propagating inform us failure to user");
                    callback(new Error('Could not send'));
                }
            });
    }

    try {
        try {
            // This will use SendGrid which often fails, but it's only informational for us, so we don't show failure to user
            informUs(false);
        } catch (e) {
            console.log('Exception catched during informing us, but can be hidden for user, swallowing it');
            console.error(e);
        }

        if (eventBody.agreeGitInbox || eventBody.agreeGitWarsztatyInbox) {
            subscribe(); // This will send materials with MailerLite if camefromformlocation is materialy
        } else {
            if (eventBody.camefromformlocation.toLowerCase() === "materialy")
                sendMaterialsWithSendgrid();
        }

        if (eventBody.camefromformlocation.toLowerCase() === "kontakt") {
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
