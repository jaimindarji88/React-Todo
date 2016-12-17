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
                action.todo
            ];
            return newState;
        case "UPDATE_TODO":
            newState = state.map((todo)=>{
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        ...action.updates,
                    }
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