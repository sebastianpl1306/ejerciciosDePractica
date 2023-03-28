const initialState = [{
    id: 1,
    todo: 'Recolectar la gema del alma',
    done: false
}];

const todoReducer = (state = initialState, action = {}) =>{
    if (action.type === '[TODO] Add new todo') {
        return [ ...state, action.payload ];
    }

    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la gema del tiempo',
    done: false
};

const addNewTodo = {
    type: '[TODO] Add new todo',
    payload: newTodo,
};

todos = todoReducer(todos, addNewTodo);

console.log(todos);