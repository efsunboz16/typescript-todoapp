import React from 'react'
import { FaPlus } from "react-icons/fa";

function Todocreate() {
    return (
        <div className='flex justify-between w-1/2 bg-slate-400 h-16 items-center p-3 rounded-xl shadow-2xl'>
            <input type="text" placeholder='Create ToDo' className='w-3/4 h-9  bg-transparent text-white border-solid border-b-2 outline-none' />
            <button className='justify-center items-center flex  w-9 h-9 rounded-3xl bg-slate-200'><FaPlus /></button>
        </div>
    )
}

export default Todocreate