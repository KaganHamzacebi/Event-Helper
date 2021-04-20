import Template from './Template';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

import { useState } from 'react';

export default function TemplateInput({
    templates,
    description
}) {
    const [selected, setSelected] = useState(0);

    return (
        <div className='mb-8'>
            <input type="hidden" name="template" id="tempate" value={selected} />
            <h3 className="text-2xl font-bold text-primary mt-6">Templates</h3>
            <span className='text-sm text-primary-light'>{description}</span>
            <PerfectScrollbar
                className='flex flex-nowrap overflow-hidden p-2'
                options={{ useBothWheelAxes: true, wheelSpeed: 0.5 }}
            >
                {
                    templates.map((tmp, index) => {
                        return <Template key={index} id={index} templateName={tmp.templateName} imgUrl={tmp.imgUrl} selected={selected === index ? true : false} select={setSelected} />
                    })
                }
            </PerfectScrollbar>
        </div>
    );
}