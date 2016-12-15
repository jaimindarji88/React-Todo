import React from 'react'
import {connect} from 'react-redux'
var actions = require('../actions/reduxActions');

var AddTodo = React.createClass({
    onSubmit: function(e){
        e.preventDefault();
        var {dispatch} = this.props;
        var text = this.refs.todoText.value;
        if (text.length > 0){
            this.refs.todoText.value = "";
            dispatch(actions.addTodo(text));
        } else {
            this.refs.todoText.focus();
        }
    },
    render: function(){
        return (
            <div className="container__footer">
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref="todoText" placeholder="What do you need to do?"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});

module.exports = connect()(AddTodo);