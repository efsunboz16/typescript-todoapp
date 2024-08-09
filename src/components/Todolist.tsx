import React from 'react'
import { TiDelete } from "react-icons/ti";
import { BsChatSquareText } from "react-icons/bs";


function Todolist() {
    return (
        <div className='w-1/2 '>
            <div className='flex justify-between w-full bg-slate-200 mt-4 h-16 items-center p-3 rounded-xl shadow-2xl'>
                <p className='w-2/3 '>dsfvdfadf</p>
                <div className='w-1/5 flex justify-between text-3xl'>
                    <TiDelete className='cursor-pointer' />
                    <BsChatSquareText className='cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Todolist