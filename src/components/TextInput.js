import {useEffect, useState} from "react";
import {ExclamationIcon, XIcon} from '@heroicons/react/solid'
import {getErrorMessage, validate} from "../utils/inputValidations";

export default function TextInput({
                                      name,
                                      type,
                                      title,
                                      width,
                                      defaultValue,
                                      description
                                  }) {

    const [value, setValue] = useState(defaultValue ? defaultValue : "");
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue])

    return (
        <div>
            <h3 className="text-2xl font-bold text-primary">{title}</h3>
            <span className="text-sm text-primary-light">{description}</span>

            <div className="mt-4">
                <div className="mb-3 pt-0">
                    <div className={`w-full h-14 md:w-2/3 lg:w-${width ? width : '2/5'} relative`}>
                        <input
                            name={name}
                            onBlur={() => {
                                validate(name, value, setIsValid)
                            }}
                            type={type}
                            value={value ? value : ""}
                            onChange={(e) => {
                                setValue(e.target.value);
                            }}
                            placeholder={"Enter " + title.toLowerCase()}
                            className={`px-3 pr-14 py-3 bg-title text-primary relative rounded text-lg border border-gray-900 outline-none focus:outline-none focus:shadow-outline w-full h-full
              ${isValid ? "focus:ring-2 focus:ring-blue-600" : "ring-2 ring-red-600"}`}
                        />
                        <XIcon
                            className={`h-7 right-4 text-primary-light absolute top-1/2 transform -translate-y-1/2 transition-all duration-500 opacity-0 hover:text-red-600 ${value ? 'opacity-100' : 'opacity-0'}`}
                            onClick={() => {
                                setValue('')
                            }}
                        />
                    </div>
                </div>
                <span className={`text-xs font-bold inline-block py-1 px-2 rounded text-red-600 opacity-0 bg-red-300 last:mr-0 mr-1
            ${isValid ? "transition-opacity duration-800 ease-out opacity-0" : "transition-opacity duration-1000 ease-in opacity-100"}`}>
          <ExclamationIcon className="w-4 inline-block"/>
                    {" " + getErrorMessage(name)}
        </span>
            </div>
        </div>
    );
}
