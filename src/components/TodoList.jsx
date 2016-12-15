import React from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';
import TodoAPI from '../api/TodoAPI'

var TodoList = React.createClass({
    render: function(){
        var {todos, showCompleted, searchText} = this.props;

        var renderList = ()=>{
            if (todos.length === 0){
                return (
                    <p className="container__message">Nothing to do!</p>
                )
            }
            return TodoAPI.filterTodos(todos,showCompleted,searchText).map((todo)=>{
                return <Todo key={todo.id} {...todo}/>
            });
        };

        return (
            <div>
                {renderList()}
            </div>
        )
    }
});


module.exports = connect(
    (state)=> {
        return state;
    }
)(TodoList);