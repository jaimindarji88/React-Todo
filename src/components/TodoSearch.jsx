import React from 'react';
import {connect} from 'react-redux';
var actions = require('../actions/reduxActions');

var TodoSearch = React.createClass({
    render: function(){
        var {dispatch, showCompleted, searchText} = this.props;

        return (
            <div className="container__header">
                <div>
                    <input
                        type="search"
                        ref="searchText"
                        placeholder="Search"
                        onChange={()=>{dispatch(actions.setSearchText(this.refs.searchText.value));}}
                        value={searchText}
                    />
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            ref="checked"
                            value={showCompleted}
                            onChange={()=>{
                                dispatch(actions.toggleShowCompleted());
                            }}
                        />
                        <span>Show completed todos</span>
                    </label>
                </div>
            </div>
        )
    }
});

module.exports = connect((state)=>{
    return {
        showCompleted: state.showCompleted,
        searchText: state.searchText
    };
})(TodoSearch);