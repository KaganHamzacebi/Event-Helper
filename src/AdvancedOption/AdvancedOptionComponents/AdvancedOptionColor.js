import './AdvancedOptionStyle.css'
import reactCSS from 'reactcss'
import {SketchPicker} from 'react-color'
import {useState} from "react"

export default function AdvancedOptionColor({
                                                name,
                                                title,
                                                description,
                                                defaultValue,
                                            }) {

    const [color, setColor] = useState(defaultValue ? defaultValue : '#90D140');

    const [displayColorPicker, setDisplayColorPicker] = useState(false);

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
    }

    function handleClose() {
        setDisplayColorPicker(false)
    }

    function handleChange(color) {
        setColor(color.hex);
    }

    return (
        <div
            className={`flex flex-row border border-gray-900 rounded bg-title mt-4 p-2 h-28`}>
            <div className='ml-2 self-center flex-grow leading-none'>
                <h1 className='text-xl font-bold text-primary whitespace-nowrap mb-2'>{title}</h1>
                <span
                    className="text-sm text-primary-light leading-none">{description}</span>
            </div>
            <div className='self-center mr-4'>
                <div className="flex items-center justify-end w-full">
                    <div>
                        <input type="hidden" name={name} value={color}/>
                        <div style={colorPickerStyles.swatch} onClick={handleClick}>
                            <div style={colorPickerStyles.color}/>
                        </div>
                        {displayColorPicker ?
                            <div style={colorPickerStyles.popover}>
                                <div style={colorPickerStyles.cover} onClick={handleClose}/>
                                <SketchPicker name={name} value={color} color={color}
                                              onChange={handleChange} disableAlpha/>
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
