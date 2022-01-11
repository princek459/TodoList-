/**
 * Adding Todos
 */

// Grabbing the add in the form class
const addForm = document.querySelector('.add');

// Reference to con list
const list = document.querySelector('.todos');

// Generating template to pass the todo for injecting into the DOM
const generateTemplate = todo => {

    // Creating template
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    // adding the new html to the html of the list
    list.innerHTML += html;
};

// attaching an event listener of submit to the form
addForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addForm.add.value.trim();
    // console.log(todo);

    // calling the template and clearing the form
    if(todo.length){
        generateTemplate(todo); 
        addForm.reset();
    }
});

/**
 * Delete todos
 */

list.addEventListener('click', e => {

    // Checking if the delete class is selected to be deleted
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

/**
 * Search and filtering
 */
const search = document.querySelector('.search input');

// Filtering todos
const filterTodos = (term) => {
    
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
};

// keyup event
search.addEventListener('keyup', () => {
    // what the user types in
    const term = search.value.trim().toLowerCase();

    filterTodos(term);
});
