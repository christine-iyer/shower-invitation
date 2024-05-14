require('dotenv').config()
const twilio = require('twilio')
const Haiku = require('../../models/haiku')

const deleteHaiku = async (req, res, next) => {
    try {
        const deletedHaiku = await Haiku.findByIdAndDelete(req.params.id)
        res.locals.data.haiku = deletedHaiku
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const updateHaiku = async (req, res, next) => {
    try {
        const updatedHaiku = await Haiku.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.haiku = updatedHaiku
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const createHaiku = async (req, res, next) => {
    try {
        const createdHaiku = await Haiku.create(req.body)
        res.locals.data.haiku = createdHaiku
       
        async function sendSMS(message, to) {
    try {
        // Create a Twilio client using environment variables
        const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
        const numbers = ["+12077722214", "+12072399509"]
        // Send the SMS message and store the message info in 'messageInfo'
        const messageInfo = await client.messages.create({
            body: message,         // The message content
            from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number (sender)
            to  :  numbers.map            // The recipient's phone number
        });

        // Return the message info
        return messageInfo;
    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error:', error);
    }
}

// An immediately invoked function expression (IIFE) to send an SMS and log the result
(async () => {
    // Call the 'sendSMS' function to send an SMS message
    const messageInfo = await sendSMS(`${createdHaiku.author} just posted`, +8777804236);

    // Log the message info (this will include the message SID, etc.)
    console.log(messageInfo);
})();

        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }


    
}

const getHaikus = async (req, res, next) => {
    try {

        const haikus = await Haiku.find(req.body)
        res.locals.data.haikus = haikus
        haikus.reverse()
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
const respondWithHaikus = (req, res) => {
    res.json(res.locals.data.haikus)
}

const respondWithHaiku = (req, res) => {
    res.json(res.locals.data.haiku)
}

// async function sendSMS(message, to) {
//     try {
//         // Create a Twilio client using environment variables
//         const client = new twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

//         // Send the SMS message and store the message info in 'messageInfo'
//         const messageInfo = await client.messages.create({
//             body: message,         // The message content
//             from: process.env.FROM, // Your Twilio phone number (sender)
//             to   : +18777804236               // The recipient's phone number
//         });

//         // Return the message info
//         return messageInfo;
//     } catch (error) {
//         // Handle any errors that occur during the process
//         console.error('Error:', error);
//     }
// }

// // An immediately invoked function expression (IIFE) to send an SMS and log the result
// (async () => {
//     // Call the 'sendSMS' function to send an SMS message
//     const messageInfo = await sendSMS('Coding with ado', '+18333243225');

//     // Log the message info (this will include the message SID, etc.)
//     console.log(messageInfo);
// })();
module.exports = {
    deleteHaiku,
    updateHaiku,
    getHaikus,
    createHaiku,
    respondWithHaiku,
    respondWithHaikus
}