import { useState } from "react";

export default function Collapse({
  name,
  description,
  children
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-full border-gray-500 rounded">
      <div className="flex flex-row flex-nowrap bg-title border border-gray-900 rounded">
        <div className="flex flex-col flex-grow py-3 pl-3">
          <div className="text-primary font-bold text-xl">{name}</div>
          <div className="text-primary-light font-light">{description}</div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" onClick={() => setIsOpen(!isOpen)}
          className={`w-14 mx-3 transition-transform transform duration-1000 ${isOpen ? "rotate-180" : "rotate-0"}`}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 15l7-7 7 7" />
        </svg>
      </div>

      <div className="overflow-hidden">
        <div className={`overflow-hidden transition-all duration-1000 transform  ${isOpen ? "max-h-screen scale-y-100 translate-y-0" : "max-h-0 scale-y-0 -translate-y-full"} `}>
          {children}
        </div>
      </div>
    </div>
  );
}
