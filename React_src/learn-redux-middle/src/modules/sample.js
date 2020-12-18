import {handleActions} from 'redux-actions'
import * as api from '../lib/api'
import createRequestThunk from '../lib/createRequestThunk'


//declear action types
//3 kink of action for each request
const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FALE = 'sample/GET_POST_FALE';


const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FALE = 'sample/GET_USERS_FALE';



// make thunk funtion.
//inside thunk func, different action will dispatch each start, success, fail
export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

const initialState = {
    post: null,
    users: null
};

//loading 중의 상태는 loading 객체에서 관리.
const sample = handleActions(
    {
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false //end req.
            },
            post : action.payload
        }),
        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: false //end req.
            },
            users : action.payload
        }),
    },
    initialState
)

export default sample;