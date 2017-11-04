// Twilio Creds
var auth = require('./auth.js');
const accountSid = auth.accountSid;
const authToken = auth.authToken;

const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    to: auth.to,
    from: auth.from,
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
  })
  .then((message) => console.log(message.sid));
