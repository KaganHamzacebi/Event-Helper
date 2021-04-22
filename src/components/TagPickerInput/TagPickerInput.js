import { useState, useEffect, useReducer, useRef } from 'react';
import { SearchIcon } from '@heroicons/react/solid'
import Tag from './Tag'
import './TagPickerInput.css'
import CheckboxInput from '../CheckboxInput';

export default function TagPickerInput({
    name,
    title,
    description,
    content,
    height,
    width,
    placeholder,
}) {

    /* const initialState = {
        1: { label: "Blue", selected: false },
        2: { label: "Black", selected: false },
        3: { label: "Red", selected: false },
        4: { label: "White", selected: false },
        5: { label: "Green", selected: false },
    } */

    function reducer(state, action) {
        let newState = { ...state };
        switch (action.type) {
            case "TOGGLE":
                const newValue = { label: state[action.id].label, color: state[action.id].color, selected: state[action.id].selected ? false : true }
                newState[action.id] = newValue;
                return newState;
                break;
            case "CLEAR":
                Object.keys(state).forEach((id) => {
                    newState[id].selected = false;
                })
                return newState;
                break;
            case "NEW_CONTENT":
                return action.content;
            default:
                break;
        }
    }

    const [focusSelect, setFocusSelect] = useState(false);
    const [focusSearch, setFocusSearch] = useState(false);
    const [focusSearchDiv, setFocusSearchDiv] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("")
    const [state, dispatch] = useReducer(reducer, content);
    const divRef = useRef(null)
    const searchDivRef = useRef(null)
    
    let timeout;

    useEffect(() => {
        dispatch({type:"NEW_CONTENT", content: content})
        
    }, [content])

    useEffect(() => {
        //setIsDropdownOpen(focusSelect || focusSearch);
        if (!(focusSelect || focusSearch || focusSearchDiv)) {
            timeout = setTimeout(() => setIsDropdownOpen(false), 100)
        } else {
            setIsDropdownOpen(true)
        }
        return () => clearTimeout(timeout)

    }, [focusSelect, focusSearch, focusSearchDiv])

    return (
        <div>
            { title &&
                <div className="mb-4">
                    <h3 className="text-2xl font-bold text-primary">{title}</h3>
                    <span className="text-sm text-primary-light">{description}</span>
                </div>
            }

            <div className={`relative w-72 ${width && 'w-' + width}`}>
                <div tabIndex="1"
                    onClick={() => divRef.current.focus()}
                    ref={divRef}
                    onFocus={() => setFocusSelect(true)}
                    onBlur={() => setFocusSelect(false)}
                    className='pt-1.5 bg-title shadow border border-gray-900 outline-none rounded flex flex-wrap'
                    style={{ minHeight: height ? height : 56 }}>
                    {
                        Object.keys(state).filter((id) => {
                            return state[id].selected
                        })
                            .map((id) => {
                                return <Tag
                                    key={id}
                                    name={state[id].label}
                                    color={state[id].color}
                                    action={() => dispatch({ type: "TOGGLE", id: id })}
                                    value={name + "_" + state[id].label}
                                />
                            })
                    }
                </div>
                {/* ChevronUp Image */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    className={`h-7 text-primary-light absolute pointer-events-none right-2 top-4 transition-transform transform duration-400`}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                {/* X Image */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    className={`h-6 text-primary-light right-10 top-4 absolute transition-all transform duration-500 hover:text-red-600 `}
                    onClick={() => dispatch({ type: "CLEAR" })}
                >
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </div>
            <div
                className={`absolute bg-content ${width ? 'w-' + width : 'width-32'} border rounded mt-1 z-10 border-none shadow-lg border-gray-700 transition-opacity duration-500 transform ${(focusSelect || focusSearch || focusSearchDiv) ? 'opacity-100' : 'opacity-0'} ${isDropdownOpen ? '' : 'hidden'}`}>
                <div className='p-2 relative'>
                    <input
                        type='text'
                        value={searchValue}
                        onFocus={() => setFocusSearch(true)}
                        onBlur={() => setFocusSearch(false)}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className={`w-full border border-gray-900 rounded pl-2 pr-8 outline-none shadow-xl bg-title
                         text-primary text-lg placeholder-white placeholder-opacity-30  transition duration-800 focus:ring-2 focus:ring-blue-600`}
                        placeholder='Search'
                    />
                    <SearchIcon
                        className='w-4 text-primary-light absolute pointer-events-none transform top-1/2 -translate-y-1/2 right-4'
                    />
                </div>
                <div
                    tabIndex="2"
                    onClick={() => searchDivRef.current.focus()}
                    ref={searchDivRef}
                    onFocus={() => setFocusSearchDiv(true)}
                    onBlur={() => setFocusSearchDiv(false)}
                    className='max-h-24 overflow-auto outline-none'>
                    {
                        <div>
                            {
                                Object.keys(state)
                                    .filter((id) => {
                                        return state[id].label.toLowerCase().includes(searchValue.toLowerCase())
                                    })
                                    .map((id) => {
                                        return <CheckboxInput key={id} name={state[id].label} checked={state[id].selected} toggleChecked={() => dispatch({ type: "TOGGLE", id: id })} />
                                    })
                            }
                        </div>

                    }
                </div>
            </div>
        </div>
    )
}