import Template from './Template';

import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

import {useState} from 'react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function TemplateInput({
                                          templates,
                                          description
                                      }) {
    const [selected, setSelected] = useState('wow');

    return (
        <div>
            <input type="hidden" name="template" id="tempate" value={selected}/>
            <h3 className="text-2xl font-bold text-primary mt-6">Templates</h3>
            <span className='text-sm text-primary-light'>{description}</span>
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                navigation
                pagination={{clickable: true}}
            >
                {
                    templates.map((tmp, index) => {
                        return <SwiperSlide key={index}>
                            <Template id={tmp.id} templateName={tmp.templateName} imgUrl={tmp.imgUrl}
                                      selected={selected === tmp.id ? true : false} select={setSelected}/>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    );
}