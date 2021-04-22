import SelectInput from './SelectInput/SelectInput'
import TagPickerInput from './TagPickerInput/TagPickerInput'
import TextAreaInput from './TextAreaInput'

export default function ReminderOptionsInput({
    channelContent,
    roleContent,
}) {

    return (
        <div className='ml-1 mt-4 grid grid-flow-col md:grid-rows-2 grid-rows-4'>
            <SelectInput
                title='Reminder Channel'
                description='Please select channel that you want the announcement'
                name='reminder_channel'
                content={channelContent}
                width='96'
                height={14}
                placeholder='Select'
            />
            <TextAreaInput
                title="Reminder Description"
                name='reminder_description'
                rows={2}
                width='96'
                type="text"
                description="Please enter the description for announcement (Optional)"
            />
            <TagPickerInput
                title='Reminder Mentions'
                description='Please select the roles you want to remind event'
                name='reminder_mentions'
                content={roleContent}
                width={96}
                placeholder='Select'
            />
            <SelectInput
                title='Remainder Times'
                description='Select the time when you want to get announced'
                name='reminder_times'
                content={channelContent}
                width='96'
                height={14}
                placeholder='Select'
            />
        </div>
    )
}