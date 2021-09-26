import TextInput from "../../../components/TextInput"
import SelectInput from "../../../components/SelectInput/SelectInput"
import EventsTable from './EventsTable/EventsTable';

export default function GuildSettings() {

    return (
        <div className="w-full">
            {/* Event Table */}
            <span className="text-3xl font-bold text-primary">Events</span>
            <div id='eventList' style={{ height: '70vh' }} className="bg-gray-700 bg-opacity-30 p-4 rounded-xl shadow-md my-8 mb-20">
                <EventsTable />
            </div>
            <span className="text-3xl font-bold text-primary">Guild Settings</span>
            <div id='general' className='bg-gray-700 bg-opacity-30 p-4 rounded-xl shadow-md mt-4'>
                <span className="text-3xl font-bold text-primary">General</span>
                <div className='grid grid-cols-1  md:grid-cols-2 gap-x-48 mt-2'>
                    <TextInput
                        title="Prefix"
                        type="text"
                        name='prefix'
                        width='full'
                        description="Please enter the event title"
                    />
                    <SelectInput
                        title="Timezone"
                        description="Please enter the channel that you want to get event"
                        name='timezone'
                        content={[{ "label": "TRT", "value": "TRT" }]}
                        width='full'
                        height={14}
                        placeholder='Select'
                    />
                </div>
            </div>

            <div id='permissions' className="bg-gray-700 bg-opacity-30 p-4 rounded-xl shadow-md my-8">
                <span className="text-3xl font-bold text-primary">Permissions</span>
                <div className='grid grid-cols-1  md:grid-cols-2 gap-x-48 mt-2 mb-8'>
                    <SelectInput
                        title="Event Leader"
                        description="Please select the event leader role"
                        name='timezone'
                        content={[{ "label": "TRT", "value": "TRT" }]}
                        width='full'
                        height={14}
                        placeholder='Select'
                    />
                    <SelectInput
                        title="Manager"
                        description="Please select the manager role"
                        name='timezone'
                        content={[{ "label": "TRT", "value": "TRT" }]}
                        width='full'
                        height={14}
                        placeholder='Select'
                    />
                </div>
            </div>

            <div id='logChannel' className="bg-gray-700 bg-opacity-30 p-4 rounded-xl shadow-md my-8">
                <span className="text-3xl font-bold text-primary">Log Channels</span>
                <div className='grid grid-cols-1  md:grid-cols-2 gap-x-48 mt-2 mb-8'>
                    <SelectInput
                        title="Event Leader"
                        description="Please select the event leader role"
                        name='timezone'
                        content={[{ "label": "TRT", "value": "TRT" }]}
                        width='full'
                        height={14}
                        placeholder='Select'
                    />
                    <SelectInput
                        title="Manager"
                        description="Please select the manager role"
                        name='timezone'
                        content={[{ "label": "TRT", "value": "TRT" }]}
                        width='full'
                        height={14}
                        placeholder='Select'
                    />
                </div>
            </div>
        </div >
    )
}