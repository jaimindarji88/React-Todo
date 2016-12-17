module.exports = {
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