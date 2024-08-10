import React, { useState } from 'react'
import { TiDelete } from "react-icons/ti";
import { BsChatSquareText } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../redux/todoslice'

interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {

    const { id, content } = todoProps

    const dispatch = useDispatch()

    const [editable, setEditable] = useState<boolean>(false)
    const [newTodo, setNewTodo] = useState<string>(content)

    const handleRemove = () => {
        dispatch(removeTodo(id))
    }

    const handleChange = () => {
        const payload: TodoType = {
            id: id,
            content: newTodo
        }
        dispatch(updateTodo(payload))
        setEditable(false)
    }

    return (
        <div className='w-full  '>
            <div className='flex justify-between w-full bg-slate-200 mt-4 h-16 items-center p-3 rounded-xl shadow-2xl'>
                {editable ? <input type='text' value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setNewTodo(e.target.value) }} /> : <p className='w-2/3 '>{content}</p>}
                <div className='w-1/5 flex justify-between text-3xl'>
                    <TiDelete onClick={handleRemove} className='cursor-pointer' />
                    {editable ? <FaCheck className='cursor-pointer' onClick={handleChange} /> : <BsChatSquareText className='cursor-pointer' onClick={() => setEditable(true)} />}
                </div>
            </div>
        </div>
    )
}

export default Todo