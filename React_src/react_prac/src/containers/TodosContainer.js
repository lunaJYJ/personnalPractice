import React from 'react'
import Todos from '../Components/Todos'
import { changeInput, insert, toggle, remove} from '../modules/todos';
import { connect } from 'react-redux'

const TodoContainer = ({
    input, todos, changeInput, insert, toggle, remove,
}) => {
    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={changeInput}
            onInsert={insert}
            onToggle={toggle}
            onRemove={remove}
        />
    )
}

export default connect(
    //비구조화 할당 통해 todos 분리,
    // state.todos.input 대신 todos.input 사용
    ({todos}) => ({
        input: todos.input,
        todos: todos.todos,
    }),
    {
        changeInput, insert, toggle, remove
    }
)(TodoContainer);