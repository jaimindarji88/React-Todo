import React from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';

var TodoList = React.createClass({
    render: function(){
        var {todos} = this.props;
        if (todos.length === 0){
            return (
                <p className="container__message">Nothing to do!</p>
            )
        }
        var renderList = ()=>{
            return todos.map((todo)=>{
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
        return {
            todos: state.todos
        };
    }
)(TodoList);