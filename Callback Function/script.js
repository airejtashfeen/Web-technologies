function loadScript(src, callback){
let script= document.createElement("script");
script.src= src;
script.onload= function(){
    console.log("Loaded script with SRC:" + src)
}
if(callback){
    callback();
}
document.body.appendChild(script);
}

function hello(){
    alert('Hello World');
}

function goodmorning(){
    alert('good morning');
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", hello)