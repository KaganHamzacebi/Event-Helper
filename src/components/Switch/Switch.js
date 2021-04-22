import './Switch.css'
import SelectInput from '../SelectInput/SelectInput';
import { useState } from "react"

export default function Switch({
  name,
  type,
  content,
  placeholder
}) {

  const [enabled, setEnabled] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="flex items-center justify-end w-full">
      {
        type === 'switch' ?
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" id="toggle" name={name} value={enabled} onChange={(e) => setEnabled(e.target.checked)} checked={enabled} className="sr-only" />
              <div className={`block w-14 h-8 rounded-full shadow-xl ${enabled ? 'bg-green-500' : 'bg-gray-600'} `}></div>
              <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>
          </label>
          : type === 'text' ?
            <div className="flex items-center justify-end">
              <input
                type="text"
                id="switch-text"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="px-3 py-1 bg-title text-primary relative rounded text-lg border border-gray-900 outline-none 
             focus:ring-2 focus:ring-blue-600 w-4/5" />
            </div>
            :
            <div>
              <SelectInput name={name} content={content} placeholder="Select" width={32} />
            </div>

      }

    </div>
  );
}
