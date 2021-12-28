import AdvancedOptionColor from "./AdvancedOptionComponents/AdvancedOptionColor";
import AdvancedOptionNumber from "./AdvancedOptionComponents/AdvancedOptionNumber";
import AdvancedOptionSwitch from "./AdvancedOptionComponents/AdvancedOptionSwitch";

export default function AdvancedOptionsMenu({
                                                title,
                                                description,
                                                defaultValues
                                            }) {

    return (
        <div>
            <h3 className="text-2xl font-bold text-primary mt-4">{title}</h3>
            <span className='text-sm text-primary-light'>{description}</span>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                <AdvancedOptionColor
                    name='adv_color'
                    title='Color'
                    description='Changes discord embed message color'
                    defaultValue={defaultValues && defaultValues.color}
                />
                <AdvancedOptionNumber
                    name='adv_participant_limit'
                    title='Participant Limit'
                    description='Adds participant limitation to event'
                    defaultValue={defaultValues && defaultValues.participant_limit}
                />
                <AdvancedOptionSwitch
                    name='adv_show_participant_order'
                    title='Show Join Order'
                    description='Adds join order to entries'
                    defaultValue={defaultValues && defaultValues.show_participant_order}
                />
                <AdvancedOptionNumber
                    name='adv_recurrence'
                    title='Recurrence'
                    description='This option resends event with given period'
                    defaultValue={defaultValues && defaultValues.recurrence}
                />
                <AdvancedOptionNumber
                    name='adv_duration'
                    title='Duration'
                    description='This option sets a duration to event'
                    defaultValue={defaultValues && defaultValues.duration}
                />
                <AdvancedOptionSwitch
                    name='adv_multi_entry'
                    title='Multiple Participation'
                    description='Allow multiple entry'
                    defaultValue={defaultValues && defaultValues.multiple_participation}
                />
                <AdvancedOptionSwitch
                    name='adv_dm_reminder'
                    title='DM Reminder'
                    description='Sends direct message to signed people'
                    defaultValue={defaultValues && defaultValues.dm_reminds}
                />
                <AdvancedOptionSwitch
                    name='adv_reasons'
                    title='Take Reasons'
                    description='Take reason from late, tentative and absent participants'
                    defaultValue={defaultValues && defaultValues.reasons}
                />
            </div>
        </div>
    );
}