import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { createTodo } from '../redux/todoslice';
import { TodoType } from '../types/Types';

function Todocreate() {

    const dispatch = useDispatch();

    const [newTodo, setNewTodo] = useState<string>('');

    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert('todo gir kardeşim')
            return;
        }

        const payload: TodoType = {
            id: Math.floor(Math.random() * 99999999),
            content: newTodo
        }
        dispatch(createTodo(payload))
        setNewTodo('')
    }




    return (
        <div className='flex justify-between w-1/2 bg-slate-400 h-16 items-center p-3 rounded-xl shadow-2xl'>
            <input

                value={newTodo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setNewTodo(e.target.value)
                }}


                type="text" className='w-3/4 h-9  bg-transparent text-white border-solid border-b-2 outline-none' />

            <button className='justify-center items-center flex  w-9 h-9 rounded-3xl bg-slate-200 hover:bg-slate-300'
                onClick={handleCreateTodo}  ><FaPlus /></button>
        </div>
    )
}

export default Todocreate