exports.handler = function (event, context, callback) {
    console.log('------------- SEND CONTACT REQUEST BEGINNING -------------------- VER 2019_10_14__09_53');
    console.log('event http method: ' + event.httpMethod);
    console.log('event body: ' + event.body);

    const API_ENDPOINT = "https://api.sendgrid.com/v3/mail/send";
    const apiKey = process.env.SENDGRID;
    console.log("Api key: " + apiKey.substring(0, 4) + "...");
    const fetch = require("node-fetch");

    const eventBody = JSON.parse(event.body);

    console.log("email: " + eventBody.email);
    console.log("agree: " + eventBody.agree);

    function checkStatus(res, shouldThrow) {
        if (res.ok) { // res.status >= 200 && res.status < 300
            return res;
        } else {
            console.error("Response status is not ok");
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
                value: "Nowy request o KONTAKT od " + eventBody.email + "\n" +
                    "Czy zgodził się na newsletter: " + eventBody.agree + "\n" +
                    "Czas: " + eventBody.time + "\n" +
                    "Czy w firmie: " + eventBody.inCompany + "\n" +
                    "Numer telefonu: " + eventBody.phoneNumber + "\n" +
                    "(JEZELI W FIRMIE) Nazwa firmy: " + eventBody.companyName + "\n" +
                    "(JEZELI W FIRMIE) Adres biura: " + eventBody.officeAddress + "\n" +
                    "(JEZELI OTWARTE) Kto: " + eventBody.who + "\n" +
                    "(JEZELI OTWARTE) Gdzie: " + eventBody.whichCity + "\n" +
                    "Dodatkowe informacje: " + eventBody.additionalInfo + "\n"
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

