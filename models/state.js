const { Schema,  model} = require('mongoose')
const stateSchema = new Schema ({
     state:{type: String, required: false},
     closingTime:{type: String, required: false},
     electoralVotes:{type: String, required: false},
     timeSixteen:{type: String, required: false},
     daySixteen:{type: String, required: false},
     winnerSixteen:{type: String, required: false},
     timeTwenty:{type: String, required: false},
     dayTwenty:{type: String, required: false},
     winnerTwenty:{type: String, required: false},
     timeTwentyFour:{type: String, required: false},
     dayTwentyFour:{type: String, required: false},
     winnerTwentyFour:{type: String, required: false},
     Population:{type: String, required: false},
     Zone:{type: String, required: false}
 }, {
          timestamps:true
     })
     module.exports(model('State', stateSchema))


     

