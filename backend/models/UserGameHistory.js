#!/usr/bin/env node

const mongoose = require('mongoose');

/*
 * UserGameHistory Schema
 */
const UserGameHistorySchema = new mongoose.Schema({
	// reference to the user id
	user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
	// reference to the game id
	game_id: {type: mongoose.Schema.Types.ObjectId, ref: 'GameHistory', required: true},
	// reference to the game type
	game_type: {type: String, ref: 'GameHistory', required: true},
	// player's game result
	result: {type: String, enum: ['win', 'loss', 'draw'], required: true},
	// reference to time the game created
	created_at: {type: Date, ref: 'GameHistory', required: true},
	// reference to time the game ended
	ended_at: {type: Date, ref: 'GameHistory', required: true},
});

/*
 * UserGameHistory Model
 */
module.exports = mongoose.model('UserGameHistory', UserGameHistorySchema);
