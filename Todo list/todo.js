let btn = document.getElementById('btnadd'); 
btn.onclick= handleAdd;

function handleAdd() {
    let x = document.getElementById('newtodo').value;
    let listItem = document.createElement("li");
    listItem.textContent = x;


    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = handleDelete; 
    listItem.appendChild(deleteButton);

    let y = document.getElementById("todos");
    y.appendChild(listItem);

    document.getElementById('newtodo').value = " ";
}


function handleDelete(e) {
    let tag = e.target;
    let li = tag.parentNode; 
    let ul = li.parentNode;
    ul.removeChild(li);
}



