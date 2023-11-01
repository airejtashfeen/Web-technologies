const progress = document.getElementById('progress');
index = 0;
document.getElementById('next').addEventListener('click', ()=>{
  if(index > 5)
  {
    return;
  }
  progress.children[++index].classList.add('done-c');
})
document.getElementById('back').addEventListener('click', ()=>{
  if(index == 0)
  {
    return;
  }
  progress.children[index--].classList.remove('done-c');

}) 