exports.handler = function (event, context, callback) {
    console.log('------------- BEGINNING --------------------');
    console.log('event http method: ' + event.httpMethod);
    console.log('event body: ' + event.body);

    try {
        console.log('start request to ' + event.url);

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


        // http.get(event.url, function(res) {
        //     console.log("Got response: " + res.statusCode);
        //     // context.succeed();
        //     callback(null, 'success msg'); // to return ok
        // }).on('error', function(e) {
        //     console.log("Got error: " + e.message);
        //     // context.done(null, 'FAILURE');
        //     callback(new Error('failure' + e.message)); // to return error
        // });

        console.log('end request to ' + event.url);

    } catch (e) {
        console.log('Exception catched');
        console.error(e);
        callback(new Error('failure' + JSON.stringify(e))); // to return error
    }

    console.log('------------- END --------------------');
};

