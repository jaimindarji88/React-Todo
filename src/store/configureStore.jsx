var redux = require('redux');
import thunk from 'redux-thunk';

import {
    searchTextReducer, showCompletedReducer, todosReducer
} from '../reducers/reducers'

export var config = ()=>{
    var reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
    });

    var store = redux.createStore(
        reducer,
        redux.compose(
            redux.applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
    return store;
};
