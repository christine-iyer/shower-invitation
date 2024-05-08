// server.js
require('dotenv').config() // **
/* This lets me take the values from my .env file
    and inject them into process.env
    My .env should have a MONGO_URI which will come from my
    MongoDB cloud provider.
*/
require('./config/database') // **
/* running this will connect our database to our MERN app */
const express = require('express')
const app = express()
/* create an application object that we can use to build our
    API that will connect to our React App 
*/
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const PORT = process.env.PORT || 3006

// middleware
app.use(express.json()) //req.body
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(logger('dev'))
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

app.use('/api/haikus', require('./routes/api/haikus'))
app.use('/api/blahgs', require('./routes/api/blahgs'))


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`I am listening on ${PORT}. We In the Building.`)
})
// Import the Twilio package
// const twilio = require('twilio');



// // Define an asynchronous function to send an SMS message
// async function sendSMS(message, to) {
//     try {
//         // Create a Twilio client using environment variables
//         const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

//         // Send the SMS message and store the message info in 'messageInfo'
//         const messageInfo = await client.messages.create({
//             body: message,         // The message content
//             from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number (sender)
//             to                   // The recipient's phone number
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
//     const messageInfo = await sendSMS(`${PORT} we are in the building`, +8777804236);

//     // Log the message info (this will include the message SID, etc.)
//     console.log(messageInfo);
// })();


