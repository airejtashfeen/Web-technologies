document.addEventListener('DOMContentLoaded', function(){
   document.querySelector('#red').onclick=function(){
    document.querySelector('#hello').style.color= 'red';
   }
   document.querySelector('#blue').onclick=function(){
    document.querySelector('#hello').style.color= 'blue';
   }
   document.querySelector('#green').onclick=function(){
    document.querySelector('#hello').style.color= 'green';
   }


   
})

function backgroundChange(){

if(document.body.style.backgroundColor==='black'){
    document.body.style.backgroundColor='gray';
    document.getElementById("background").innerHTML = "Click here to change background";
}
else{
    document.body.style.backgroundColor= 'black';
    document.getElementById("background").innerHTML = "Click here to change background";
}
} 