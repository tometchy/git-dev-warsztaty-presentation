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
    console.log("requestPurpose : " + eventBody.requestPurpose);
    console.log("cameFromUrlJekyll: " + eventBody.cameFromUrlJekyll);
    console.log("cameFromUrl: " + eventBody.cameFromUrl);
    console.log("cameFromFormLocation: " + eventBody.cameFromFormLocation);
    if(eventBody.tags == null)
        eventBody.tags = "";
    console.log("tags: " + eventBody.tags);

    function checkStatus(res, propagateFailure) {
        if (res.ok) { // res.status >= 200 && res.status < 300
            return res;
        } else {
            console.error("Response status is not ok");
            console.error(res);

            if (propagateFailure) {
                console.log("Propagating failure from wrong response status to user");
                callback(new Error("Third party service doesn't work, could not send"));
            }

            return res;
        }
    }

    function informUs(propagateFailure) {
        const informUsBody = {
            personalizations: [{to: [{email: "kontakt@gitwarsztaty.pl"}]}],
            from: {email: eventBody.email},
            subject: "Nowy request o " + eventBody.requestPurpose + " od " + eventBody.email,
            content: [{
                type: "text/plain",
                value: "Nowy request o " + eventBody.requestPurpose + " od " + eventBody.email + "\n\n" +
                    "Czy zgodził się na Git w Twojej skrzynce: " + eventBody.agreeGitInbox + "\n\n" +
                    "Czy zgodził się na GitWarsztaty w Twojej skrzynce: " + eventBody.agreeGitWarsztatyInbox + "\n\n" +
                    "Czas: " + eventBody.time + "\n\n" +
                    "Url: " + eventBody.cameFromUrl + "\n\n" +
                    "Url (Jekyll): " + eventBody.cameFromUrlJekyll + "\n\n" +
                    "Który formularz uzupełnił: " + eventBody.cameFromFormLocation + "\n\n" +
                    "Czy w firmie: " + eventBody.inCompany + "\n\n" +
                    "Numer telefonu: " + atob(decodeURIComponent(escape(eventBody.phoneNumber))) + "\n\n" +
                    "(JEZELI W FIRMIE) Nazwa firmy: " + atob(decodeURIComponent(escape(eventBody.companyName))) + "\n\n" +
                    "(JEZELI W FIRMIE) Adres biura: " + atob(decodeURIComponent(escape(eventBody.officeAddress))) + "\n\n" +
                    "(JEZELI OTWARTE) Kto: " + atob(decodeURIComponent(escape(eventBody.who))) + "\n\n" +
                    "(JEZELI OTWARTE) Gdzie: " + atob(decodeURIComponent(escape(eventBody.whichCity))) + "\n\n" +
                    "Dodatkowe informacje: " + atob(decodeURIComponent(escape(eventBody.additionalInfo))) + "\n\n"
            }]
        };

        console.log("Sending inform us mail using sendgrid");
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
                    callback(new Error("Third party service doesn't work, could not send"));
                }
            });
    }
    
    function sendMaterialsWithSendgrid(){
        const sendMaterialsBody = {
            personalizations: [{to: [{email: eventBody.email}]}],
            from: {email: "kontakt@gitwarsztaty.pl", name: "GitWarsztaty"},
            subject: "Darmowe materiały do pracy z Gitem!",
            content: [{
                type: "text/plain", value: "Cześć! Oto Twoje darmowe materiały do pracy z Gitem:\n" +
                    " Opis najważniejszych komend - https://www.gitwarsztaty.pl/materialy/cheatsheet.pdf\n" +
                    " Popularne przełączniki do Git log - https://www.gitwarsztaty.pl/materialy/git-log.pdf\n\n" +
                    "Jeżeli masz pytania, być może potrzebujesz pomocy z Gita, Dockera lub Continuous Integration & Continuous Delivery/Deployment (CI/CD), możesz do nas pisać na kontakt@gitwarsztaty.pl\n" +
                    "Jeżeli chcesz od czasu do czasu otrzymać maila z poradą na któryś z powyższych tematów, zachęcamy do zapisania się na nasz newsletter: https://www.gitwarsztaty.pl/#darmowe-materialy - wystarczy ponownie kliknąć 'Wyślij materiały', z zaznaczonym checkboxem z poradami.\n\n" +
                    "Miłego dnia!"
            }]
        };

        console.log("Sending materials using sendgrid");
        fetch(SENDGRID_API_ENDPOINT, {
            method: 'post',
            body: JSON.stringify(sendMaterialsBody),
            headers: {"Accept": "application/json", 'Content-Type': 'application/json', 'Authorization': ('Bearer ' + SENDGRID_API_KEY)}
        })
            .then(res => checkStatus(res, true))
            .then(response => {
                console.log("Got response from sending materials with sendgrid:");
                console.log(response)
            })
            .catch(error => {
                console.log("Error catched during sending materials with sendgrid, propagating failure to user");
                console.error(error);
                callback(new Error("Third party service doesn't work, could not send"));
            });
    }
    
    function subscribe(){
        var subscribeBody = {
            email: eventBody.email,
            fields: {
                camefromurljekyll: eventBody.cameFromUrlJekyll,
                camefromurl: eventBody.cameFromUrl,
                camefromformlocation: eventBody.cameFromFormLocation,
                requestPurpose: eventBody.requestPurpose,
                tags: eventBody.tags
            }
        };

        subscribeBody = JSON.stringify(subscribeBody);
        console.log("Sending mailerlite subscribe request: " + subscribeBody);

        fetch("https://api.mailerlite.com/api/v2/subscribers", {
            method: 'post',
            body: subscribeBody,
            headers: {
                'Content-Type': 'application/json',
                'X-MailerLite-ApiKey': MAILERLITE_API_KEY
            }
        })
            .then(res => checkStatus(res, true))
            .then(response => {
                console.log("Got response from mailerlite subscribe request:");
                console.log(response)
            })
            .catch(error => {
                console.error("Error catched during fetch mailerlite subscribe request");
                console.error(error);
                callback(new Error("Third party service doesn't work, could not send"));
            });

        setTimeout(function() {
            var addToGroupBody = {
                email: eventBody.email,
            };
            
            addToGroupBody = JSON.stringify(addToGroupBody);
            console.log("Sending mailerlite add to group request: " + addToGroupBody);
            
            fetch("https://api.mailerlite.com/api/v2/groups/102857664/subscribers", {
                method: 'post',
                body: addToGroupBody,
                headers: {
                    'Content-Type': 'application/json',
                    'X-MailerLite-ApiKey': MAILERLITE_API_KEY
                }
            })
                .then(res => checkStatus(res, true))
                .then(response => {
                    console.log("Got response from mailerlite add to group request:");
                    console.log(response)
                })
                .catch(error => {
                    console.error("Error catched during fetch mailerlite add to group request");
                    console.error(error);
                    callback(new Error("Third party service doesn't work, could not send"));
                });
        }, 250);
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
            subscribe(); // This will send materials with MailerLite if requestPurpose is materialy
        } else {
            if (eventBody.requestPurpose.toLowerCase() === "materialy")
                sendMaterialsWithSendgrid();
        }

        if (eventBody.requestPurpose.toLowerCase() === "kontakt") {
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
