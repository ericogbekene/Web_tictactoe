#!/usr/bin/env node

// import Mongoose library
const mongoose = require('mongoose');

/*
 * User Schema
 */
const UserSchema = new mongoose.Schema({
	// auto-generated user unique id
	user_id: {type: Schema.Types.ObjectId, auto: true},
	// user first name
	first_name: {type: String, required: true, unique: true},
	// user second name
	second_name: {type: String, required: true, unique: true},
	// optional user email address
	email: {type: String, unique: true, sparse: true},
	// Hashed password for user authentication
	password: {type: String, required: false},
	// path to the player avatar image
	avatar: {type: String, required: false},
	// user total number of wins
	total_wins: {type: Number, default: 0},
	// user total number od losses
	total_losses: {type: Number, default: 0},
	// user total number of draws
	total_draws: {type: Number, default: 0},
	// timestamp when user account was created (automatically set)
	created_at: {type: Date, default: Date.now},
	// timestamp for user's profile last update
	updated_at: {type: Date, default: Date.now},
});

/*
 * User Model
 */
module.exports = mongoose.model('User', UserSchema);
