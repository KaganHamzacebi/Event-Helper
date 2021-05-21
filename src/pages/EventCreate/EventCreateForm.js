import { useState, useEffect } from "react";
import axios from "axios";
import { verifyToken, decodeToken } from "../../utils/crypto";

import { ExclamationIcon } from '@heroicons/react/solid'

import { useParams, useHistory } from "react-router-dom";

import Collapse from "../../components/Collapse"
import TextInput from "../../components/TextInput";
import TextAreaInput from "../../components/TextAreaInput";
import TemplateInput from "../../components/TemplateInput";
import DateInput from "../../components/DateInput/DateInput";
import SelectInput from "../../components/SelectInput/SelectInput";
import TagPickerInput from "../../components/TagPickerInput/TagPickerInput"
import AdvancedOptionInput from "../../components/AdvancedOptionInput";
import ReminderOptionsInput from "../../components/ReminderOptionsInput";

import { validate } from "../../utils/inputValidations";
import moment from "moment";

const templates = [
  {
    id: 0,
    templateName: "World of Warcraft",
    imgUrl: "https://cdn.worldvectorlogo.com/logos/world-of-warcraft.svg",
  },
  {
    id: 1,
    templateName: "Yes & No",
    imgUrl: "https://image.freepik.com/free-vector/yes-no-signs_1325-370.jpg",
  },
  {
    id: 2,
    templateName: "Destiny 2",
    imgUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/db41v46-5a57ca9f-48ba-47ac-aee9-684ce7043e3e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZGI0MXY0Ni01YTU3Y2E5Zi00OGJhLTQ3YWMtYWVlOS02ODRjZTcwNDNlM2UucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vdZaLR6CAMuc1rswCRde8cg9MThDpfgyc3BVAM9evQk",
  },
  {
    id: 3,
    templateName: "Rainbox Six Siege",
    imgUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9eb92786-5e60-46ac-ae2c-d33af137f691/d8yvme8-1fa1c81b-5a73-45b0-8051-49d0bec9a73f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOWViOTI3ODYtNWU2MC00NmFjLWFlMmMtZDMzYWYxMzdmNjkxXC9kOHl2bWU4LTFmYTFjODFiLTVhNzMtNDViMC04MDUxLTQ5ZDBiZWM5YTczZi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.2G7aRj8V8ZeRR5ZngnSmbX_ca-biHpBgiGlDWe0mkWc",
  },
];

export default function EventCreateForm() {
  const history = useHistory();

  const { token } = useParams();
  const [isFormValid, setIsFormValid] = useState(true);
  const [channels, setChannels] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    if (!verifyToken(token)) {
      history.push("/invalid_token");
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!isFormValid) {
      setTimeout(() => setIsFormValid(true), 4000)
    }
    // eslint-disable-next-line
  }, [isFormValid])

  const handleSubmit = (e) => {
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
    const tokenData = decodeToken(token)

    payload.guild_id = tokenData.gid;
    payload.channel_id = tokenData.cid;
    payload.leader_id = tokenData.id;

    delete payload.submit;
    delete payload[""];

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/create_event`, payload)
      .then(function (response) {
        history.push("/event_create_success")
      })
      .catch(function (error) {
        // TODO: server_error ekle
        history.push("/server_error")
      })


  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/get_guild_data/` + token)
      .then(function (response) {

        const tmpChannels = response.data.channels.map((channel) => {
          return { label: channel.name, value: channel.id }
        })

        const tmpRoles = response.data.roles.map((role, index) => {
          return { label: role.name, color: role.color, value: role.id, selected: false }
        })

        setChannels(tmpChannels);
        setRoles(tmpRoles);
      })
      .catch(function (error) {
        console.log(error);

      })
    // eslint-disable-next-line
  }, [])


  return (
    <div className="w-full">
      <div className={`fixed pointer-events-none inset-x-0 mx-auto container px-10 md:px-26 lg:px-96 z-10 transition duration-500 ${isFormValid ? "opacity-0" : "opacity-100"}`}>
        <div className="m-auto shadow-2xl">
          <div className="bg-red-300 rounded-lg border-gray-900 border p-3 shadow-2xl">
            <div className="flex flex-row">
              <div className="px-2 my-auto">
                {<ExclamationIcon className='w-10' />}
              </div>
              <div className="ml-2">
                <span className="font-semibold md:text-lg">Event could not be created!</span>
                <span className="block text-gray-500 md:text-lg">Please fill the required fields</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="bg-title shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-primary">Create New Event</h1>
        </div>
      </header>
      <main className='bg-content'>
        <form onSubmit={handleSubmit}>
          <div className="container mx-auto py-6 px-6 2xl:px-40">
            <div className="container divide-y-2 divide-solid divide-primary">
              <div className="py-4">
                <TemplateInput
                  templates={templates}
                  description="You can select a template here"
                />
              </div>
              <div className='grid grid-flow-col grid-cols-2 gap-x-48'>
                <div className='py-4'>
                  <TextInput
                    title="Title"
                    type="text"
                    name='title'
                    width='full'
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
                    content={roles}
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
                    description="Please enter thumbnail url for event"
                  />
                </div>
                <div className='py-4'>
                  <TextInput
                    title="Image"
                    type="text"
                    name='image'
                    width='full'
                    description="Please enter image url for event"
                  />
                </div>
              </div>
              <div className='grid grid-flow-col grid-cols-2 gap-x-48'>
                <div className='py-4'>
                  <DateInput
                    title="Event Date"
                    name='event_date'
                    valueDate={moment().format('YYYY-MM-DD')}
                    valueTime={moment().format('HH:DD')}
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
                <Collapse name="Reminder Options" description="Announcement  options can be setted with using collapse menu">
                  <ReminderOptionsInput channelContent={channels} roleContent={roles} />
                </Collapse>
              </div>
              <div className='py-8'>
                <Collapse name="Advanced Options" description="Advanced options can be setted with using collapse menu">
                  <AdvancedOptionInput />
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
                  Create Event
                </button>
              </div>

            </div>
          </div>
        </form>
      </main>
    </div >
  );
}
