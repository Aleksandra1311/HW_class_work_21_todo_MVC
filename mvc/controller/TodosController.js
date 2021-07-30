// controller

class TodosController {      
    constructor($el) {        
        this.initCollection(); 
        this.initView($el);   
       
    }

    initCollection() {
        this.todosCollection = new TodosCollection(TODOS_URL); 
        this.todosCollection
            .fetchTodos()
            .then(() => this.renderList());
    }

    initView($el) {
        this.todosView = new TodosView($el, {          
            onDelete: this.deleteTodo.bind(this),       
            onToggle: this.toggleTodo.bind(this),                 
            onSubmit: this.submitForm.bind(this),                  
        });
    }

    renderList() {
        this.todosView.renderList(this.todosCollection.list);
    }

    submitForm(data) {
        this.todosCollection.addTodo(data)
            .then(() => this.renderList());
    }
    
    toggleTodo(id) {
        this.todosCollection.toggleTodo(id);

        this.renderList();
    }

    deleteTodo(id) {  
        this.todosCollection.deleteTodo(id);

        this.renderList();
    }
}
