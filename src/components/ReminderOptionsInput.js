import SelectInput from './SelectInput/SelectInput'
import TagPickerInput from './TagPickerInput/TagPickerInput'
import TextAreaInput from './TextAreaInput'

export default function ReminderOptionsInput({
                                                 channelContent,
                                                 defaultChannel,
                                                 roleContent,
                                                 descriptionContent,
                                                 timeContent,
                                             }) {

    const reminderTimers = [
        {
            label: '5 minutes',
            value: 5,
            selected: timeContent ? timeContent.includes(5) : false
        },
        {
            label: '15 minutes',
            value: 15,
            selected: timeContent ? timeContent.includes(15) : false
        },
        {
            label: '30 minutes',
            value: 30,
            selected: timeContent ? timeContent.includes(30) : false
        },
        {
            label: '45 minutes',
            value: 45,
            selected: timeContent ? timeContent.includes(45) : false
        },
        {
            label: '1 hour',
            value: 60,
            selected: timeContent ? timeContent.includes(60) : false
        },
        {
            label: '1.30 hour',
            value: 90,
            selected: timeContent ? timeContent.includes(90) : false
        },
        {
            label: '2 hours',
            value: 120,
            selected: timeContent ? timeContent.includes(120) : false
        },
    ];

    return (
        <div className='grid grid-flow-col grid-cols-2 gap-x-48 mt-7'>
            <div className='py-8'>
                <SelectInput
                    title='Reminder Channel'
                    description='Please select channel that you want the announcement'
                    name='reminder_channel'
                    content={channelContent}
                    defaultValue={defaultChannel}
                    width='full'
                    height={14}
                    placeholder='Select'
                />
                <div className='mt-14'>
                    <TextAreaInput
                        title="Reminder Description"
                        name='reminder_description'
                        rows={2}
                        width='full'
                        type="text"
                        defaultValue={descriptionContent}
                        description="Please enter the description for announcement (Optional)"
                    />
                </div>
            </div>
            <div className='py-8'>
                <TagPickerInput
                    title='Reminder Mentions'
                    description='Please select the roles you want to remind event'
                    name='reminder_mentions'
                    content={roleContent}
                    width='full'
                    placeholder='Select'
                />
                <div className='mt-14'>
                    <TagPickerInput
                        title='Remainder Times'
                        description='Select the time when you want to get announced'
                        name='reminder_times'
                        content={reminderTimers}
                        width='full'
                        height={56}
                        placeholder='Select'
                    />
                </div>
            </div>
        </div>
    )
}