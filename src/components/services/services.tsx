"use client";
import React from 'react';
import cls from "./style.module.scss"
import { ServiceCard, Title } from '..';
import { ServiceCardProps } from '../service-card/service-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

interface ServicesProps { }




const Services: React.FC<ServicesProps> = () => {
    const { t } = useTranslation()

    const serviceItems: ServiceCardProps[] = [
        {
            imgUrl: "/service-1.png",
            title: t("logistic"),
            description: t("serviceDesc")
        },
        {
            imgUrl: "/service-2.png",
            title: t("registration"),
            description: t("serviceDesc")
        },
        {
            imgUrl: "/service-3.png",
            title: t("logistic"),
            description: t("serviceDesc")
        },
    ]

    return (
        <div id='service' className={cls.wrapper}>
            <Title label={t("services")} />
            <div className={cls.serviceTypes}>
                {serviceItems.map((item, idx) => (
                    <React.Fragment key={idx}>
                        <ServiceCard {...item} />
                    </React.Fragment>
                ))}
            </div>

            <Swiper
                spaceBetween={40}
                slidesPerView={2}
                className={cls.swiper}
                pagination={true} modules={[Pagination]}
            >
                {serviceItems.map((item, idx) => (
                    <React.Fragment key={idx}>
                        <SwiperSlide>
                            <ServiceCard {...item} />
                        </SwiperSlide>
                    </React.Fragment>
                ))}
            </Swiper>

            <Swiper
                spaceBetween={40}
                slidesPerView={1}
                className={cls.mediaSwiper}
            >
                {serviceItems.map((item, idx) => (
                    <React.Fragment key={idx}>
                        <SwiperSlide>
                            <ServiceCard {...item} />
                        </SwiperSlide>
                    </React.Fragment>
                ))}
            </Swiper >

        </div>
    )


}

export default Services;