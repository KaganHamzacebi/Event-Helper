import Tag from './Tag'
import './TagPickerInput.css'
import CheckboxInput from '../CheckboxInput';
import { XIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/solid'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { useState, useEffect, useReducer, useRef } from 'react';

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
                const newValue = { label: state[action.id].label, color: state[action.id].color, value: state[action.id].value, selected: state[action.id].selected ? false : true }
                newState[action.id] = newValue;
                return newState;
            case "CLEAR":
                Object.keys(state).forEach((id) => {
                    newState[id].selected = false;
                })
                return newState;
            case "NEW_CONTENT":
                return action.content;
            default:
                break;
        }
    }

    const [myTimeout, setMyTimeout] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [focusSelect, setFocusSelect] = useState(false);
    const [focusSearch, setFocusSearch] = useState(false);
    const [focusSearchDiv, setFocusSearchDiv] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [state, dispatch] = useReducer(reducer, content);

    const divRef = useRef(null)
    const searchDivRef = useRef(null)

    useEffect(() => {
        dispatch({ type: "NEW_CONTENT", content: content })
        // eslint-disable-next-line
    }, [content])

    useEffect(() => {
        //setIsDropdownOpen(focusSelect || focusSearch);
        if (!(focusSelect || focusSearch || focusSearchDiv)) {
            //Bozulursa ilk buraya bak
            //setMyTimeout(setTimeout(() => setIsDropdownOpen(false), 100));
        } else {
            setIsDropdownOpen(true)
        }
        return () => clearTimeout(myTimeout);
        // eslint-disable-next-line
    }, [focusSelect, focusSearch, focusSearchDiv])

    const [tagPickerValue, setTagPickerValue] = useState([]);

    useEffect(() => {
        let tmp = Object.values(state).filter(tag => tag.selected).map(tag => { return tag.value });
        setTagPickerValue(tmp);
        // eslint-disable-next-line
    }, [state])

    return (
        <div className='relative' >
            {title &&
                <div className="mb-4">
                    <h3 className="text-2xl font-bold text-primary">{title}</h3>
                    <span className="text-sm text-primary-light">{description}</span>
                </div>
            }
            <div className={`relative w-72 ${width && 'w-' + width}`}>
                <input name={name} value={tagPickerValue} type='hidden' />
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
                {/* Placeholder */}
                {!(Object.keys(state).filter((id) => { return state[id].selected }).length > 0) &&
                    <span className='left-4 text-primary-light text-bold text-lg text-opacity-70 top-1/4 font-sans absolute pointer-events-none' >{placeholder}</span>
                }
                <ChevronUpIcon
                    className={`w-6 text-primary-light absolute pointer-events-none top-1/2 -translate-y-1/2 right-2 transition-transform transform duration-400 ${focusSelect || focusSearch ? "rotate-180" : "rotate-0"}`}
                />
                <XIcon
                    className={`w-4 text-primary-light right-8 absolute top-1/2 transform -translate-y-1/2 transition-all duration-500 opacity-0 hover:text-red-600 
                    ${Object.keys(state).filter((id) => { return state[id].selected }).length > 0 && 'opacity-100'}`}
                    onClick={() => dispatch({ type: "CLEAR" })}
                />
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