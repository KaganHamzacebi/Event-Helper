import { useEffect, useRef, useState } from "react";

export default function Collapse({
  name,
  description,
  children
}) {

  const [isOpen, setIsOpen] = useState(false);
  const [overflow, setOverflow] = useState(true);
  const [myTimeout, setMyTimeout] = useState(null);

  const collapseRef = useRef(null);

  useEffect(() => {
    setMyTimeout(setTimeout(() => {
      setOverflow(isOpen ? false : true);
      return () => { clearTimeout(myTimeout) }
    }, 100));
    // eslint-disable-next-line
  }, [isOpen])

  return (
    <div className="flex flex-col w-full border-gray-500 rounded">
      <div className="flex flex-row flex-nowrap bg-title border border-gray-900 rounded">
        <div className="flex flex-col flex-grow py-3 pl-3">
          <div className="text-primary font-bold text-xl">{name}</div>
          <div className="text-primary-light font-light">{description}</div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" onClick={() => setIsOpen(!isOpen)}
          className={`w-14 mx-3 transition-transform transform duration-500 ${isOpen ? "rotate-180" : "rotate-0"}`}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 15l7-7 7 7" />
        </svg>
      </div>

      <div className={overflow ? 'overflow-hidden' : undefined} >
        <div style={isOpen ? { maxHeight: collapseRef.current.scrollHeight } : { maxHeight: 0 }} ref={collapseRef} className={`transition-all duration-500 transform`}>
          {children}
        </div>
      </div>
    </div>
  );
}
