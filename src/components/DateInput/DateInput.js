import './DateInput.css'
import moment from 'moment';
import {useEffect, useState} from "react";
import {ExclamationIcon} from '@heroicons/react/solid'
import {getErrorMessage, validate} from "../../utils/inputValidations";

export default function DateInput({
                                      name,
                                      title,
                                      valueDate,
                                      valueTime,
                                      description
                                  }) {

    const [value, setValue] = useState(0);
    const [date, setDate] = useState(valueDate);
    const [time, setTime] = useState(valueTime);
    const [isDateValid, setIsDateValid] = useState(true);
    const [isTimeValid, setIsTimeValid] = useState(true);

    useEffect(() => {
        setDate(valueDate);
    }, [valueDate]);

    useEffect(() => {
        setTime(valueTime);
    }, [valueTime]);

    useEffect(() => {
        validate("event_date", date, setIsDateValid)
        const value = moment(date + ' ' + time).format('X');
        setValue(value);
        // eslint-disable-next-line
    }, [date])

    useEffect(() => {
        validate("event_time", time, setIsTimeValid)
        const value = moment(date + ' ' + time).format('X');
        setValue(value);
        // eslint-disable-next-line
    }, [time])

    return (
        <div>
            <h3 className="text-2xl font-bold text-primary">{title}</h3>
            <span className="text-sm text-primary-light">{description}</span>
            <input type='hidden' name={name} value={value}/>
            <div className="mt-4">
                <div className="mb-4 pt-0 flex flex-row flex-nowrap w-full md:w-2/3 lg:w-full">
                    <input
                        type="date"
                        placeholder="Enter date"
                        min={moment().format('YYYY-MM-DD')}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className={`px-3 py-3 bg-title text-primary relative rounded text-lg border border-gray-900 outline-none focus:outline-none focus:shadow-outline mr-4 flex-grow
                        ${(isDateValid) ? "border-gray-900 focus:ring-2 focus:ring-blue-600" : "ring-2 ring-red-600"}`}
                    />
                    <input
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
                    <ExclamationIcon className="w-4 inline-block"/>
                    {" " + getErrorMessage("event_date")}
                </span>
            </div>
        </div>
    );
}
