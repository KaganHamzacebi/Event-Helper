import './AdvancedOptionStyle.css'
import {useState} from "react"

export default function AdvancedOptionSwitch({
                                                 name,
                                                 title,
                                                 description,
                                                 defaultValue,
                                             }) {

    //Values
    const [enabled, setEnabled] = useState(defaultValue ? defaultValue : false);

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
                    <label className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input type="checkbox" id="toggle" name={name} value={enabled}
                                   onChange={(e) => setEnabled(e.target.checked)} checked={enabled}
                                   className="sr-only"/>
                            <div
                                className={`block w-14 h-8 rounded-full shadow-xl ${enabled ? 'bg-green-500' : 'bg-gray-600'} `}></div>
                            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}
