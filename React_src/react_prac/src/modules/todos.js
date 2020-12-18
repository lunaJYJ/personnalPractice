import {createAction, handleActions} from 'redux-actions'

const CHANGE_INPUT = 'todos/CHANGE_INPUT'
const INSERT = 'todos/INSERT'
const TOGGLE = 'todos/TOGGLE'
const REMOVE = 'todos/REMOVE'

export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 1; // +1 every called insert
export const insert = createAction(INSERT, text => ({
        id: id++,
        text,
        done: false,
}));

export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

const initialState = {
    input: '',
    todos: []
};

const todos = handleActions(
{
        [CHANGE_INPUT]: (state, {payload: input}) => ({...state, input}),
        [INSERT] : (state,action) => (
            {
                ...state,
                todos: state.todos.concat(action.payload)
            }),
        [TOGGLE]: (state, action) => (
            {
                ...state,
                todos: state.todos.map(todo=> todo.id === action.payload ? {...todo, done : !todo.done} : todo)
            }),
        [REMOVE]: (state, action) => (
            {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            })
}, initialState

);

export default todos;