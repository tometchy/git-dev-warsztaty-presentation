const fetch = require("node-fetch");
const atob = require("atob");
const SENDGRID_API_ENDPOINT = "https://api.sendgrid.com/v3/mail/send";

exports.handler = async (event, context) => {
    const SENDGRID_API_KEY = process.env.SENDGRID;
    const eventBody = JSON.parse(event.body);

    try {
        console.log('------------- REQUEST STARTED -------------------- VER 2020_05_05__18_39');
        console.log('event http method: ' + event.httpMethod);
        console.log('event body: ' + event.body);
        console.log("SendGrid api key: " + SENDGRID_API_KEY.substring(0, 4) + "...");
        console.log("email: " + eventBody.email);
        console.log("agreeGitInbox: " + eventBody.agreeGitInbox);
        console.log("agreeGitWarsztatyInbox : " + eventBody.agreeGitWarsztatyInbox);
        console.log("requestPurpose : " + eventBody.requestPurpose);
        console.log("cameFromUrlJekyll: " + eventBody.cameFromUrlJekyll);
        console.log("cameFromUrl: " + eventBody.cameFromUrl);
        console.log("cameFromFormLocation: " + eventBody.cameFromFormLocation);

        if (eventBody.tags == null)
            eventBody.tags = "";

        console.log("tags: " + eventBody.tags);

        try {
            // This will use SendGrid which often fails, but it's only informational for us, so we don't show failure to user
            informUs(false);
        } catch (e) {
            console.log('Exception catched during informing us, but can be hidden for user, swallowing it');
            console.error(e);
        }

        console.log("eventBody.agreeGitInbox:");
        console.log(eventBody.agreeGitInbox);
        console.log("eventBody.agreeGitWarsztatyInbox:");
        console.log(eventBody.agreeGitWarsztatyInbox);

        if (eventBody.requestPurpose.toLowerCase() === "materialy")
            sendMaterialsWithSendgrid();

        if (eventBody.requestPurpose.toLowerCase() === "kontakt") {
            // This will use SendGrid which often fails, but at this moment we know that user wanted to contact us
            // so if sending contact details to us fails, then we should show failure to user
            informUs(true);
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ status: 'Ok' })
        };
    } catch (error) {
        console.log('Exception catched');
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failure' }),
        };
    }

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
        var informUsBody = {
            personalizations: [{ to: [{ email: "kontakt@gitwarsztaty.pl" }] }],
            from: { email: eventBody.email },
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

        informUsBody = JSON.stringify(informUsBody);
        console.log("Sending inform us mail using sendgrid: " + informUsBody);

        fetch(SENDGRID_API_ENDPOINT, {
            method: 'post',
            body: informUsBody,
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

    function sendMaterialsWithSendgrid() {
        var sendMaterialsBody = {
            personalizations: [{ to: [{ email: eventBody.email }] }],
            from: { email: "kontakt@gitwarsztaty.pl", name: "GitWarsztaty" },
            subject: "11 Git Tricków do codziennej pracy",
            content: [{
                type: "text/html",
                value: "<div>Cześć,<div><br>oto obiecany darmowy pdf - <a href=\"https://www.gitwarsztaty.pl/materialy/11-git-trickow-do-codziennej-pracy-gitwarsztatypl.pdf\">11 Git Tricków do codziennej pracy</a>.<br><br>Która porada spodobała Ci się najbardziej?</div><div>Zachęcamy do podzielenia się feedbackiem, wystarczy, że odpiszesz na tego maila.<br><br>Możesz od razu zacząć stosować nowe metody w praktyce... no może prawie od razu - najpierw prześlij je dalej pozostałym w Twojej firmie.</div><div><br>W końcu <b>razem tworzycie mocny zespół</b> 💪<br><br><i>Pozdrów zespół<br>Tomasz Skraskowski<br><a href=\"https://www.gitwarsztaty.pl\">GitWarsztaty.pl</a></i><br></div></div>"
            }]
        };

        sendMaterialsBody = JSON.stringify(sendMaterialsBody);
        console.log("Sending materials using sendgrid: " + sendMaterialsBody);

        fetch(SENDGRID_API_ENDPOINT, {
            method: 'post',
            body: sendMaterialsBody,
            headers: { "Accept": "application/json", 'Content-Type': 'application/json', 'Authorization': ('Bearer ' + SENDGRID_API_KEY) }
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
};