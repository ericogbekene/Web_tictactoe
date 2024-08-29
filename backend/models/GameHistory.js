#!/usr/bin/env node

// import Mongoose library
const mongoose = require('mongoose');

/*
 * GameHistory Schema
 */
const GameHistorySchema = new mongoose.Schema({
	// auto-generated unique game id
	game_id: {type: Schema.Types.ObjectId, auto: true},
	// type of the game played
	game_type: {type: String, enum: ['Multiplayer', 'Single-player'], required: true},
	// reference to the first player
	player_1_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
	// reference to the second player (null for single players)
	player_2_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
	// side chosen for the first player
	player_1_side: {type: String, enum: ['X', 'O'], required: true},
	// side chosen for the second player
	player_2_side: {type: String, enum: ['X', 'O'], required: true},
	// reference fort he winning player (null for draw games)
	winner_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null},
	// status of the game
	game_status: {type: String, enum: ['completed', 'ongoing', 'draw'], default: 'ongoing'},
	// number of rounds per game (e.g. 3, 5, infinite)
	rounds: {type: Number, default: 3},
	// a list of the game moves
	moves: {type: Array, default: []},
	// Timestamp when the game started
	started_at: {type: Date, default: Date.now},
	// Timestamp when the game ended
	ended_at: {type: Date},
	// chat messages during the game
	game_chat: {type: [String], required: false, default: 'Type your message here, Please Be Respectful'},
});

/*
 * GameHistory model
 */
module.exports = mongoose.model('GameHistory', GameHistorySchema);
