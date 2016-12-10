import React from 'react';
import uuid from 'node-uuid';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';
import TodoAPI from './../api/TodoAPI';

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: TodoAPI.getTodos(),
            completed: false,
            searchText: ""
        };
    },
    componentDidUpdate: function(){
        TodoAPI.setTodos(this.state.todos)
    },
    handleAddTodo: function(text){
        this.setState({
           todos: [
               ...this.state.todos,
               {id: uuid(), text: text, completed:false}
           ]
        });
    },
    handleToggle: function(id){
        var updatedTodos = this.state.todos.map((todo)=>{
            if (todo.id === id) todo.completed = !todo.completed;
            return todo
        });
        this.setState({
            todos: updatedTodos
        })
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
                <TodoList todos={todos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;