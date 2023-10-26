"use client";
import React from 'react';
import cls from "./style.module.scss"
import { ServiceCard, Title } from '..';
import { ServiceCardProps } from '../service-card/service-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Pagination } from 'swiper/modules';

interface ServicesProps { }


const serviceItems: ServiceCardProps[] = [
    {
        imgUrl: "/service-1.png",
        title: "УСЛУГИ ЛОГИСТИКИ",
        description: "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......"
    },
    {
        imgUrl: "/service-2.png",
        title: "РЕГИСТРАЦИИ",
        description: "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......"
    },
    {
        imgUrl: "/service-3.png",
        title: "УСЛУГИ ЛОГИСТИКИ",
        description: "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......"
    },
]

const Services: React.FC<ServicesProps> = () => {

    return (
        <div id='service' className={cls.wrapper}>
            <Title label='УСЛУГИ' />
            <div className={cls.serviceTypes}>
                {serviceItems.map((item) => (
                    <ServiceCard {...item} />
                ))}
            </div>

            <Swiper
                spaceBetween={40}
                slidesPerView={2}
                className={cls.swiper}
                pagination={true} modules={[Pagination]}
            >
                {serviceItems.map((item, idx) => (
                    <SwiperSlide>
                        <ServiceCard {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                spaceBetween={40}
                slidesPerView={1}
                className={cls.mediaSwiper}
            >
                {serviceItems.map((item, idx) => (
                    <SwiperSlide>
                        <ServiceCard {...item} />
                    </SwiperSlide>
                ))}
            </Swiper >

        </div>
    )


}

export default Services;