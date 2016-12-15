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
        case "TOGGLE_SHOW_COMPLETED":
            return !state;
        default:
            return state;
    }
};

export var todosReducer = (state=[], action) => {
    var newState;
    switch (action.type){
        case "ADD_TODO":
            newState = [
                ...state,
                {
                    id: uuid(),
                    text: action.text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ];
            return newState;
        case "TOGGLE_TODO":
            newState = state.map((todo)=>{
                if (todo.id === action.id) {
                    var next = !todo.completed;

                    return {
                        ...todo,
                        completed: next,
                        completedAt: next ? moment().unix() : undefined
                    };
                } else {
                    return todo;
                }
            });
            return newState;
        case "ADD_TODOS":
            return [
                ...state,
                ...action.todos
            ];
        default:
            return state;
    }
};