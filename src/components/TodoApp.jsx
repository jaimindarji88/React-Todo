import React from 'react';
import uuid from 'node-uuid'
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';


var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {id: uuid(), text:'walk the dog'},
                {id: uuid(), text:'clean the yard'},
                {id: uuid(), text:'nice'},
                {id: uuid(), text:'what'}
            ],
            completed: false,
            searchText: ""
        };
    },
    handleAddTodo: function(text){
        this.setState({
           todos: [
               ...this.state.todos,
               {id: uuid(), text: text}
           ]
        });
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