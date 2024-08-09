import React from 'react'
import { TiDelete } from "react-icons/ti";
import { BsChatSquareText } from "react-icons/bs";
import { TodoType } from '../types/Types';

interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {

    const { id, content } = todoProps

    return (
        <div className='w-full  '>
            <div className='flex justify-between w-full bg-slate-200 mt-4 h-16 items-center p-3 rounded-xl shadow-2xl'>
                <p className='w-2/3 '>{content}</p>
                <div className='w-1/5 flex justify-between text-3xl'>
                    <TiDelete className='cursor-pointer' />
                    <BsChatSquareText className='cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Todo