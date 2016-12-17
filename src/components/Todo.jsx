import React from 'react'
import moment from 'moment'
import {connect} from 'react-redux'
var actions = require('../actions/reduxActions')

var Todo = React.createClass({
    render: function(){
        var {text, completed, id, createdAt, completedAt, dispatch} = this.props;

        var todoClass = completed ? 'todo todo-completed' : 'todo';

        var date = ()=>{
            var message = 'Created ';
            var timestamp = createdAt;

            if (completed){
                message = 'Completed ';
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMM Do YYYY @ H:mm');
        };

        return (
            <div className={todoClass} onClick={()=>{
                dispatch(actions.startToggleTodo(id, !completed));
            }}>
                <div>
                    <input type="checkbox" checked={completed} />
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__date">{date()}</p>
                </div>
            </div>
        );
    }
});

module.exports = connect()(Todo);