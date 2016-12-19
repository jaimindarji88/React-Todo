import firebase, {ref} from '../firebase/index';
import moment from 'moment'
import {githubProvider} from '../firebase/index'

export var setSearchText = (searchText)=>{
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    };
};

export var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    }
};

export var addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    }
};

export var addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
    };
};

export var initTodos = () => {
    return (dispatch, getState)=>{
        var todosRef = ref.child('todos');
        return todosRef.once('value').then((snapshot)=>{
            var todos = snapshot.val() || {};
            var parsed = [];

            Object.keys(todos).forEach((id)=>{
                parsed.push({
                    id,
                    ...todos[id]
                });
            });

            dispatch(addTodos(parsed));
        });
    };
};

export var updateTodo = (id, updates) => {
    return {
        type: 'UPDATE_TODO',
        id,
        updates
    }
};

export var startAddTodo = (text)=>{
    return (dispatch, getState)=>{
        var todo = {
            text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null
        };

        var todoRef = ref.child('todos').push(todo);
        todoRef.then(()=>{
            dispatch(addTodo({
                ...todo,
                id: todoRef.key
            }));
        });
    };
};

export var startToggleTodo = (id, completed) => {
    return (dispatch, getState) =>{
        var todoRef = ref.child(`todos/${id}`);
        var updatedTodo = {
            completed,
            completedAt: completed ? moment().unix() : null
        };
        todoRef.update(updatedTodo).then(()=>{
            dispatch(updateTodo(id, updatedTodo));
        })
    };
};

export var startLogin = () => {
    return (dispatch, getState) => {
        return firebase.auth().signInWithPopup(githubProvider).then((res)=>{
            console.log('auth worked', res);
        }, (e)=>{
            console.log(e);
        });
    };
};

export var startLogout = () => {
    return (dispatch, getState) => {
        return firebase.auth().signOut().then(()=>{
            console.log('logged out')
        });
    };
};