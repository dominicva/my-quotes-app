http.createServer doing three main things for us,
2 in node, 1 in JS.

In Node:

1.  Command for node internals to set up the network
    feature of node specialising in http. With the help of
    libuv, node sets up open socket/channel to internet in
    the computer's networking internals. The computer is now ready to receive messages on the specified channe (the port)
2.  Stores function passed as argument (doOnIncoming) to createServer to be autorun when we get an incoming message.

In JS:

3.  Immediately returns an object full of methods, including listen and on, which when run allow us to edi the instance of the http node feature we've set up When we receive incoming request, node executes that function, which will eventually send a response message back.

Node automatically packages up two (names/labels decided by
us, 'req' and 'res' are just convention) JS objects for us.

1. import info from inbound message:
   {
   url {string},
   and lots of other things...
   }

Has data on it that we can grab directly.

2. Has a bunch of method labels/bindings (including end).
   Whatever we pass to end will be used to add data to the
   response message. This obj has functions that when run
   from JS will be labels (back into node) to update the data on the message that gets sent back.
