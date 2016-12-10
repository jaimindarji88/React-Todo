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
    },
    filterTodos: function(todos, completed, search){
        var filtered = todos;

        // filter by completed
        filtered = filtered.filter((todo)=>{
            return !todo.completed || completed;
        });

        // filter by search text
        filtered = filtered.filter((todo)=>{
            var text = todo.text.toLowerCase();
            return text.length === 0 || text.indexOf(search) > -1;
        });


        // sort the arrays by completed
        filtered.sort((a, b)=>{
            if (!a.completed && b.completed){
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });

        return filtered;
    }
};