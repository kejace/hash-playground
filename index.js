var crypto = require("crypto");
var hasher1 = crypto.createHash('sha256');
var hasher2 = crypto.createHash('sha256');
var message1 = "Hello world";
var message2 = "Another message";

var hash1 = hasher1.update(message1);

console.log(message1 + ": " + hash1.digest('hex'));

var hash2 = hasher2.update(message2);

console.log(message2 + ": " + hash2.digest('hex'));
