import SelectInput from './SelectInput/SelectInput'
import TagPickerInput from './TagPickerInput/TagPickerInput'
import TextAreaInput from './TextAreaInput'

export default function ReminderOptionsInput({
    channelContent,
    roleContent,
}) {

    const reminderOptions = [
        { label: '5 minutes', value: 5 },
        { label: '15 minutes', value: 15 },
        { label: '30 minutes', value: 30 },
        { label: '45 minutes', value: 45 },
        { label: '1 hour', value: 60 },
        { label: '1.30 hour', value: 90 },
        { label: '2 hours', value: 120 },
    ];

    return (
        <div className='grid grid-flow-col grid-cols-2 gap-x-48 mt-7'>
            <div className='py-8'>
                <SelectInput
                    title='Reminder Channel'
                    description='Please select channel that you want the announcement'
                    name='reminder_channel'
                    content={channelContent}
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
                        content={reminderOptions}
                        width='full'
                        height={56}
                        placeholder='Select'
                    />
                </div>
            </div>
        </div>
    )
}