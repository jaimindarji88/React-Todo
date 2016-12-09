import React from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';


var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {id: 1, text:'walk the dog'},
                {id: 2, text:'clean the yard'},
                {id: 3, text:'nice'},
                {id: 4, text:'what'}
            ],
            completed: false,
            searchText: ""
        };
    },
    handleAddTodo: function(text){
        alert(text);
    },
    handleSearch: function(completed, text){
        this.setState({
            completed: completed,
            searchText: text.toLowerCase()
        });
    },
    render: function(){
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;