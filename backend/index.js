const express = require('express');
const path = require('path')

const connectDB = require('./config/database');
const GameHistory = require('./models/GameHistory');
const gameRouter = require('./controllers/gameHistory')
connectDB();

const app = express();


const PORT = 3030;

const gamesURL = '/api/v1/'
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));
app.use(express.json());


// Serve enpoints
/** 
app.use('/users', (req, res) => {
    //res.send('Users endpoint');
    const { user, email, password } = req.body;
    res.send({ user, email, password });
})
*/
app.use(gamesURL, gameRouter);

app.get('/hello', (req, res) => {
    res.send('Hello World')
    console.log(`Hello World`);
})


/** 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    console.log(`Hello from static file path`);
})

*/

console.log(typeof(gameRouter))
//mount custom routes for endpoints here
//app.use('/api/v1/games', gameRouter)

/** 
app.post('/login', (req, res) => {
    const { name, email } = req.body;

    res.send(`Welcome ${name}`);
})

*/

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
}
);