'use strict';

var nodemailer = require('nodemailer');
const env = require('../config/secret.json');


var transporter = nodemailer.createTransport({
	host: env.email_host,
	port: '465',
	secure: true,
	auth: {
		user: env.mailGunUser,
		pass: env.mailGunPassword
	}
});

var sendEmail = function(mailOptions) {
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
		}
		console.log('Mesage %s sent: %s', info.messageId, info.response);
	});
};

function notifyAdmin(user) {
	var mailOptions = {
		from: env.newUserNotifEmail, // sender email address
		to: env.newUserNotifEmail,	// list of receivers
		subject: 'GiveLight Notification - ' + user.recordType,
		text: 'Hi,\n' +
			'\t A new user has SignedUp. Here is the new User Info,\n' +
			'\t Name : ' + user.name + '\n' +
			'\t Email : ' + user.email + '\n' +
			'\t Phone : ' + user.phone + '\n' +
			'\t Country : ' + user.country + '\n' +
			'\t Region : ' + user.region + '\n' +
			'\t Interest : ' + user.interests + '\n' +
			'\t Skills : ' + user.skills + '\n' +
			'\nRegards\n' +
			'GiveLight'
	};
	sendEmail(mailOptions);
};

module.exports = {
	notifyAdmin
};
