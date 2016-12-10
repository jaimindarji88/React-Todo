import React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

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
               {
                   id: uuid(),
                   text: text,
                   completed: false,
                   createdAt: moment().unix(),
                   completedAt: undefined
               }
           ]
        });
    },
    handleToggle: function(id){
        var updatedTodos = this.state.todos.map((todo)=>{
            if (todo.id === id) {
                todo.completed = !todo.completed;
                todo.completedAt = todo.completed ? moment().unix() : undefined
            }

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
        var {todos, completed, searchText} = this.state;
        var filtered  = TodoAPI.filterTodos(todos, completed, searchText);


        return (
            <div>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={filtered} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;