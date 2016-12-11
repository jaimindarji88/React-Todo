import React from 'react'
import moment from 'moment'


var Todo = React.createClass({
    render: function(){
        var {text, completed, id, onToggle, createdAt, completedAt} = this.props;

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
                onToggle(id);
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

module.exports = Todo;