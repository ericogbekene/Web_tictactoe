#!/usr/bin/env node

//import Mongoose library
const mongoose = require('mongoose');

/*
 * Settings Schema
 */
const SettingsSchema = new mongoose.Schema({
	// reference to the user who owns this settings
	user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
	// selected theme of the game
	theme: {type: String, enum: ['dark', 'light'], default: 'light'},
	// AI difficulty level for single player mode
	ai_difficulty: { type: String, enum: ['easy', 'intermediate', 'hard'], default: 'easy'},
	// number of rounds per game
	rounds_per_game: {type: Number, default: 3},
});

/*
 * Settings Model
 */
module.exports = mongoose.model('Settings', SettingsSchema);
