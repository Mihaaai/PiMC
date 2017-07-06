//get the thermometre values from a socket to the server
window.onload = function(){
	var secondsToCheck = 2000
	var socket = io();
	setInterval(function(){getDegrees(socket)},2000);
}

function getDegrees(socket){
	console.log('Asking for temperature');
	socket.emit('monitor_sensors');
	socket.on('scan_results',function(temp){
		console.log("Temperature is " + temp);
	});
}