
let inputTask = document.querySelector(".newTask");
let btnAddTask = document.querySelector(".btnAddTask");
let tasks = document.querySelector(".tasks");
let delBtn = document.querySelector(".delete");

let li;
let btnDel;

// Function that creates a list item / Função que cria um li
function createListItem(){
    let li = document.createElement('li');
    return li;
}

// This function creates a li based on input content / Essa função cria um li baseado no conteúdo do input
function createInputText(inputText){
    li = createListItem();
    li.innerHTML = inputText;
    tasks.appendChild(li);
    li.setAttribute('class', 'taskList');
    clearInput();
    createDeleteBtn(li);

}
//This function just clear the input and assign focus / Essa função apenas limpa o input e atribui foco
function clearInput(){
    inputTask.value = '';
    inputTask.focus();
}

// Function that creates the delete button/ Função que cria o botão de apagar
function createDeleteBtn(li){
    li.innerHTML+= '  ';
    let btnDel = document.createElement('button');
    btnDel.innerHTML = 'Remover'
   
    btnDel.setAttribute('class', 'delete');
    btnDel.setAttribute('title', 'Apagar tarefa');
    li.appendChild(btnDel);
}

// Function under developmen / Função em desenvolvimento
// function saveTasks(){
//     const liTasks = tasks.querySelectorAll('li');
//     console.log(liTasks);
// }


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

document.addEventListener('click', function(event){
    let el = event.target;
    
    
    if (el.classList.contains('delete')){
       li.remove();
    }
   
});

