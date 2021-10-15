import TextInput from "../../../../../components/TextInput";
import SelectInput from "../../../../../components/SelectInput/SelectInput";
import {useContext, useEffect, useState} from "react";
import {GuildSettingsContext} from "../../../Dashboard";
import {timezoneToLabel} from "../../../../../utils/timezoneConverter";
import GuildService from "../../../../../service/GuildService";
import {UserContext} from "../../../../../App";
import TagPickerInput from "../../../../../components/TagPickerInput/TagPickerInput";
import {validate} from "../../../../../utils/inputValidations";
import {ExclamationIcon} from "@heroicons/react/solid";

export default function GuildSettings() {

    const {guildSettings} = useContext(GuildSettingsContext);
    const {userToken} = useContext(UserContext);
    const [managerRoles, setManagerRoles] = useState([]);
    const [leaderRoles, setLeaderRoles] = useState([]);
    const [guildChannels, setGuildChannels] = useState([]);
    const guildService = new GuildService();
    const [isFormValid, setIsFormValid] = useState(true);


    useEffect(() => {
        (async () => {
            if (guildSettings) {
                const roles = await guildService.getRoles(guildSettings.id, userToken);
                const channels = await guildService.getChannels(guildSettings.id, userToken);

                const mappedManagerRoles = roles.data.map((role) => {
                    return {
                        label: role.name,
                        color: role.color,
                        value: role.id,
                        selected: guildSettings.manager_roles.findIndex((mRole) => mRole.id === role.id) >= 0
                    }
                });

                const mappedLeaderRoles = roles.data.map((role) => {
                    return {
                        label: role.name,
                        color: role.color,
                        value: role.id,
                        selected: guildSettings.event_leader_roles.findIndex((mRole) => mRole.id === role.id) >= 0
                    }
                });

                const mappedGuildChannels = channels.data.map((channel) => {

                    return {
                        label: channel.name,
                        value: channel.id,
                    }
                });

                setManagerRoles(mappedManagerRoles);
                setLeaderRoles(mappedLeaderRoles);
                setGuildChannels(mappedGuildChannels);
            }

        })();

    }, [guildSettings])

    const timezones = [
        {"label": "Pacific Time - Los Angeles", "value": "pt"},
        {"label": "Mountain Time - Denver", "value": "mt"},
        {"label": "Central Time - Chicago", "value": "ct"},
        {"label": "Eastern Time - New York", "value": "et"},
        {"label": "Atlantic Time - Halifax", "value": "at"},
        {"label": "Brazil Time - São Paulo", "value": "bt"},
        {"label": "Coordinated Universal Time (UTC)", "value": "utc"},
        {"label": "Western Europe - London", "value": "wet"},
        {"label": "Central Europe - Berlin", "value": "cet"},
        {"label": "Eastern Europe - Bucharest", "value": "eet"},
        {"label": "Turkey - Ankara", "value": "trt"},
        {"label": "India - Kolkata", "value": "ist"},
        {"label": "Bangladesh - Dhaka", "value": "bst"},
        {"label": "Asia - Hong Kong", "value": "hkt"},
        {"label": "Korea - Seoul", "value": "kst"},
        {"label": "Japan - Tokyo", "value": "jst"},
        {"label": "Western Australia - Perth", "value": "west"},
        {"label": "Northern Australia - Darwin", "value": "north"},
        {"label": "Eastern Australia - Queensland", "value": "east"},
        {"label": "Southern Australia - Adelaide", "value": "south"},
        {"label": "Eastern Australia - Sydney", "value": "aedt"},
        {"label": "New Zealand - Auckland", "value": "nza"},
    ];

    useEffect(() => {
        if (!isFormValid) {
            setTimeout(() => setIsFormValid(true), 4000)
        }
        // eslint-disable-next-line
    }, [isFormValid])

    const handleSubmit = async (e) => {

        e.preventDefault();
        const payload = {}

        for (let i = 0; i < e.target.length; i++) {
            const element = e.target[i];
            element.focus();
            element.blur();
            const _isValid = validate(element.name, element.value, setIsFormValid)
            if (!_isValid) return;
            payload[element.name] = element.value;
        }

        payload.guild_id = guildSettings.id;
        delete payload.submit;
        delete payload[""];

        try {
            await guildService.setGuildSettings(userToken, guildSettings.id, payload);
            console.log("success")
            //history.push("/event_create_success");
        } catch (e) {
            console.log("error")

            // TODO: server_error ekle
            //history.push("/server_error")
        }

    }

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
            <form onSubmit={handleSubmit}>
                <div id='general' className='bg-gray-700 bg-opacity-30 p-4 rounded-xl shadow-md mt-4'>
                    <span className="text-3xl font-bold text-primary">General</span>
                    <div className='grid grid-cols-1  md:grid-cols-2 gap-x-48 mt-4'>
                        {
                            guildSettings &&
                            <TextInput
                                title="Prefix"
                                type="text"
                                name='prefix'
                                defaultValue={guildSettings.prefix}
                                width='full'
                                description="The prefix to use commands in your discord server"
                            />
                        }
                        {
                            guildSettings &&
                            <SelectInput
                                title="Timezone"
                                description="Timezone of your discord server"
                                name='timezone'
                                content={timezones}
                                defaultValue={{
                                    label: timezoneToLabel(guildSettings.timezone.toLowerCase()),
                                    value: guildSettings.timezone.toLowerCase()
                                }}
                                width='full'
                                height={14}
                                placeholder='Select'
                            />
                        }
                    </div>
                </div>

                <div id='permissions' className="bg-gray-700 bg-opacity-30 p-4 rounded-xl shadow-md my-8">
                    <span className="text-3xl font-bold text-primary">Permissions</span>
                    <div className='grid grid-cols-1  md:grid-cols-2 gap-x-48 mt-4 mb-8'>
                        <TagPickerInput
                            title="Manager"
                            description="Event Manager role is the one who can do everything about all events"
                            name='manager'
                            content={managerRoles}
                            width='full'
                            height={56}
                            placeholder='Select'
                        />
                        <TagPickerInput
                            title="Event Leader"
                            description="Event Leader role can create events and act like manager to own events"
                            name='event_leader'
                            content={leaderRoles}
                            width='full'
                            height={56}
                            placeholder='Select'
                        />
                    </div>
                </div>

                <div id='logChannel' className="bg-gray-700 bg-opacity-30 p-4 rounded-xl shadow-md my-8">
                    <span className="text-3xl font-bold text-primary">Log Channels</span>
                    <div className='grid grid-cols-1  md:grid-cols-2 gap-x-48 mt-4 mb-8'>
                        {
                            guildSettings &&
                            <SelectInput
                                title="Log Channel"
                                description="The default log channel that stores logs about events"
                                name='log_channel'
                                content={guildChannels}
                                defaultValue={{
                                    label: guildSettings.log_channel.name,
                                    value: guildSettings.log_channel.id
                                }}
                                width='full'
                                height={14}
                                placeholder='Select'
                            />
                        }
                        {
                            guildSettings &&
                            <SelectInput
                                title="Archive Channel"
                                description="The default archive channel that stores logs about finished events"
                                name='archive_channel'
                                content={guildChannels}
                                defaultValue={{
                                    label: guildSettings.archive_channel.name,
                                    value: guildSettings.archive_channel.id
                                }}
                                width='full'
                                height={14}
                                placeholder='Select'
                            />
                        }
                    </div>
                </div>
                <button
                    name="submit"
                    className="bg-white text-black shadow-xl active:bg-lightBlue-600
                fixed bottom-4 right-14 md:w-64 lg:w-64 h-14 z-50
                transition duration-1000 ease-out hover:bg-green-400 hover:text-primary
                font-bold uppercase text-lg px-6 py-3 rounded-lg outline-none focus:outline-none"
                    type="submit"
                >
                    Save
                </button>
            </form>
        </div>
    )
}