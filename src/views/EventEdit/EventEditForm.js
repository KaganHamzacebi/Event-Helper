import {useContext, useEffect, useState} from "react";

import {ExclamationIcon} from '@heroicons/react/solid'

import {useHistory, useParams} from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Collapse from "../../components/Collapse"
import TextInput from "../../components/TextInput";
import TextAreaInput from "../../components/TextAreaInput";
import TemplateInput from "../../components/TemplateInput";
import DateInput from "../../components/DateInput/DateInput";
import SelectInput from "../../components/SelectInput/SelectInput";
import AdvancedOptionsMenu from "../../AdvancedOption/AdvancedOptionsMenu";
import ReminderOptionsInput from "../../components/ReminderOptionsInput";
import TagPickerInput from "../../components/TagPickerInput/TagPickerInput"

import {validate} from "../../utils/inputValidations";
import moment from "moment";
import GuildService from "../../service/GuildService";
import EventService from "../../service/EventService";
import {UserContext} from "../../App";

const templates = [
    {
        id: "wow",
        templateName: "World of Warcraft",
        imgUrl: "https://cdn.worldvectorlogo.com/logos/world-of-warcraft.svg",
    },
    {
        id: "new_world",
        templateName: "New World",
        imgUrl: "https://i.imgur.com/pewnCwB.png",
    },
    {
        id: "yes_no",
        templateName: "Yes & No",
        imgUrl: "https://image.freepik.com/free-vector/yes-no-signs_1325-370.jpg",
    },
    {
        id: "destiny",
        templateName: "Destiny 2",
        imgUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/db41v46-5a57ca9f-48ba-47ac-aee9-684ce7043e3e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZGI0MXY0Ni01YTU3Y2E5Zi00OGJhLTQ3YWMtYWVlOS02ODRjZTcwNDNlM2UucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vdZaLR6CAMuc1rswCRde8cg9MThDpfgyc3BVAM9evQk",
    },
    {
        id: "rainbow_six",
        templateName: "Rainbox Six Siege",
        imgUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9eb92786-5e60-46ac-ae2c-d33af137f691/d8yvme8-1fa1c81b-5a73-45b0-8051-49d0bec9a73f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOWViOTI3ODYtNWU2MC00NmFjLWFlMmMtZDMzYWYxMzdmNjkxXC9kOHl2bWU4LTFmYTFjODFiLTVhNzMtNDViMC04MDUxLTQ5ZDBiZWM5YTczZi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.2G7aRj8V8ZeRR5ZngnSmbX_ca-biHpBgiGlDWe0mkWc",
    },
];

