import './Switch.css'
import { useState } from "react"

export default function Switch({name}) {

  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center justify-end w-full">
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input type="checkbox" id="toggle" name={name} onChange={(e) => setEnabled(e.target.checked)} checked={enabled} className="sr-only" />
          <div className={`block w-14 h-8 rounded-full ${enabled ? 'bg-green-500' : 'bg-gray-600'} `}></div>
          <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        </div>
      </label>
    </div>
  );
}
