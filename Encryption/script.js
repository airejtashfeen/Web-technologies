const crypto = require("crypto");

const algo = "aes-256-cbc";

const iv = crypto.randomBytes(16);

const msg = 'Hello Jee!';

const key = crypto.randomBytes(32);

const cipher = crypto.createCipheriv(algo, key, iv);

let enc = cipher.update(msg, 'utf-8', 'hex');
enc += cipher.final('hex');

console.log("Encrypted Text:", enc);

const decipher = crypto.createDecipheriv(algo, key, iv);


let dec = decipher.update(enc, 'hex', 'utf-8');
dec += decipher.final('utf-8');

console.log("Decrypted Text:", dec);
