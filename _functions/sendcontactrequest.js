exports.handler = function (event, context, callback) {
    console.log('------------- SEND CONTACT REQUEST BEGINNING -------------------- VER 2019_10_18__18_39');
    console.log('event http method: ' + event.httpMethod);
    console.log('event body: ' + event.body);

    const fetch = require("node-fetch");
    const atob = require("atob");
    
    const API_ENDPOINT = "https://api.sendgrid.com/v3/mail/send";
    const apiKey = process.env.SENDGRID;
    console.log("Api key: " + apiKey.substring(0, 4) + "...");
    
    const eventBody = JSON.parse(event.body);

    console.log("email: " + eventBody.email);
    console.log("agreeGitInbox: " + eventBody.agreeGitInbox);

    function checkStatus(res, shouldThrow) {
        if (res.ok) { // res.status >= 200 && res.status < 300
            return res;
        } else {
            console.error("Response status is not ok");
            console.log(res);
            if (shouldThrow)
                throw "Did not send";
        }
    }
    

    function informUs() {
        const informUsBody = {
            personalizations: [{to: [{email: "kontakt@gitwarsztaty.pl"}]}],
            from: {email: eventBody.email},
            subject: "Nowy request o KONTAKT od " + eventBody.email,
            content: [{
                type: "text/plain",
                value: "Nowy request o KONTAKT od " + eventBody.email + "\n\n" +
                    "Czy zgodził się na Git w Twojej skrzynce: " + eventBody.agreeGitInbox + "\n\n" +
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

        fetch(API_ENDPOINT, {
            method: 'post',
            body: JSON.stringify(informUsBody),
            headers: {"Accept": "application/json", 'Content-Type': 'application/json', 'Authorization': ('Bearer ' + apiKey)}
        })
            .then(res => checkStatus(res, true))
            .then(response => {
                console.log("Got response:");
                console.log(response)
            })
            .catch(error => {
                console.log("Error catched during fetch");
                console.error(error);
                callback(new Error('Could not send'));
            });
    }

    try {
        informUs();
    } catch (e) {
        console.log('Exception catched');
        console.error(e);
        callback(new Error('General failure'));
    }

    console.log('------------- END --------------------');
};

