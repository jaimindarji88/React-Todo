var actions = require('../../actions/reduxActions');

describe('actions', ()=>{
    it('should generate search text action', ()=>{
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some search text'
        };

        var res = actions.setSearchText(action.searchText);
        expect(res).toEqual(action);
    });

    it('should generate todo action', ()=>{
        var action = {
            type: 'ADD_TODO',
            text: 'nice'
        };

        var res = actions.addTodo(action.text);
        expect(res).toEqual(action);
    });

    it('should generate toggle show completed action', ()=>{
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED',
        };

        var res = actions.toggleShowCompleted(action.text);
        expect(res).toEqual(action);
    });


    it('should generate toggle todo action', ()=>{
        var action = {
            type: 'TOGGLE_TODO',
            id: 2
        };

        var res = actions.toggleTodo(action.id);
        expect(res).toEqual(action);
    })
});