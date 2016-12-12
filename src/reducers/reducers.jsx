import uuid from 'uuid'
import moment from 'moment'

export var searchTextReducer = (state='', action) => {
    switch (action.type){
        case "SET_SEARCH_TEXT":
            return action.searchText;
        default:
            return "";
    }
};

export var showCompletedReducer = (state=false, action) => {
    switch (action.type){
        case "TOGGLE_SHOW_COMPLETER":
            return !state;
        default:
            return state;
    }
};

export var todosReducer = (state=[], action) => {
    switch (action.type){
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: uuid(),
                    text: text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ];
        case "TOGGLE_TODO":
            return state.map((todo)=>{
                if (todo.id === action.id) {
                    var next = !todo.completed;

                    return {
                        ...todo,
                        completed: next,
                        completedAt: next ? moment.unix() : undefined

                    }
                }
            });
        default:
            return state;
    }
};