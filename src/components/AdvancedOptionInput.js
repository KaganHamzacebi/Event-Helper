import { useState } from "react";
import Switch from "./Switch";

export default function AdvancedOptionInput({
    title,
    description,
}) {

    const [enabledColorSwitch, setEnabledColorSwitch] = useState(false);
    const [enabledColorSwitch2, setEnabledColorSwitch2] = useState(false);
    const [enabledColorSwitch3, setEnabledColorSwitch3] = useState(false);
    const [enabledPremiumSwitch, setEnabledPremiumSwitch] = useState(false);

    const advancedOptions = [
        {
            name: 'color', description: 'Changes discord embed message color', type: 'switch', premium: false, disabled: false, enabled: enabledColorSwitch, setEnabled: setEnabledColorSwitch
        },
        {
            name: 'color', description: 'Changes discord embed message color', type: 'switch', premium: false, disabled: false, enabled: enabledColorSwitch2, setEnabled: setEnabledColorSwitch2
        },
        {
            name: 'color', description: 'Changes discord embed message color', type: 'switch', premium: false, disabled: false, enabled: enabledColorSwitch3, setEnabled: setEnabledColorSwitch3
        },
        {
            name: 'premiumFeature', description: 'buy premium right now!!', type: 'switch', premium: true, disabled: false, enabled: enabledPremiumSwitch, setEnabled: setEnabledPremiumSwitch
        }
    ];

    return (
        <div className='mb-8'>
            <h3 className="text-2xl font-bold text-primary mt-6">{title}</h3>
            <span className='text-sm text-primary-light'>{description}</span>
            <div className='grid grid-cols-3 gap-4'>
                {
                    advancedOptions.map((advancedOption, index) => {
                        return <div key={index} className={`flex flex-row border border-gray-900 rounded bg-title mt-4 p-2 h-28 ${advancedOption.disabled ? 'blur-2xl' : ''}`}>
                            <div className='ml-2 self-center flex-grow'>
                                <h1 className='text-xl font-bold text-primary whitespace-nowrap'>{advancedOption.name} {advancedOption.premium ? '⭐' : ''}</h1>
                                <span className="text-sm text-primary-light">{advancedOption.description}</span>
                            </div>
                            <div className='self-center mr-4'>
                                <Switch enabled={advancedOption.enabled} setEnabled={advancedOption.setEnabled} />
                            </div>
                        </div>

                    })
                }
            </div>
        </div>
    );
}