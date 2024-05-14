require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid, authToken);

const phoneNumbers = ["+12076531815","12077722214", "+12072399509"]

async function sendSMS(phoneNumber) {
    try {
        const message = await client.messages.create({
            body: 'Your SMS message here',
            from: process.env.TWILIO_PHONE_NUMBER, // Twilio phone number
            to: phoneNumber
        });
        console.log(`SMS sent to ${phoneNumber}: ${message.sid}`);
    } catch (error) {
        console.error(`Error sending SMS to ${phoneNumber}: ${error.message}`);
    }
}

async function sendBulkSMS() {
    for (const phoneNumber of phoneNumbers) {
        await sendSMS(phoneNumber);
    }
}

sendBulkSMS();
