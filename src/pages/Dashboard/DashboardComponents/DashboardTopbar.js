import React, {useContext} from "react";
import {DashboardContext} from "../Dashboard";

export default function DashboardTopbar() {
    const {isOpen, setIsOpen} = useContext(DashboardContext);

    return (
        <div className='bg-home-light h-20 flex items-center shadow-md px-12'>
            <span className='text-primary font-bold text-2xl ml-2 flex-grow'>Dashboard</span>
            <button
                className='invisible sm:visible border border-gray-300 text-primary shadow-xl active:bg-lightBlue-600 p-2 transition duration-500 ease-out hover:bg-green-600 font-bold uppercase text-lg rounded-lg outline-none focus:outline-none'
                type="submit"
            >
                Create Event
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 visible sm:hidden" viewBox="0 0 20 20"
                 fill="white" onClick={() => setIsOpen(!isOpen)}>
                <path fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"/>
            </svg>
        </div>
    )
}