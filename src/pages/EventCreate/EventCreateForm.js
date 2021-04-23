import { useState, useEffect } from "react";
import axios from "axios";
import { verifyToken, decodeToken } from "../../crypto";

import { ExclamationIcon } from '@heroicons/react/solid'

import { useParams, useHistory } from "react-router-dom";

import Collapse from "../../components/Collapse"
import Header from "../../components/Header";
import TextInput from "../../components/TextInput";
import DateInput from "../../components/DateInput/DateInput";
import TextAreaInput from "../../components/TextAreaInput";
import TemplateInput from "../../components/TemplateInput";
import AdvancedOptionInput from "../../components/AdvancedOptionInput";
import ReminderOptionsInput from "../../components/ReminderOptionsInput";

import { validate } from "../../inputValidations";

const templates = [
  {
    id: 0,
    templateName: "World of Warcraft",
    imgUrl: "https://raid-helper.com/wp-content/uploads/2021/04/Unbenannt.png",
  },
  {
    id: 1,
    templateName: "Yes & No",
    imgUrl: "https://raid-helper.com/wp-content/uploads/2021/04/poll.png",
  },
  {
    id: 2,
    templateName: "Tabletop Games",
    imgUrl: "https://raid-helper.com/wp-content/uploads/2021/04/tabletop.png",
  },
  {
    id: 3,
    templateName: "Tabletop Games",
    imgUrl: "https://raid-helper.com/wp-content/uploads/2021/04/tabletop.png",
  },
  {
    id: 4,
    templateName: "Tabletop Games",
    imgUrl: "https://raid-helper.com/wp-content/uploads/2021/04/tabletop.png",
  },
  {
    id: 5,
    templateName: "Tabletop Games",
    imgUrl: "https://raid-helper.com/wp-content/uploads/2021/04/tabletop.png",
  },
  {
    id: 6,
    templateName: "Tabletop Games",
    imgUrl: "https://raid-helper.com/wp-content/uploads/2021/04/tabletop.png",
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
  }, [isFormValid])

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {

    }

    for (let i = 0; i < e.target.length; i++) {
      const element = e.target[i];
      element.focus();
      element.blur();
      const _isValid = validate(element.name, element.value, setIsFormValid)
      if (!_isValid) return;
      payload[element.name] = element.value;
    }
    const tokenData = decodeToken(token)
    
    payload.gid= tokenData.gid;
    payload.cid= tokenData.cid;
    payload.id= tokenData.id;
    
    delete payload.submit;
    delete payload[""];

    console.log(payload);
    axios
      .post("http://localhost:3001/api/create_event", payload)
      .then(function (response) {
        console.log(response);
        history.push("/event_create_success")
      })
      .catch(function (error) {
        // TODO: server_error ekle
        history.push("/server_error")
      })


  }

  useEffect(() => {
    axios
      .get("http://localhost:3001/get_guild_data/" + token)
      .then(function (response) {

        const tmpChannels = response.data.channels.map((channel) => {
          return { label: channel.name, value: channel.value }
        })

        const tmpRoles = response.data.roles.map((role, index) => {
          return { label: role.name, color: role.color, value: role.id, selected: false }
        })

        setChannels(tmpChannels);
        setRoles(tmpRoles)
      })
      .catch(function (error) {
        console.log(error);

      })
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
      <main className="bg-content">
        <form onSubmit={handleSubmit}>
          <div className="container mx-auto py-6 px-6 2xl:px-40">
            <div className="container divide-y-2 divide-solid divide-primary">
              <div className="py-4">
                <TemplateInput
                  templates={templates}
                  description="You can select a template here"
                />
              </div>
              <div className='py-4'>
                <TextInput
                  title="Title"
                  type="text"
                  name='general_title'
                  description="Please enter the event title"
                />
              </div>
              <div className='py-4'>
                <TextAreaInput
                  title="Description"
                  rows={2}
                  type="text"
                  name='general_description'
                  description="Please enter the description for event (Optional)"
                />
              </div>
              <div className='py-4'>
                <TextInput
                  title="Channel"
                  type="text"
                  name='general_channel'
                  description="Please enter the channel that you want to get event"
                />
              </div>
              <div className='grid grid-flow-col grid-col-2'>
                <div className='py-4'>
                  <DateInput
                    title="Event Date"
                    name='general_event'
                    description="Please enter the date that event gonna occur"
                  />
                </div>
                <div className='py-4'>
                  <DateInput
                    title="Post Date"
                    name='general_post'
                    description="Please enter the date that event gonna occur"
                  />
                </div>
              </div>
              <div className='py-8'>
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
    </div>
  );
}
