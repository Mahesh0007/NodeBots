var five = require('johnny-five')
var board = new five.Board()
board.on('ready', function() {
	var servo = new five.Servo(9);
	this.samplingInterval(1000);
	servo.sweep();

	board.wait(3000, function () {
		servo.stop();
		servo.center();
	})
})
