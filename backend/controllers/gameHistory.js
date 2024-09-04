const express = require('express');
const GameHistory = require('../models/GameHistory');
const UserGameHistory = require('../models/UserGameHistory');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        // Find all games
        const getAllGames = await UserGameHistory.find();
        console.log(getAllGames);

        // Return success response with orders
        res.status(200).json(getAllGames);
    } catch (error) {
        // Return error response
        console.error('Error fetching Order:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/game', (req, res) => {
    const { user_id, game_id, result, created_at, updated_at } = req.body;
    const newGameHistory = new UserGameHistory({
        user_id,
        game_id,
        result,
        created_at,
        updated_at,
    });
    newGameHistory.save().then(() => {
        console.log('Game history saved successfully');
    }).catch((error) => {
        console.error('Error saving game history:', error);
    });

})

module.exports = router;