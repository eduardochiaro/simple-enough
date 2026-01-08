var Clay = require('@rebble/clay');
var clayConfig = require('./config');
var clay = new Clay(clayConfig);

Pebble.addEventListener("ready",
    function(e) {
        console.log("Simple Enough watchface ready!");
    }
);
