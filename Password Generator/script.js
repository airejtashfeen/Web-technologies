class Password {
    constructor() {
        console.log("Welcome to the password generator");
        this.pass = "";
    }

    generatePassword(len) {
        if (len < 3) {
            return "Length of password should be at least 3 characters";
        } else {
            let i = 0;
            while (i < len) {
                this.pass += chars[Math.floor(Math.random() * chars.length)];
                this.pass += nums[Math.floor(Math.random() * nums.length)];
                this.pass += special[Math.floor(Math.random() * special.length)];
                i+=3;
            }
            this.pass = this.pass.substr(0, len);
            return this.pass;
        }
    }
}

let chars = "qwertyuiopasdfghjklzxcvbnm";
let nums = "1234567890";
let special = "!@#$%^&*()";

let p = new Password();
console.log(p.generatePassword(8));

let x= document.getElementById('resultDiv');
x.append(p.generatePassword(8));
x.style.fontSize="40px";
