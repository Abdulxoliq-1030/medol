"use client"
import React from 'react';
import cls from "./style.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { NewsCard, Title } from '..';

interface NewsProps { }

import { Navigation } from 'swiper/modules';
import Link from 'next/link';

const News: React.FC<NewsProps> = () => {

    return (
        <div id='news' className={cls.wrapper}>
            <Title label='НОВОСТИ' />
            <Swiper navigation={true} spaceBetween={80}
                slidesPerView={3} modules={[Navigation]} className={cls.swiper} >
                <SwiperSlide><NewsCard /></SwiperSlide>
                <SwiperSlide><NewsCard /></SwiperSlide>
                <SwiperSlide><NewsCard /></SwiperSlide>
                <SwiperSlide><NewsCard /></SwiperSlide>
                <SwiperSlide><NewsCard /></SwiperSlide>
                <SwiperSlide><NewsCard /></SwiperSlide>
            </Swiper>
            <div className={cls.links}>
                <Link href='#'>Посмотреть все новости</Link>
                <Link href='#'>Подписаться на новости</Link>
            </div>
        </div>
    )

}

export default News;