export const todoReducer = (state, action) =>{
    switch (action.type) {
        case '[TODO] Add Todo':
            return [ ...state, action.payload ];
        case '[TODO] Remove Todo':
            return state.filter(({id})=>id != action.payload);
        case '[TODO] Toggle Todo':
            return state.map((todo)=>{
                if (todo.id === action.payload) {
                    return {...todo, done: !todo.done}
                }
                return todo
            });
        default:
            return state;
    }
}