import { useState, useEffect } from "react";
import './DateInput.css'
import { ExclamationIcon } from '@heroicons/react/solid'
import { validate, getErrorMessage } from "../../inputValidations";

export default function DateInput({
    name,
    title,
    description
}) {

    const errors = {
        "Date": "Date can't be empty"
    }

    const [date, setDate] = useState("2021-04-15");
    const [time, setTime] = useState("00:00");
    const [isDateValid, setIsDateValid] = useState(true);
    const [isTimeValid, setIsTimeValid] = useState(true);

    useEffect(() => {
        validate("general_event_date", date, setIsDateValid)
    }, [date])

    useEffect(() => {
        validate("general_event_time", time, setIsTimeValid)
    }, [time])


    return (
        <div>
            <h3 className="text-2xl font-bold text-primary">{title}</h3>
            <span className="text-sm text-primary-light">{description}</span>
            <div className="mt-4">
                <div className="mb-4 pt-0 flex flex-row flex-nowrap w-full md:w-2/3 lg:w-4/5">
                    <input
                        name={name + '_date'}
                        type="date"
                        placeholder="Enter date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className={`px-3 py-3 bg-title text-primary relative rounded text-lg border border-gray-900 outline-none focus:outline-none focus:shadow-outline mr-4 flex-grow
                        ${(isDateValid) ? "border-gray-900 focus:ring-2 focus:ring-blue-600" : "ring-2 ring-red-600"}`}
                    />
                    <input
                        name={name + '_time'}
                        type="time"
                        placeholder="Enter time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className={`px-3 py-3 bg-title text-primary relative rounded text-lg border border-gray-900 outline-none focus:outline-none focus:shadow-outline flex-grow
                        ${(isTimeValid) ? "focus:ring-2 focus:ring-blue-600" : "ring-2 ring-red-600"}`}
                    />
                </div>
                <span className={`text-xs font-bold inline-block py-1 px-2 rounded text-red-600 opacity-0 bg-red-300 last:mr-0 mr-1 
                    ${(isTimeValid && isDateValid) ? "transition-opacity duration-800 ease-out opacity-0" : "transition-opacity duration-1000 ease-in opacity-100"}`}>
                    <ExclamationIcon className="w-4 inline-block" />
                    {" " + getErrorMessage("general_event_date")}
                </span>
            </div>
        </div>
    );
}
