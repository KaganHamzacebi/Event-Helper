import Switch from "./Switch/Switch";

export default function AdvancedOptionInput({
    title,
    description
}) {

    const advancedOptions = [
        {
            name: 'color',
            description: 'Changes discord embed message color',
            type: 'color-picker',
            premium: false,
            disabled: false
        },
        {
            name: 'adv_option_2',
            description: 'Changes discord embed message color',
            type: 'switch',
            premium: false,
            disabled: false
        },
        {
            name: 'adv_option_3',
            description: 'Changes discord embed message color',
            type: 'select',
            content:
                [
                    { label: 'Blue', value: 'blue' },
                    { label: 'Black', value: 'black' },
                    { label: 'Red', value: 'red' },
                    { label: 'White', value: 'white' },
                    { label: 'Green', value: 'green' },
                ],
            premium: false,
            disabled: false
        },
        {
            name: 'adv_option_4',
            description: 'buy premium right now!!',
            type: 'text',
            placeholder: 'Type here',
            premium: true,
            disabled: false
        }
    ];

    return (
        <div>
            <h3 className="text-2xl font-bold text-primary mt-4">{title}</h3>
            <span className='text-sm text-primary-light'>{description}</span>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    advancedOptions.map((advancedOption, index) => {
                        return <div key={index} className={`flex flex-row border border-gray-900 rounded bg-title mt-4 p-2 h-28 ${advancedOption.disabled ? 'blur-2xl' : ''}`}>
                            {
                                title !== '' ?
                                    <div className='ml-2 self-center flex-grow'>
                                        <h1 className='text-xl font-bold text-primary whitespace-nowrap'>{advancedOption.name} {advancedOption.premium ? '⭐' : ''}</h1>
                                        <span className="text-sm text-primary-light">{advancedOption.description}</span>
                                    </div>
                                    :
                                    ''
                            }
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