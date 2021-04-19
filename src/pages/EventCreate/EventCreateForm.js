/* This example requires Tailwind CSS v2.0+ */

import { useState, useEffect } from "react";
import axios from "axios";
import { verify, readToken } from "../../crypto";

import { useParams, useHistory } from "react-router-dom";

import Header from "../../components/Header";
import TextInput from "../../components/TextInput";
import DateInput from "../../components/DateInput";
import TextAreaInput from "../../components/TextAreaInput";
import TemplateInput from "../../components/TemplateInput";
import AdvancedOptionInput from "../../components/AdvancedOptionInput";

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
  const [selectedTemplate, setSelectedTemplate] = useState(-1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [channel, setChannel] = useState("");
  const [date, setDate] = useState(0);
  const { token } = useParams();

  useEffect(() => {
    if (!verify(token)) {
      history.push("/invalid_token");
    }
  }, []);

  const createEvent = () => {
    // TODO: girilen verileri kontrol et
    const payload = {
      template: selectedTemplate,
      token: token,
      title: title,
      description: description,
      channel: channel,
      date: date
    }

    axios
      .post("https://httpbin.org/post", payload)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })

  };

  return (
    <div>
      <Header />
      <header className="bg-title shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-primary">Create New Event</h1>
        </div>
      </header>
      <main className="bg-content">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="container divide-y-2 divide-dashed md:divide-solid divide-primary">
            <div>
              <TemplateInput
                templates={templates}
                selected={selectedTemplate}
                selectedChange={setSelectedTemplate}
                description="You can select a template here"
              />
            </div>
            <div>
              <TextInput
                title="Title"
                value={title}
                valueChange={setTitle}
                type="text"
                description="Please enter the event title"
              />
            </div>
            <div>
              <TextAreaInput
                title="Description"
                value={description}
                valueChange={setDescription}
                rows={2}
                type="text"
                description="Please enter the description for event"
              />
            </div>
            <div>
              <TextInput
                title="Channel"
                value={channel}
                valueChange={setChannel}
                type="text"
                description="Please enter the channel that you want to get event"
              />
            </div>
            <div>
              <DateInput
                title="Date"
                valueChange={setDate}
                description="Please enter the date that event gonna occur"
              />
            </div>
            <div>
              <AdvancedOptionInput
                title="Advanced Options"
                description="advanced ayarlari buraya koycez"
              />
            </div>
            <button
              onClick={createEvent}
              className="bg-white text-black hover:text-white shadow-xl active:bg-lightBlue-600
              transition duration-1000 ease-out hover:bg-green-400 hover:text-primary
              font-bold uppercase text-sm px-6 py-3 rounded-full outline-none focus:outline-none
              fixed right-12 bottom-12"
              type="button"
            >
              Create Event
              </button>
          </div>
        </div>
      </main>
    </div>
  );
}
