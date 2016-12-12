var reducers = require('../../reducers/reducers');

describe('reducers', ()=>{
    describe('search text reducer', ()=>{
        it('should set search text', ()=>{
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };

            var res = reducers.searchTextReducer('', action);
            expect(res).toEqual(action.searchText);
        });
    });
});