export default function EventEditForm() {
    const history = useHistory();
    const {id} = useParams();
    const {user, userToken} = useContext(UserContext);

    const eventService = new EventService();
    const guildService = new GuildService();
    const [isFormValid, setIsFormValid] = useState(true);
    const [defaultChannel, setDefaultChannel] = useState(null);
    const [defaultReminderChannel, setDefaultReminderChannel] = useState(null);
    const [channels, setChannels] = useState([]);
    const [mentionRoles, setMentionRoles] = useState([]);
    const [reminderMentionRoles, setReminderMentionRoles] = useState([]);

    const [event, setEvent] = useState([]);


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

        delete payload.submit;
        delete payload[""];

        try {
            await eventService.editEvent(id, payload, userToken);
            history.push("/event_create_success");
        } catch (e) {
            // TODO: server_error ekle
            history.push("/server_error")
        }
    }

    useEffect(() => {
        (async () => {
            let _defaultChannel = null;
            let _defaultReminderChannel = null;

            const _event = (await eventService.getEvent(id, userToken)).data;
            const _channels = (await guildService.getChannels(_event.guild_id, userToken)).data;
            const _roles = (await guildService.getRoles(_event.guild_id, userToken)).data;

            const _mappedChannels = _channels.map((channel) => {
                if (channel.id === _event.channel_id) {
                    _defaultChannel = {label: channel.name, value: channel.id}
                }
                if (channel.id === _event.reminder_options.channel_id) {
                    _defaultReminderChannel = {label: channel.name, value: channel.id}
                }
                return {label: channel.name, value: channel.id}
            });

            const _mentionRoles = _roles.map((role) => {
                return {
                    label: role.name,
                    color: role.color,
                    value: role.id,
                    selected: _event.mentions.includes(role.id)
                }
            });

            const _reminderMentionRoles = _roles.map((role) => {
                return {
                    label: role.name,
                    color: role.color,
                    value: role.id,
                    selected: _event.reminder_options.mentions.includes(role.id)
                }
            });

            setChannels(_mappedChannels);
            setDefaultChannel(_defaultChannel)
            setDefaultReminderChannel(_defaultReminderChannel);
            setMentionRoles(_mentionRoles);
            setReminderMentionRoles(_reminderMentionRoles);
            setEvent(_event);
        })();

        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        console.log(event);
    }, [event])

    return (
        <div>
            <div id="header-wrapper" className='sticky top-0 z-50 items-start'>
                <Header/>
            </div>
            <div className="w-full">
                <div
                    className={`fixed pointer-events-none inset-x-0 mx-auto container px-10 md:px-26 lg:px-96 z-10 transition duration-500 ${isFormValid ? "opacity-0" : "opacity-100"}`}>
                    <div className="m-auto shadow-2xl">
                        <div className="bg-red-300 rounded-lg border-gray-900 border p-3 shadow-2xl">
                            <div className="flex flex-row">
                                <div className="px-2 my-auto">
                                    {<ExclamationIcon className='w-10'/>}
                                </div>
                                <div className="ml-2">
                                    <span className="font-semibold md:text-lg">Event could not be created!</span>
                                    <span
                                        className="block text-gray-500 md:text-lg">Please fill the required fields</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <header className="bg-title shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-primary">Edit Event</h1>
                    </div>
                </header>
                <main className='bg-content'>
                    <form onSubmit={handleSubmit}>
                        <div className="container mx-auto py-6 px-6 2xl:px-40">
                            <div className="container divide-y-2 divide-solid divide-primary">
                                <div className='grid grid-flow-col grid-cols-2 gap-x-48'>
                                    <div className='py-4'>
                                        <TextInput
                                            title="Title"
                                            type="text"
                                            name='title'
                                            width='full'
                                            defaultValue={event.title}
                                            description="Please enter the event title"
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-flow-col grid-cols-2 gap-x-48'>
                                    <div className='py-4'>
                                        <TextAreaInput
                                            title="Description"
                                            rows={2}
                                            type="text"
                                            name='description'
                                            width='full'
                                            defaultValue={event.description}
                                            description="Please enter the description for event (Optional)"
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-flow-col grid-cols-2 gap-x-48'>
                                    <div className='py-4 pb-14'>
                                        <SelectInput
                                            title="Channel"
                                            description="Please enter the channel that you want to get event"
                                            name='channel'
                                            content={channels}
                                            defaultValue={defaultChannel}
                                            width='full'
                                            height={14}
                                            placeholder='Select'
                                        />
                                    </div>
                                    <div className='py-4'>
                                        <TagPickerInput
                                            title="Mentions"
                                            description="Please select the roles that yo want to mention"
                                            name='mentions'
                                            content={mentionRoles}
                                            width='full'
                                            height={56}
                                            placeholder='Select'
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-flow-col grid-cols-2 gap-x-48'>
                                    <div className='py-4'>
                                        <TextInput
                                            title="Thumbnail"
                                            type="text"
                                            name='thumbnail'
                                            width='full'
                                            defaultValue={event.thumbnail}
                                            description="Please enter thumbnail url for event"
                                        />
                                    </div>
                                    <div className='py-4'>
                                        <TextInput
                                            title="Image"
                                            type="text"
                                            name='image'
                                            width='full'
                                            defaultValue={event.image}
                                            description="Please enter image url for event"
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-flow-col grid-cols-2 gap-x-48'>
                                    <div className='py-4'>
                                        <DateInput
                                            title="Event Date"
                                            name='event_date'
                                            valueDate={moment.unix(event.event_date).format('YYYY-MM-DD')}
                                            valueTime={moment.unix(event.event_date).format('HH:DD')}
                                            description="Please enter the date that event gonna occur"
                                        />
                                    </div>
                                    <div className='py-4'>
                                        <DateInput
                                            title="Post Date"
                                            name='post_date'
                                            valueDate={'yyyy-mm-dd'}
                                            valueTime={'--:--'}
                                            description="Please enter the date that event gonna occur"
                                        />
                                    </div>
                                </div>
                                <div className='pt-8'>
                                    <Collapse name="Reminder Options"
                                              description="Announcement  options can be setted with using collapse menu">
                                        {
                                            event.reminder_options &&
                                            <ReminderOptionsInput
                                                channelContent={channels}
                                                defaultChannel={defaultReminderChannel}
                                                roleContent={reminderMentionRoles}
                                                descriptionContent={event.reminder_options.description}
                                                timeContent={event.reminder_options.remaining_time}/>
                                        }
                                    </Collapse>
                                </div>
                                <div className='py-8'>
                                    <Collapse name="Advanced Options"
                                              description="Advanced options can be setted with using collapse menu">
                                        {
                                            event.advanced_options &&
                                            <AdvancedOptionsMenu defaultValues={event.advanced_options}/>
                                        }
                                    </Collapse>
                                </div>
                                <div className="flex flex-row justify-end w-full">
                                    <button
                                        name="submit"
                                        className="bg-white text-black shadow-xl active:bg-lightBlue-600
                  w-full md:w-64 lg:w-80 h-14
                transition duration-1000 ease-out hover:bg-green-400 hover:text-primary
                font-bold uppercase text-lg px-6 py-3 mt-8 mb-10 rounded-lg outline-none focus:outline-none
                 "
                                        type="submit"
                                    >
                                        Edit Event
                                    </button>
                                </div>

                            </div>
                        </div>
                    </form>
                </main>
            </div>
            <div id="footer-wrapper">
                <Footer/>
            </div>
        </div>
    );
}
