exports.handler = function (event, context, callback) {
    console.log('------------- BEGINNING --------------------');
    console.log('event http method: ' + event.httpMethod);
    console.log('event body: ' + event.body);

    try {
        console.log('start request FETCH STYLE' + event.url);

        /*
        var request = require('request');

        var headers = {
            'Authorization': 'Bearer process.env.sendgrid',
            'Content-Type': 'application/json'
        };

        var dataString = '{"personalizations": [{"to": [{"email": "toniek.r@wp.pl"}]}],"from": {"email": "kontakt@gitwarsztaty.pl", "name": "GitWarsztaty"},"subject": "Sending with SendGrid is Fun","content": [{"type": "text/plain", "value": "and easy to do anywhere, even with cURL"}]}';

        var options = {
            url: 'https://api.sendgrid.com/v3/mail/send',
            method: 'POST',
            headers: headers,
            body: dataString
        };

        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
            }
        }

        request(options, callback);
         */
        // import fetch from "node-fetch";
        require('node-fetch');
        function checkStatus(res) {
            if (res.ok) { // res.status >= 200 && res.status < 300
                return res;
            } else {
                throw res.statusText;
            }
        }
        
        const API_ENDPOINT = "https://api.sendgrid.com/v3/mail/send";
        const body = {
            personalizations: [{to: [{email: "toniek.r@wp.pl"}]}],
            from: {email: "kontakt@gitwarsztaty.pl", name: "GitWarsztaty"},
            subject: "Sending with SendGrid is Fun",
            content: [{type: "text/plain", value: "and easy to do anywhere, even with NETLIFY FUNCTIONS!"}]
        };

        var response = fetch(API_ENDPOINT, {
            method: 'post',
            body: JSON.stringify(body),
            headers: {"Accept": "application/json", 'Content-Type': 'application/json', 'Authorization': 'Bearer process.env.sendgrid'}
        })
            .then(checkStatus)
            .then(response => console.log("Success: " + response.json()))
            .catch(error => {
                console.error(error);
                throw error;
            });

        console.log('end request to ' + event.url);

    } catch (e) {
        console.log('Exception catched');
        console.error(e);
        callback(new Error('failure' + JSON.stringify(e))); // to return error
    }

    console.log('------------- END --------------------');
};

