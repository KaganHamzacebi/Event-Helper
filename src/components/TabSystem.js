import { useState } from "react";

import TextInput from "./TextInput";
import DateInput from "./DateInput/DateInput";
import TextAreaInput from "./TextAreaInput";
import TemplateInput from "./TemplateInput";
import AdvancedOptionInput from "./AdvancedOptionInput";

export default function TabSystem() {

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

  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-primary transition-colors " +
                  (openTab === 1
                    ? "bg-green-500"
                    : "bg-title")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                General Options
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-primary transition-colors " +
                  (openTab === 2
                    ? "bg-green-500"
                    : "bg-title")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Mention Options
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-primary transition-colors " +
                  (openTab === 3
                    ? "bg-green-500"
                    : "bg-title")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Advanced Options
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-content w-full mb-6 rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="container divide-y-2 divide-dashed md:divide-solid divide-primary">
                    <div>
                      <TemplateInput
                        templates={templates}
                        description="You can select a template here"
                      />
                    </div>
                    <div>
                      <TextInput
                        title="Title"
                        type="text"
                        description="Please enter the event title"
                      />
                    </div>
                    <div>
                      <TextAreaInput
                        title="Description"
                        rows={2}
                        type="text"
                        description="Please enter the description for event (Optional)"
                      />
                    </div>
                    <div>
                      <TextInput
                        title="Channel"
                        type="text"
                        description="Please enter the channel that you want to get event"
                      />
                    </div>
                    <div>
                      <DateInput
                        title="Date"
                        description="Please enter the date that event gonna occur"
                      />
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div>
                    <AdvancedOptionInput
                      title="Advanced Options"
                      description="advanced ayarlari buraya koycez"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};