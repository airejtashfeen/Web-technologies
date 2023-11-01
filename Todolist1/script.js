let myInput= document.getElementById('myInput');
let addTask= document.getElementById('addTask');
let taskList=document.getElementById('taskList');

let counter=0;
addTask.addEventListener("click", ()=>{
  counter++;
  let newLi=document.createElement('li');
  let newText=myInput.value;
  if(counter===3){
    addTask.disabled=true;
  }
  newLi.textContent=newText;
  taskList.appendChild(newLi);
  myInput.value="";
  let removeBtn= document.createElement('button');
  removeBtn.textContent="Remove";
  newLi.appendChild(removeBtn);

  removeBtn.addEventListener("click", ()=>{
    newLi.parentNode.removeChild(newLi);
    counter--;
    addTask.disabled= false;
  })
 
  
})

