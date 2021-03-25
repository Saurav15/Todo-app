// All elements connect
const add_todo = document.getElementsByClassName('fa-plus-square')[0];
const todo_container = document.getElementsByClassName('todo-container')[0];
let input_value = document.querySelector('input');
let tooltip = document.getElementsByClassName('tooltip')[0];

console.log(input_value);

// All functions
var create_div = () =>{
    if(input_value.value.length == 0){
        tooltip.style.display = 'inline'
    }

    else{
        tooltip.style.display = 'none'
    // Create new div
    const todo_items = document.createElement('div');
    todo_items.classList.add('todo-items');
    todo_items.innerText =input_value.value;
    
    // Create complete button
    const complete_btn = document.createElement('button');
    complete_btn.classList.add('complete-btn');
    complete_btn.innerHTML = '<i class="far fa-check-circle"></i>'

    // Create trash button
    const trash_btn = document.createElement('button');
    trash_btn.classList.add('trash-btn');
    trash_btn.innerHTML = '<i class="fas fa-trash"></i>';

    // Create a li tag to put all these elements created
    const list_items = document.createElement('li');
    list_items.classList.add('list-items');

    // Put all these elements into li 
    list_items.append(todo_items);
    list_items.append(complete_btn);
    list_items.append(trash_btn);

    // Add li to the todo-ontainer
    todo_container.append(list_items);



    // Strike when Complete Btn is pressed
    complete_btn.addEventListener('click',()=>{
        todo_items.style.textDecoration = 'line-through';
        list_items.classList.add('dark_bg');
        
    // Clear input tag as add_todo is pressed
    });

    // Delete when delete button is pressed
    trash_btn.addEventListener('click',()=>{
        list_items.classList.add('delete_transition');
       setTimeout(()=>{
           list_items.remove();
       },500)
    })

    const clear_input = document.getElementById('input-text');
    clear_input.value = ""
}
}



// Calling function
add_todo.addEventListener('click',create_div)


input_value.addEventListener('keyup',(e)=>{
    if(e.key==='Enter' || e.keyCode===13){
        create_div();
    }
})
