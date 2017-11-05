import * as auth from './auth.js';
const accountSid = auth.accountSid;
const authToken = auth.authToken;

const client = require('twilio')(accountSid, authToken);
for (i = 0; i<10; i++){
	console.log(hello);
	client.messages
	.create({
	to: auth.to,
	from: auth.from,
	body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
	})
	.then((message) => console.log(message.sid));
	wait(5000);
}