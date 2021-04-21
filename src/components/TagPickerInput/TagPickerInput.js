import { useState, useEffect } from 'react';
import { SearchIcon } from '@heroicons/react/solid'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { XIcon } from '@heroicons/react/solid'
import Tag from './Tag'

import './TagPickerInput.css'
import CheckboxInput from '../CheckboxInput';

export default function TagPickerInput({
    placeholder,
}) {

    const [selectedList, setSelectedList] = useState([]);
    const [tagList, setTagList] = useState([]);

    const content =
        [
            { label: 'Blue', value: 'blue' },
            { label: 'Black', value: 'black' },
            { label: 'Red', value: 'red' },
            { label: 'White', value: 'white' },
            { label: 'Green', value: 'green' },
        ];

    useEffect(() => {
        console.log('xd');
        setTagList(selectedList);

    }, [selectedList])

    return (
        <div>
            <div className='relative w-72'>
                <div className=' pt-1.5 pr-6 bg-title shadow border border-gray-900 outline-none rounded flex flex-wrap'>
                    {
                        content.map((item, index) => {
                            return <Tag key={index} name={item.label} />
                        })
                    }
                </div>
                {/* ChevronUp Image */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    className={`w-5 text-primary-light absolute pointer-events-none right-2 top-2.5 transition-transform transform duration-400`}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                {/* X Image */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    className={`w-4 text-primary-light right-8 top-3 absolute  transition-all transform duration-500 hover:text-red-600 `}
                >
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </div>
            <div className={`absolute bg-content w-72 border rounded mt-1 border-none shadow-2xl transition-opacity duration-500 transform `}>
                <div className='p-2 relative'>
                    <input
                        type='text'
                        className='w-full border border-gray-900 rounded pl-2 pr-8 outline-none shadow-xl bg-title text-primary text-lg placeholder-white placeholder-opacity-30  transition duration-800 focus:ring-2 focus:ring-blue-600'
                        placeholder='Search'
                    />
                    <SearchIcon
                        className='w-4 text-primary-light absolute pointer-events-none transform top-1/2 -translate-y-1/2 right-4'
                    />
                </div>
                <div className='max-h-32 overflow-auto'>
                    {
                        <div>
                            {
                                content.map((item, index) => {
                                    return <CheckboxInput key={index} name={item.label} value={item.label} />
                                })
                            }
                        </div>

                    }
                </div>
            </div>
        </div>
    )
}