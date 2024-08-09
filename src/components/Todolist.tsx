import React from 'react'
import Todo from './Todoo'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { TodoType } from '../types/Types'

function Todolist() {

    const { todos } = useSelector((state: RootState) =>
        state.todo
    )

    return (
        <div className='w-1/2 '>
            {todos && todos.map((todo: TodoType) => (
                <Todo key={todo.id} todoProps={todo} />
            ))}

        </div>
    )
}

export default Todolist