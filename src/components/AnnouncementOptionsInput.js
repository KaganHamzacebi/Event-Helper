import SelectInput from './SelectInput/SelectInput'
import TagPickerInput from './TagPickerInput/TagPickerInput'
import TextAreaInput from './TextAreaInput'

export default function AnnouncementOptionsInput() {

    const channelSelectInput = [
        { label: 'Kanal-1', value: 'kanal-1' },
        { label: 'Kanal-2', value: 'kanal-1' },
        { label: 'Kanal-3', value: 'kanal-1' },
        { label: 'Kanal-4', value: 'kanal-1' },
        { label: 'Kanal-5', value: 'kanal-1' },
        { label: 'Kanal-6', value: 'kanal-1' },
    ];

    return (
        <div className='ml-1'>
            <div className='py-6'>
                <SelectInput
                    title='Announcement Channel'
                    description='Please select channel that you want the announcement'
                    content={channelSelectInput}
                    width='2/5'
                    height={14}
                    marginTop={4}
                    placeholder='Select'
                />
            </div>
            <div className='py-4'>
                <TextAreaInput
                    title="Announcement Description"
                    rows={2}
                    type="text"
                    description="Please enter the description for announcement (Optional)"
                />
            </div>
        </div>
    )
}