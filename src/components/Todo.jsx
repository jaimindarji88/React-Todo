import React from 'react'
import moment from 'moment'


var Todo = React.createClass({
    render: function(){
        var {text, completed, id, onToggle, createdAt, completedAt} = this.props;

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
            <div onClick={()=>{
                onToggle(id);
            }}>
                <input type="checkbox" checked={completed} />
                <p>{text}</p>
                <p>{date()}</p>
            </div>
        );
    }
});

module.exports = Todo;