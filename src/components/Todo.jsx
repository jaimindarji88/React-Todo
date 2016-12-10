import React from 'react'


var Todo = React.createClass({
    render: function(){
        var {text, completed, id, onToggle} = this.props;
        return (
            <div onClick={()=>{
                onToggle(id);
            }}>
                <input type="checkbox" checked={completed} />
                {text}
            </div>
        );
    }
});

module.exports = Todo;