import { useState, useEffect, useRef } from 'react';
import { XIcon } from '@heroicons/react/solid'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function SelectInput({
    name,
    title,
    description,
    width,
    height,
    defaultIndex,
    content,
    onSelect
}) {

    const [focusSelect, setFocusSelect] = useState(false);
    const [value, setValue] = useState(content[defaultIndex]);

    const divRef = useRef(null);

    return (
        <div className='relative'>
            {title &&
                <div className='mb-4'>
                    <h3 className="text-2xl font-bold text-primary">{title}</h3>
                    <span className="text-sm text-primary-light">{description}</span>
                </div>
            }
            <input name={name} value={value ? value.value : ''} type='hidden' />
            <div className={`relative ${width ? 'w-' + width : 'width-32'} `} >
                <div
                    tabIndex="2"
                    className={`w-full flex border ${height && 'h-' + height} border-gray-900 rounded pl-3.5 pr-8 outline-none ${value ? 'text-primary ' : 'text-gray-500'} bg-title text-lg placeholder-white placeholder-opacity-30  transition duration-800 focus:ring-2 focus:ring-blue-600`}
                    onClick={() => divRef.current.focus()}
                    ref={divRef}
                    onFocus={() => setFocusSelect(true)}
                    onBlur={() => {
                        setTimeout(() => {
                            setFocusSelect(false)
                        }, 100)
                    }}
                >
                    {
                        value &&
                        <div className='flex my-auto items-center rounded'>
                            <img
                                className="h-8 rounded-full"
                                src={value.icon}
                                alt="icon"
                            />
                            <p className='text-white pl-2 select-none'>{value.label}</p>
                        </div>
                    }
                </div>
                <ChevronUpIcon
                    className={`w-6 text-primary-light absolute pointer-events-none top-1/2 -translate-y-1/2 right-2 transition-transform transform duration-400 ${focusSelect ? "rotate-180" : "rotate-0"}`}
                />
            </div>
            <div className={`absolute bg-content ${width ? 'w-' + width : 'width-32'} border rounded mt-1 border-gray-700 shadow-lg z-10 transition-opacity duration-500 transform 
                ${focusSelect ? 'opacity-100' : 'opacity-0'} ${focusSelect ? '' : 'hidden'}`}>
                <div className='max-h-24 overflow-auto'>
                    {
                        content.map((item, index) => {
                            return (
                                <div key={index} className='flex items-center rounded hover:bg-gray-600' onClick={() => { setValue(item); onSelect(item.value); }}>
                                    <img
                                        className="h-12 rounded-full p-2"
                                        src={item.icon}
                                        alt="icon"
                                    />
                                    <p className='text-white pl-2 py-1 select-none'>{item.label}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}