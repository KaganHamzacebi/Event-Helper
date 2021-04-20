import { useState, useEffect } from "react";
import './DateInput.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { validate, getErrorMessage } from "../../inputValidations";

export default function DateInput({
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
        validate("date", date, setIsDateValid)
    }, [date])

    useEffect(() => {
        validate("time", time, setIsTimeValid)
    }, [time])


    return (
        <div className="mb-6">
            <h3 className="text-2xl font-bold text-primary mt-6">{title}</h3>
            <span className="text-sm text-primary-light">{description}</span>
            <div className="mt-4">
                <div className="mb-4 pt-0">
                    <input
                        name="date"
                        type="date"
                        placeholder="Enter date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className={`px-3 py-3 bg-title text-primary relative rounded text-lg border border-gray-900 outline-none focus:outline-none focus:shadow-outline mr-4 w-1/5
                        ${(isDateValid) ? "border-gray-900 focus:ring-2 focus:ring-blue-600" : "ring-2 ring-red-600"}`}
                    />
                    <input
                        name="time"
                        type="time"
                        placeholder="Enter time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className={`px-3 py-3 bg-title text-primary relative rounded text-lg border border-gray-900 outline-none focus:outline-none focus:shadow-outline w-1/5
                        ${(isTimeValid) ? "focus:ring-2 focus:ring-blue-600" : "ring-2 ring-red-600"}`}
                    />
                </div>
                <span className={`text-xs font-bold inline-block py-1 px-2 rounded text-red-600 opacity-0 bg-red-300 last:mr-0 mr-1 
                    ${(isTimeValid && isDateValid) ? "transition-opacity duration-800 ease-out opacity-0" : "transition-opacity duration-1000 ease-in opacity-100"}`}>
                    <FontAwesomeIcon icon={faExclamationTriangle} size="1x"></FontAwesomeIcon>
                    {" " + errors[title]}
                </span>
            </div>
        </div>
    );
}
