/* This example requires Tailwind CSS v2.0+ */

import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import {  verify, readToken } from "../../crypto";

import { useParams, useHistory } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

import TextInput from "../TextInput";
import TemplateInput from "../TemplateInput";

const templates = [
  {
    templateName: "World of Warcraft",
    imgUrl: "https://raid-helper.com/wp-content/uploads/2021/04/Unbenannt.png",
  },
  {
    templateName: "Yes & No",
    imgUrl: "https://raid-helper.com/wp-content/uploads/2021/04/poll.png",
  },
  {
    templateName: "Tabletop Games",
    imgUrl: "https://raid-helper.com/wp-content/uploads/2021/04/tabletop.png",
  },
  {
    templateName: "Tabletop Games",
    imgUrl: "https://raid-helper.com/wp-content/uploads/2021/04/tabletop.png",
  },
  {
    templateName: "Tabletop Games",
    imgUrl: "https://raid-helper.com/wp-content/uploads/2021/04/tabletop.png",
  },
  {
    templateName: "Tabletop Games",
    imgUrl: "https://raid-helper.com/wp-content/uploads/2021/04/tabletop.png",
  },
  {
    templateName: "Tabletop Games",
    imgUrl: "https://raid-helper.com/wp-content/uploads/2021/04/tabletop.png",
  },
];

const navigation = ["Dashboard", "Team", "Projects", "Calendar", "Reports"];
const profile = ["Your Profile", "Settings", "Sign out"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
      <Disclosure as="nav" className="bg-header">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item, itemIdx) =>
                        itemIdx === 0 ? (
                          <Fragment key={item}>
                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                            <a
                              href="#"
                              className="bg-gray-900 text-primary px-3 py-2 rounded-md text-sm font-medium"
                            >
                              {item}
                            </a>
                          </Fragment>
                        ) : (
                          <a
                            key={item}
                            href="#"
                            className="text-primary hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                          >
                            {item}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                      {({ open }) => (
                        <>
                          <div>
                            <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items
                              static
                              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                              {profile.map((item) => (
                                <Menu.Item key={item}>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      {item}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </>
                      )}
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item, itemIdx) =>
                  itemIdx === 0 ? (
                    <Fragment key={item}>
                      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                      <a
                        href="#"
                        className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                      >
                        {item}
                      </a>
                    </Fragment>
                  ) : (
                    <a
                      key={item}
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">
                      Tom Cook
                    </div>
                    <div className="text-sm font-medium leading-none text-gray-400">
                      tom@example.com
                    </div>
                  </div>
                  <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  {profile.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <header className="bg-title shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-primary">Create New Event</h1>
        </div>
      </header>
      <main className="bg-content">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="container divide-y-2 divide-dashed md:divide-solid divide-primary">
            <div className="mb-8">
              <TemplateInput
                template={templates}
                description="You can select a template here"
              />
            </div>
            <div className="mb-8">
              <TextInput
                title="Title"
                value={title}
                valueChange={setTitle}
                type="text"
                description="Please enter the event title"
              />
            </div>
            <div className="mb-8">
              <TextInput
                title="Description"
                value={description}
                valueChange={setDescription}
                type="text"
                description="Please enter the description for event"
              />
            </div>
            <div className="mb-8">
              <TextInput
                title="Channel"
                value={channel}
                valueChange={setChannel}
                type="text"
                description="Please enter the channel that you want to get event"
              />
            </div>
            <div className="mb-8">
              <TextInput
                title="Date"
                value={date}
                valueChange={setDate}
                type="date"
                description="Please enter the date that event gonna occur"
              />
            </div>
            <div style={{ position: "fixed", right: 48, bottom: 48 }}>
              <button
                onClick={createEvent}
                className="text-lightBlue-500 bg-primary text-primary hover:bg-primary-light hover:text-white shadow-xl active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3  rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                <i className="fas fa-heart"></i> Complete Event
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
