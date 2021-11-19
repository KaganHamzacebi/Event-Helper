import './AdvancedOptionStyle.css'
import {useState} from "react"

export default function AdvancedOptionNumber({
                                   name,
                                   description,
                                   title,
                                   defaultValue,
                                   placeholder
                               }) {

    const [valueNumber, setValueNumber] = useState(defaultValue ? defaultValue : 0);

    return (
        <div
            className={`flex flex-row border border-gray-900 rounded bg-title mt-4 p-2 h-28`}>
            <div className='ml-2 self-center flex-grow leading-none'>
                <h1 className='text-xl font-bold text-primary whitespace-nowrap mb-2'>{title}</h1>
                <span
                    className="text-sm text-primary-light leading-none">{description}</span>
            </div>
            <div className='self-center mr-4'>
                <div className="flex items-center justify-end w-full">
                    <div className="flex items-center justify-end">
                        <input
                            type='number'
                            min={0}
                            id="switch-text"
                            name={name}
                            placeholder={placeholder}
                            value={valueNumber}
                            onChange={(e) => setValueNumber(e.target.value)}
                            className="px-3 py-1 bg-title text-primary relative rounded text-lg border border-gray-900 outline-none
             focus:ring-2 focus:ring-blue-600 w-3/5"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
