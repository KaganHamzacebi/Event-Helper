import './Switch.css'
import SelectInput from '../SelectInput/SelectInput';
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import { useState } from "react"

export default function Switch({
  name,
  type,
  content,
  placeholder
}) {

  const [enabled, setEnabled] = useState(false);
  const [value, setValue] = useState('');

  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState('#D6A044');

  const colorPickerStyles = reactCSS({
    'default': {
      color: {
        width: '100%',
        height: '100%',
        borderRadius: '2px',
        background: color,
      },
      swatch: {
        padding: '4px',
        height: 30,
        width: 60,
        background: '#292b2f',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });

  function handleClick() {
    setDisplayColorPicker(!displayColorPicker)
  };

  function handleClose() {
    setDisplayColorPicker(false)
  };

  function handleChange(color) {
    setColor(color.hex);
  };

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
            : type === 'select' ?
              <div>
                <SelectInput name={name} content={content} placeholder="Select" width={32} />
              </div>
              : type === 'color-picker' ?
                <div>
                  <div style={colorPickerStyles.swatch} onClick={handleClick}>
                    <div style={colorPickerStyles.color} />
                  </div>
                  {displayColorPicker ?
                    <div style={colorPickerStyles.popover}>
                      <div style={colorPickerStyles.cover} onClick={handleClose} />
                      <SketchPicker name={name} value={color} color={color} onChange={handleChange} disableAlpha />
                    </div>
                    :
                    null
                  }
                </div>
                :
                ''
      }

    </div >
  );
}
