
const Password = require('./indexx'); 

const passwordGenerator = new Password();
const newPassword = passwordGenerator.generatePassword(12);
console.log(newPassword);
