import React from 'react'
import TodoList from './TodoList';
import AddTodo from './AddTodo';


var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {id: 1, text:'walk the dog'},
                {id: 2, text:'clean the yard'},
                {id: 3, text:'nice'},
                {id: 4, text:'what'}
            ]
        }
    },
    handleAddTodo: function(text){
        alert(text);
    },
    render: function(){
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;