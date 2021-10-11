import TextInput from "../../../../../components/TextInput";
import SelectInput from "../../../../../components/SelectInput/SelectInput";

export default function GuildSettings() {

    return (
        <div>
            {/* FORM VALIDATION ERROR */}
            <div
                className={`fixed pointer-events-none bottom-16 mx-auto container px-10 md:px-26 lg:px-96 z-50 transition duration-500 ${isFormValid ? "opacity-0" : "opacity-100"}`}>
                <div className="m-auto shadow-2xl">
                    <div className="bg-red-300 rounded-lg border-gray-900 border p-3 shadow-2xl">
                        <div className="flex flex-row">
                            <div className="px-2 my-auto">
                                {<ExclamationIcon className='w-10'/>}
                            </div>
                            <div className="ml-2">
                                <span className="font-semibold md:text-lg">Can't save the settings!</span>
                                <span
                                    className="block text-gray-500 md:text-lg">Please fill the required fields</span>
                            </div>
                        </div>
                    </div>
                </div>
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
                        content={[{"label": "TRT", "value": "TRT"}]}
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
                        content={[{"label": "TRT", "value": "TRT"}]}
                        width='full'
                        height={14}
                        placeholder='Select'
                    />
                    <SelectInput
                        title="Manager"
                        description="Please select the manager role"
                        name='timezone'
                        content={[{"label": "TRT", "value": "TRT"}]}
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
                        content={[{"label": "TRT", "value": "TRT"}]}
                        width='full'
                        height={14}
                        placeholder='Select'
                    />
                    <SelectInput
                        title="Manager"
                        description="Please select the manager role"
                        name='timezone'
                        content={[{"label": "TRT", "value": "TRT"}]}
                        width='full'
                        height={14}
                        placeholder='Select'
                    />
                </div>
            </div>
        </div>
    )
}