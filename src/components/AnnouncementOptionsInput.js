import SelectInput from './SelectInput/SelectInput'
import TagPickerInput from './TagPickerInput/TagPickerInput'
import TextAreaInput from './TextAreaInput'

export default function AnnouncementOptionsInput({
    channelContent,
}) {
    
    return (
        <div className='ml-1'>
            <div className='py-6'>
                <SelectInput
                    title='Announcement Channel'
                    description='Please select channel that you want the announcement'
                    name='announcement_channel'
                    content={channelContent}
                    width='2/5'
                    height={14}
                    placeholder='Select'
                />
            </div>
            <div className='py-4'>
                <TextAreaInput
                    title="Announcement Description"
                    name='announcement_description'
                    rows={2}
                    type="text"
                    description="Please enter the description for announcement (Optional)"
                />
            </div>
        </div>
    )
}