import React from 'react'
import Counter from '../Components/Counter'
import { connect } from 'react-redux'
import {increase, decrease} from '../modules/counter';

const CounterContainer = ({number, increase, decrease}) => {
    return <Counter number={number} onIncrease={increase} onDecrease={decrease} /> //presentational components
};

const mapStateToProps = state => ({
    number: state.counter.number,
});

const mapDispatchToProps = dispatch => ({ //dispatch는 store 내장함수.
    increase: () => {
        //console.log('increase dispatch')
        dispatch(increase()); //increase() -> 액션객체 반환 -> dispatch(액션객체)
    },
    decrease: () => {
        dispatch(decrease());
    },
});

export default connect( //store와 연결.
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer);


/* Exactely same as above : 

(...)

export default connect(
    state=> ({
        number: state.counter.number,
    }),
    {
        increase,
        decrease,
    }
)(CounterCountainer)

*/