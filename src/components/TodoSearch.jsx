import React from 'react';

var TodoSearch = React.createClass({
    handleSearch: function(){
        var checked = this.refs.checked.checked;
        var text    = this.refs.searchText.value;

        this.props.onSearch(checked, text);
    },
    render: function(){
        return (
            <div>
                <div>
                    <input
                        type="search"
                        ref="searchText"
                        placeholder="Search"
                        onChange={this.handleSearch}
                    />
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="checked"/>
                        <span>Show completed todos</span>
                    </label>
                </div>
            </div>
        )
    }
});

module.exports = TodoSearch;