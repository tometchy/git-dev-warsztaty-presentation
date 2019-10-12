exports.handler = function (event, context, callback) {
    console.log('------------- SEND MATERIALS BEGINNING -------------------- VER 2019_10_12__07_54');
    console.log('event http method: ' + event.httpMethod);
    console.log('event body: ' + event.body);

    const API_ENDPOINT = "https://api.sendgrid.com/v3/mail/send";
    const apiKey = process.env.sendgrid;
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
            subject: "Nowy request o darmowe materiały od " + eventBody.email + " czy zgodził się na newsletter: " + eventBody.agree,
            content: [{
                type: "text/plain",
                value: "Nowy request o darmowe materiały od " + eventBody.email + " czy zgodził się na newsletter: " + eventBody.agree + ". Czas: " + eventBody.time
            }]
        };

        fetch(API_ENDPOINT, {
            method: 'post',
            body: JSON.stringify(informUsBody),
            headers: {"Accept": "application/json", 'Content-Type': 'application/json', 'Authorization': ('Bearer ' + apiKey)}
        })
            .then(res => checkStatus(res, false))
            .then(response => {
                console.log("Got response:");
                console.log(response)
            })
            .catch(error => {
                console.log("Error catched during fetch");
                console.error(error);
            });
    }

    function sendMaterials() {
        const sendMaterialsBody = {
            personalizations: [{to: [{email: eventBody.email}]}],
            from: {email: "kontakt@gitwarsztaty.pl", name: "GitWarsztaty"},
            subject: "Darmowe materiały do pracy z Gitem!",
            content: [{
                type: "text/plain", value: "Witaj! Oto Twoje darmowe materiały do pracy z Gitem:\n" +
                    " Opis najważniejszych komend - https://www.gitwarsztaty.pl/materialy/cheatsheet.pdf\n" +
                    " Popularne przełączniki do git log - https://www.gitwarsztaty.pl/materialy/git-log.pdf\n\n" +
                    "Jeżeli masz pytania, być może potrzebujesz pomocy z Gita, możesz do nas pisać na kontakt@gitwarsztaty.pl\n\n" +
                    "Miłego dnia!"
            }]
        };

        fetch(API_ENDPOINT, {
            method: 'post',
            body: JSON.stringify(sendMaterialsBody),
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
        sendMaterials();

        console.log('end request to ' + event.url);

    } catch (e) {
        console.log('Exception catched');
        console.error(e);
        callback(new Error('General failure'));
    }

    console.log('------------- END --------------------');
};

