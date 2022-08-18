let inputTask = document.querySelector(".newTask");
let btnAddTask = document.querySelector(".btnAddTask");
let tasks = document.querySelector(".tasks");



function createListItem(){
    let li = document.createElement('li');
    return li;
}


function createInputText(inputText){
    let li = createListItem();
    li.innerHTML = inputText;
    tasks.appendChild(li);
    clearInput();
    createDeleteBtn();

}

function clearInput(){
    inputTask.value = '';
    inputTask.focus();
}

function createDeleteBtn(){
   
    let delBtn = document.createElement('button');
    delBtn.innerHTML = 'Remover'
    tasks.appendChild(delBtn);
}

//  function removeTask(){
//      let delTask = inputTask.removeChild()
//  }



btnAddTask.addEventListener('click', function(event){
    if(!inputTask.value) return;
    event.preventDefault();
    createInputText(inputTask.value);
    
    
      
       
});

inputTask.addEventListener('keypress', function(event){
   if (event.keyCode === 13){
       createInputText(inputTask.value);
       clearInput();
   }
  
})

