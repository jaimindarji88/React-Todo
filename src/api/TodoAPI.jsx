import $ from 'jquery';

module.exports = {
    setTodos: function(todos){
        if ($.isArray(todos)){
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function(){
        var string = localStorage.getItem('todos');
        var todos = [];

        try {
            todos = JSON.parse(string);
        } catch (e) {

        }
        if ($.isArray(todos)) {
            return todos;
        } else {
            return [];
        }
    }
};