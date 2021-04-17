import Template from './Template';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

export default function TemplateInput(props) {

    const arrow = ({ text, className }) => {
        return (
            <div
                className={className}
            >{text}</div>
        );
    };


    const arrowLeft = arrow({ text: <FontAwesomeIcon icon={faArrowCircleLeft} />, className: 'arrow-prev' });
    const arrowRight = arrow({ text: <FontAwesomeIcon icon={faArrowCircleRight} />, className: 'arrow-next' });

    const [selected, setSelected] = useState(0);

    const myItems = props.template.map((tmp, index) => {
        return <Template key={index} templateName={tmp.templateName} imgUrl={tmp.imgUrl} />
    })

    return (
        <div className='mb-8'>
            <h3 className="text-2xl font-bold text-primary mt-6">Templates</h3>
            <span className='text-sm text-primary-light'>{props.description}</span>
            < ScrollMenu
                alignCenter={false}
                alignOnResize={false}
                data={myItems}
                arrowLeft={arrowLeft}
                arrowRight={arrowRight}
                selected={selected}
                onSelect={(item) => setSelected(item.key) }
            />
        </div>
    );
}