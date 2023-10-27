"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Title } from '..';
import cls from "./style.module.scss"
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

interface PartnersProps { }

const items = [
    {
        img1: "/partner-1.png",
        img2: "/partner-2.png",
    },
    {
        img1: "/partner-3.png",
        img2: "/partner-4.png",
    },
    {
        img1: "/partner-5.png",
        img2: "/partner-6.png",
    },
    {
        img1: "/partner-7.png",
        img2: "/partner-8.png",
    },
    {
        img1: "/partner-1.png",
        img2: "/partner-2.png",
    },
    {
        img1: "/partner-3.png",
        img2: "/partner-4.png",
    },
    {
        img1: "/partner-5.png",
        img2: "/partner-6.png",
    },
    {
        img1: "/partner-7.png",
        img2: "/partner-8.png",
    },
    {
        img1: "/partner-1.png",
        img2: "/partner-2.png",
    },
    {
        img1: "/partner-3.png",
        img2: "/partner-4.png",
    },
    {
        img1: "/partner-5.png",
        img2: "/partner-6.png",
    },
    {
        img1: "/partner-7.png",
        img2: "/partner-8.png",
    },
]

const Partners: React.FC<PartnersProps> = () => {

    const { t } = useTranslation()


    return (
        <div id='partners' className={cls.wrapper}>
            <Title label={t("partners")} />
            <Swiper navigation={true} spaceBetween={120}
                slidesPerView={3} modules={[Navigation]} className={cls.swiper} >
                {items.map(item => (
                    <SwiperSlide className={cls.swiperItem}>
                        <Image src={`${item.img1}`} alt='Image' width={350} height={130} />
                        <Image src={`${item.img2}`} alt='Image' width={350} height={130} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper navigation={true} spaceBetween={110}
                slidesPerView={2} modules={[Navigation]} className={cls.tabletSwiper} >
                {items.map(item => (
                    <SwiperSlide className={cls.swiperItem}>
                        <Image src={`${item.img1}`} alt='Image' width={290} height={130} />
                        <Image src={`${item.img2}`} alt='Image' width={290} height={130} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper onSwiper={(swiper) => console.log(swiper)}
                pagination={true} spaceBetween={120}
                slidesPerView={1} modules={[Pagination]} className={cls.mobileSwiper} >
                {items.map(item => (
                    <SwiperSlide className={cls.swiperItem}>
                        <Image src={`${item.img1}`} alt='Image' width={330} height={130} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Partners;