import {createStore} from 'redux'

const divToggle = document.querySelector('.toggle')
const counter = document.querySelector('h1')
const btnIncrease = document.querySelector('#increase')
const btnDecrease = document.querySelector('#decrease')

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

//액션 생성함수.(액션객체를 만들어주는 함수)
const toggleSwitch = () => ({type: TOGGLE_SWITCH})
const increase = difference => ({type: INCREASE, difference})
const decrease = () => ({type: DECREASE})

const initialState = {
    toggle: false,
    counter: 0
};

//state가 undef 일때는 initial을 기본값으로.
//리듀서 : 변화를 일으키는 함수
function reducer(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state,
                toggle: !state.toggle
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference
            }
        case DECREASE:
            return {
                ...state,
                counter: state.counter-1
            }
        default:
            return state;
    }
}

const store = createStore(reducer)

//state를 사용한 기본적인 렌더링.
const render = () => {
    const state = store.getState();

    if(state.toggle) {
        divToggle.classList.add('active')
    } else {
        divToggle.classList.remove('active')
    }

    //counter
    counter.innerText = state.counter;
};

render();

//render 가 store를 구독하는 상태로 만들어 줌
store.subscribe(render);


//이벤트 발생 = dispatch(액션생성함수)
divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
    store.dispatch(increase(1))
}
btnDecrease.onclick = () => {
    store.dispatch(decrease());
}