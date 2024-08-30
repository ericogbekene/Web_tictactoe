const mongoose = require('mongoose');

// Set Up the Database connection 
const connection = mongoose.createConnection("mongodb://localhost:27017/geeksforgeeks", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
  });

const Game = new mongoose.Schema({
    rounds: String,

})

const userSchema = new mongoose.Schema({ 
    name: String,
    username: String,
    email: String,
    password: String,
    games: [Game],
    avatar: String,
    fixedDeposit: Number, 
    interest: Number, 
    tenure: {type:Number, default:6} 
  });
  
const User = connection.model('User', userSchema);