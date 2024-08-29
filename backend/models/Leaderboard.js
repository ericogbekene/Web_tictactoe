#!/usr/bin/env node

const mongoose = require('mongoose');

/*
 * Leaderboard Schema
 */
const LeaderboardSchema = new mongoose.Schema({
	// reference to the user
	user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
	// player rank on the leaderboard
	rank: {type: Number, required: true},
	// total number of his wins
	wins: {type: Number, default: 0},
	// total number of losses
	losses: {type: Number, default: 0},
	// total umber of draws
	draws: {type: Number, default: 0},
	// timestamp when the leaderboard was last updated
	last_updated: {type: Date, default: Date.now},
});

/*
 * Leaderboard Model
 */
module.exports = mongoose.model('Leaderboard', LeaderboardSchema);
