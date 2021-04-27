import { useState, useEffect } from 'react';
import { SearchIcon } from '@heroicons/react/solid'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { XIcon } from '@heroicons/react/solid'

import './SelectInput.css'

export default function SelectInput({
    name,
    title,
    description,
    width,
    height,
    placeholder,
    content
}) {

    const [focusSelect, setFocusSelect] = useState(false);
    const [focusSearch, setFocusSearch] = useState(false);
    const [value, setValue] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState(content);
    let timeout;

    useEffect(() => {
        //setIsDropdownOpen(focusSelect || focusSearch);
        if (!(focusSelect || focusSearch)) {
            timeout = setTimeout(() => setIsDropdownOpen(false), 100)
        } else {
            setIsDropdownOpen(true)
        }
        return () => clearTimeout(timeout)

    }, [focusSelect, focusSearch])

    useEffect(() => {
        let data = content.filter(item => item.label.toLowerCase().includes(searchValue));
        setFilteredData(data);
        // eslint-disable-next-line
    }, [searchValue, content])

    return (
        <div className='relative'>
            {title &&
                <div className='mb-4'>
                    <h3 className="text-2xl font-bold text-primary">{title}</h3>
                    <span className="text-sm text-primary-light">{description}</span>
                </div>
            }

            <div className={`relative ${width ? 'w-' + width : 'width-32'} `} >
                <input
                    type='text'
                    name={name}
                    placeholder={placeholder}
                    className={`w-full border ${height && 'h-' + height} border-gray-900 rounded pl-3.5 pr-8 outline-none ${value ? 'text-primary ' : 'text-gray-500'} bg-title text-lg placeholder-white placeholder-opacity-30  transition duration-800 focus:ring-2 focus:ring-blue-600`}
                    value={value ? value : ""}
                    onChange={null}
                    onFocus={() => setFocusSelect(true)}
                    onBlur={() => setFocusSelect(false)}
                    readOnly
                />
                <ChevronUpIcon
                    className={`w-6 text-primary-light absolute pointer-events-none top-1/2 -translate-y-1/2 right-2 transition-transform transform duration-400 ${focusSelect || focusSearch ? "rotate-180" : "rotate-0"}`}
                />
                <XIcon
                    className={`w-4 text-primary-light right-8 absolute top-1/2 transform -translate-y-1/2 transition-all duration-500 opacity-0 hover:text-red-600 ${value && 'opacity-100'}`}
                    onClick={() => { setValue(null) }}
                />
            </div>
            <div className={`absolute bg-content ${width ? 'w-' + width : 'width-32'} border rounded mt-1 border-gray-700 shadow-lg z-10 transition-opacity duration-500 transform 
                ${(focusSelect || focusSearch) ? 'opacity-100' : 'opacity-0'} ${isDropdownOpen ? '' : 'hidden'}`}>
                <div className='p-2 relative'>
                    <input
                        multiple={true}
                        type='text'
                        onFocus={() => setFocusSearch(true)}
                        onBlur={() => setFocusSearch(false)}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className='w-full border border-gray-900 rounded pl-2 pr-8 outline-none shadow bg-title text-primary text-lg placeholder-white placeholder-opacity-30  transition duration-800 focus:ring-2 focus:ring-blue-600'
                        placeholder='Search'
                    />
                    <SearchIcon
                        className='w-4 text-primary-light absolute pointer-events-none transform top-1/2 -translate-y-1/2 right-4'
                    />
                </div>
                <div className='max-h-24 overflow-auto'>
                    {
                        filteredData.map((item, index) => {
                            return <div key={index} className='rounded hover:bg-gray-600'>
                                <p className='text-white pl-3.5 py-1 select-none' onClick={() => setValue(item.label)}>{item.label}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}