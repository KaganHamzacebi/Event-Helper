import { useState, useEffect } from 'react';
import { SearchIcon } from '@heroicons/react/solid'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { XIcon } from '@heroicons/react/solid'

import './SelectInput.css'

export default function SelectInput({
    placeholder,
    content
}) {

    const [focusSelect, setFocusSelect] = useState(false);
    const [focusSearch, setFocusSearch] = useState(false);
    const [value, setValue] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState(content);

    useEffect(() => {
        let data = content.filter(item => item.label.toLowerCase().includes(searchValue));
        setFilteredData(data);
        // eslint-disable-next-line
    }, [searchValue])

    return (
        <div>
            <div className='relative w-32' >
                <input
                    type='text'
                    className={`w-full border border-gray-900 rounded pl-3.5 pr-8 outline-none shadow-xl ${value ? 'text-primary ' : 'text-gray-500'} bg-title text-lg placeholder-white placeholder-opacity-30  transition duration-800 focus:ring-2 focus:ring-blue-600`}
                    value={value ? value : placeholder}
                    onChange={null}
                    onFocus={() => setFocusSelect(true)}
                    onBlur={() => setFocusSelect(false)}
                    readOnly
                />
                <ChevronDownIcon
                    className='w-6 text-white absolute top-1/2 transform -translate-y-1/2 right-2 opacity-30'
                    onClick={() => setFocusSelect(true)}
                />
                <XIcon
                    className={`w-4 text-white absolute top-1/2 transform -translate-y-1/2 right-8 opacity-30 transition-all duration-100 hover:text-red-600 hover:opacity-100 ${value ? 'visible' : 'invisible'}`}
                    onClick={() => { setValue(null) }}
                />
            </div>
            <div className={`absolute bg-content w-32 border rounded mt-1 border-none shadow-2xl transition-opacity duration-500 transform 
                ${(focusSelect || focusSearch) ? 'opacity-100' : 'opacity-0'}`}>
                <div className='p-2 relative'>
                    <input
                        type='text'
                        id='select-search'
                        onFocus={() => setFocusSearch(true)}
                        onBlur={() => setFocusSearch(false)}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className='w-full border border-gray-900 rounded pl-2 pr-8 outline-none shadow-xl bg-title text-primary text-lg placeholder-white placeholder-opacity-30  transition duration-800 focus:ring-2 focus:ring-blue-600'
                        placeholder='Search'
                    />
                    <SearchIcon
                        className='w-4 text-white absolute transform top-1/2 -translate-y-1/2 right-4 opacity-30'
                    //Search iconuna tıklanınca aramaya focus olması lazım
                    />
                </div>
                <div className='max-h-32 overflow-auto'>
                    {
                        filteredData.map((item, index) => {
                            return <div key={index} className='rounded hover:bg-gray-600'>
                                <p className='text-white pl-3.5 py-1' onClick={() => setValue(item.label)}>{item.label}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}