import { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import useClientRect from '../useClientRect';
import reactDom from "react-dom";

export default function Collapse({
  name,
  description,
  children
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-full border-2 border-gray-500 rounded-lg">
      <div className="flex flex-row flex-nowrap">
        <div className="flex flex-col flex-grow py-3">
          <div className="text-primary font-bold text-xl">{name}</div>
          <div className="text-primary font-light text-gray-300">{description}</div>
        </div>
        <ChevronUpIcon className={`w-14 mx-3 transition-transform transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`} onClick={() => setIsOpen(!isOpen)} />

      </div>

      <div className="overflow-hidden">
        <div className={`overflow-hidden transition-all transition-max-height duration-200 transform  ${isOpen ? "max-h-screen scale-y-100 translate-y-0" : "max-h-0 scale-y-0 -translate-y-full"} `}>
          {children}
        </div>
      </div>
    </div>
  );
}
