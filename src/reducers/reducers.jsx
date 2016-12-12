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
}