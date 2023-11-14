class Password{
    constructor(){
        this.pass="";
    }

   generatePassword(len){
        if(len<3){
            return "Your Password should be above 3 characters"
        }
        else{
            let i=0;
            while(i<len){
                this.pass+= chars[Math.floor(Math.random()* chars.length)];
                this.pass+= nums[Math.floor(Math.random()* nums.length)];
                this.pass+= specials[Math.floor(Math.random()* specials.length)];
                i+=3;
            }
            this.pass= this.pass.substring(0, len);
            return this.pass;
        }
    }
}

let chars="qwertyuiopasdfghjklzxcvbnm";
let nums= "1234567890";
let specials= "!@#$%^&*()";

let p= new Password();
let x= document.getElementById('resultDiv');

x.append(p.generatePassword(8));
x.style.fontSize='40px';











