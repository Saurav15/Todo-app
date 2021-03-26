// All elements connect
const add_todo = document.getElementsByClassName('fa-plus-square')[0];
const todo_container = document.getElementsByClassName('todo-container')[0];
let input_value = document.querySelector('input');
let tooltip = document.getElementsByClassName('tooltip')[0];
const filter = document.querySelector('select');

// console.log(filter[1]);


// All functions
var create_div = () => {
    if (input_value.value.length == 0) {
        tooltip.style.display = 'inline'
    }

    else {
        tooltip.style.display = 'none'
        // Create new div
        const todo_items = document.createElement('div');
        todo_items.classList.add('todo-items');
        todo_items.innerText = input_value.value;

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
        complete_btn.addEventListener('click', () => {
            if (list_items.classList[1] == 'dark_bg') {
                todo_items.style.textDecoration = 'none';
                list_items.classList.remove('dark_bg')
            }
            else {
                todo_items.style.textDecoration = 'line-through';
                list_items.classList.add('dark_bg');
            }
        });

        // Delete when delete button is pressed
        trash_btn.addEventListener('click', () => {
            list_items.classList.add('delete_transition');
            setTimeout(() => {
                list_items.remove();
            }, 500)
        })

        // Clear input tag as add_todo is pressed
        const clear_input = document.getElementById('input-text');
        clear_input.value = "";

    }
}








// Calling function
add_todo.addEventListener('click', create_div)

input_value.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
        create_div();
    }
})




filter.addEventListener('change',(e)=>{
    const list_items_var = document.getElementsByClassName("list-items");
    // console.log(list_items_var.length);
   
    var x = e.target.options[e.target.selectedIndex].text;
    console.log(x);

    if(x == 'Completed'){
        for(var i = 0; i < list_items_var.length; i++){
            if(list_items_var[i].classList[1]=='dark_bg'){
                list_items_var[i].classList.add('show_all_items');
            }
            else{
                list_items_var[i].classList.remove('hide_items');
                list_items_var[i].classList.remove('show_all_items');
                list_items_var[i].classList.add('hide_items');
            }
        }
    }

    else if(x == 'Not Completed'){
        for(var i = 0; i < list_items_var.length; i++){
            if(list_items_var[i].classList[1]=='dark_bg'){
                console.log(list_items_var[i].classList.add('hide_items'));
            }
            else{
                list_items_var[i].classList.remove('hide_items');
                list_items_var[i].classList.remove('show_all_items');
                list_items_var[i].classList.add('show_all_items');
            }
        }
    }

    else if (x == 'All'){
        for(var i = 0; i < list_items_var.length; i++){
            list_items_var[i].classList.remove('hide_items');
            list_items_var[i].classList.remove('show_all_items');
            list_items_var[i].classList.add('show_all_items');
        }
    }
});
