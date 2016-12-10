import React from 'react'
import Todo from './Todo'

var TodoList = React.createClass({
    render: function(){
        var {todos} = this.props;
        var renderList = ()=>{
            return todos.map((todo)=>{
                return <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
            });
        };


        return (
            <div>
                {renderList()}
            </div>
        )
    }
});

module.exports = TodoList;