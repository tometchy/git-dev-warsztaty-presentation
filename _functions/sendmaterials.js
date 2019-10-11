exports.handler = function (event, context, callback) {
    console.log('------------- SEND MATERIALS BEGINNING -------------------- VER 2019_10_11__21_03');
    console.log('event http method: ' + event.httpMethod);
    console.log('event body: ' + event.body);

    const API_ENDPOINT = "https://api.sendgrid.com/v3/mail/send";

    console.log("email: " + event.body.email);
    console.log("agree: " + event.body.agree);

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
        var informUsBody = {
            personalizations: [{to: [{email: "kontakt@gitwarsztaty.pl"}]}],
            from: {email: event.body.email},
            subject: "Nowy request o darmowe materiały od " + event.body.email + " czy zgodził się na newsletter: " + event.body.agree,
            content: [{
                type: "text/plain",
                value: "Nowy request o darmowe materiały od " + event.body.email + " czy zgodził się na newsletter: " + event.body.agree + ". Czas: " + event.body.time
            }]
        };

        fetch(API_ENDPOINT, {
            method: 'post',
            body: JSON.stringify(informUsBody),
            headers: {"Accept": "application/json", 'Content-Type': 'application/json', 'Authorization': 'Bearer process.env.sendgrid'}
        })
            .then(res => checkStatus(res, false))
            .then(response => console.log("Response: " + response.json()))
            .catch(error => {
                console.log("Error catched during fetch");
                console.error(error);
            });
    }

    function sendMaterials() {
        var sendMaterialsBody = {
            personalizations: [{to: [{email: event.body.email}]}],
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
            headers: {"Accept": "application/json", 'Content-Type': 'application/json', 'Authorization': 'Bearer process.env.sendgrid'}
        })
            .then(res => checkStatus(res, true))
            .then(response => console.log("Response: " + response.json()))
            .catch(error => {
                console.log("Error catched during fetch");
                console.error(error);
                throw "Could not send";
            });
    }

    try {
        require('node-fetch');

        informUs();
        sendMaterials();

        console.log('end request to ' + event.url);

    } catch (e) {
        console.log('Exception catched');
        console.error(e);
        callback(new Error('failure')); // to return error
    }

    console.log('------------- END --------------------');
};

