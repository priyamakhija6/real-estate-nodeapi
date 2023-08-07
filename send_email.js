var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'us-east-1'});

// Create sendEmail params
var params = {
    Destination: { /* required */

        ToAddresses: [
            'priya.makhija24@gmail.com',
            //'deepanshu.lulla@gmail.com'
            /* more items */
        ]
    },
    Message: { /* required */
        Body: { /* required */
            Html: {
                Charset: "UTF-8",
                Data: "HTML_FORMAT_BODY"
            }
        },
        Subject: {
            Charset: 'UTF-8',
            Data: 'Test email'
        }
    },
    Source: 'priya.makhija24@gmail.com' /* required */
};

// Create the promise and SES service object
var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

// Handle promise's fulfilled/rejected states
sendPromise.then(
    function(data) {
        console.log(data.MessageId);
    }).catch(
    function(err) {
        console.error(err, err.stack);
    });