import Switch from "./Switch/Switch";

export default function AdvancedOptionInput({
    title,
    description
}) {

    const advancedOptions = [
        {
            name: 'adv_color',
            label: 'Color',
            description: 'Changes discord embed message color',
            type: 'color-picker',
            premium: false,
            disabled: false
        },
        {
            name: 'adv_participant_limit',
            label: 'Participant Limit',
            description: 'Adds participant limitation to event',
            type: 'number',
            premium: false,
            disabled: false
        },
        {
            name: 'adv_show_participant_order',
            label: 'Show Join Order',
            description: 'Adds join order to entries',
            type: 'switch',
            premium: false,
            disabled: false
        },
        {
            name: 'adv_recurrence',
            label: 'Recurrence',
            description: 'This option resends event with given period',
            type: 'number',
            placeholder: 'Type here',
            premium: false,
            disabled: false
        },
        {
            name: 'adv_duration',
            label: 'Duration',
            description: 'This option sets a duration to event',
            type: 'number',
            placeholder: 'Type here',
            premium: false,
            disabled: false
        },
        {
            name: 'adv_multi_entry',
            label: 'Multiple Participation',
            description: 'Allow multiple entry',
            type: 'switch',
            premium: false,
            disabled: false
        },
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
                                        <h1 className='text-xl font-bold text-primary whitespace-nowrap'>{advancedOption.label} {advancedOption.premium ? '⭐' : ''}</h1>
                                        <span className="text-sm text-primary-light">{advancedOption.description}</span>
                                    </div>
                                    :
                                    ''
                            }
                            <div className='self-center mr-4'>
                                <Switch name={advancedOption.name}
                                    label={advancedOption.label}
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