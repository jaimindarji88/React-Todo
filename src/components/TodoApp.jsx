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
    handleSearch: function(completed, text){
        this.setState({
            completed: completed,
            searchText: text.toLowerCase()
        });
    },
    render: function(){
        //var {todos, completed, searchText} = this.state;
        //var filtered  = TodoAPI.filterTodos(todos, completed, searchText);


        return (
            <div>
                <h1 className="page-title">Todo App</h1>

                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch} />
                            <TodoList/>
                            <AddTodo />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;