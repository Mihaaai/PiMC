#!/usr/bin/python

from socketIO_client import SocketIO, ConnectionError

#server = 'localhost'
server = '192.168.43.182'

try :
	with SocketIO(server,3000) as socketIO :
		socketIO.emit('scan')
		socketIO.wait(seconds=2)
except ConnectionError as e :
	print "Connection Error, guys !"
