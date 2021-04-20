import Switch from "./Switch/Switch";

export default function AdvancedOptionInput({
    title,
    description
}) {

    const advancedOptions = [
        {
            name: 'color',
            description: 'Changes discord embed message color',
            type: 'switch',
            premium: false,
            disabled: false
        },
        {
            name: 'color',
            description: 'Changes discord embed message color',
            type: 'switch',
            premium: false,
            disabled: false
        },
        {
            name: 'color',
            description: 'Changes discord embed message color',
            type: 'dropdown',
            content: ['Blue', 'Green', 'Purple', 'Black'],
            premium: false, 
            disabled: false
        },
        {
            name: 'premiumFeature',
            description: 'buy premium right now!!',
            type: 'text',
            placeholder: 'enter here',
            premium: true,
            disabled: false
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
                                <Switch name={advancedOption.name}
                                        type={advancedOption.type}
                                        placeholder={advancedOption.placeholder}
                                        content={advancedOption.content}
                                />
                            </div>
                        </div>

                    })
                }
            </div>
        </div>
    );
}