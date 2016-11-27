'use strict'
var five = require('johnny-five');
var board = new five.Board();
board.on('ready', function () {

	var motor = new five.Motor(9);
	motor.start(200);
	motor.stop();
})
