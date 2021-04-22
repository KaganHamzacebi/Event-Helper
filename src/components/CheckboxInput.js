import { useState } from 'react';
import './CheckboxInput.css';

export default function CheckboxInput({
    name,
    checked,
    toggleChecked
}) {


    return (
        <div>
            <div className='p-1 pl-2 relative rounded hover:bg-gray-600 flex' onClick={() => toggleChecked()}>
                <div className="flex justify-start items-start">
                    <div className={`border rounded transition-color duration-500 border-gray-900 ${checked ? 'bg-blue-500' : 'bg-content'} w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2`}>
                        <input type="checkbox" checked={checked} value={name} onChange={(e) => console.log(e.target.value)} className="opacity-0 absolute" />
                        <svg className={`fill-current hidden w-4 h-4 text-primary pointer-events-none transition-opacity duration-1000 opacity-0 ${checked ? 'opacity-100' : ''} `} viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                    </div>
                    <span className='text-white select-none pointer-events-none' >{name}</span>
                </div>
            </div>
        </div>
    )
}