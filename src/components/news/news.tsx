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
import { useTranslation } from 'react-i18next';

const News: React.FC<NewsProps> = () => {
    const { t } = useTranslation()

    return (
        <div id='news' className={cls.wrapper}>
            <Title label={t("news")} />
            <Swiper navigation={true} spaceBetween={80}
                slidesPerView={3} modules={[Navigation]} className={cls.swiper} >
                <SwiperSlide><NewsCard /></SwiperSlide>
                <SwiperSlide><NewsCard /></SwiperSlide>
                <SwiperSlide><NewsCard /></SwiperSlide>
                <SwiperSlide><NewsCard /></SwiperSlide>
                <SwiperSlide><NewsCard /></SwiperSlide>
                <SwiperSlide><NewsCard /></SwiperSlide>
            </Swiper>
            <Swiper navigation={true} spaceBetween={30}
                slidesPerView={2} modules={[Navigation]} className={cls.tabletSwiper} >
                <SwiperSlide><NewsCard /></SwiperSlide>
                <SwiperSlide><NewsCard /></SwiperSlide>
                <SwiperSlide><NewsCard /></SwiperSlide>
                <SwiperSlide><NewsCard /></SwiperSlide>
                <SwiperSlide><NewsCard /></SwiperSlide>
                <SwiperSlide><NewsCard /></SwiperSlide>
            </Swiper>
            <Swiper navigation={true} spaceBetween={20}
                slidesPerView={1} modules={[Navigation]} className={cls.mobileSwiper} >
                <SwiperSlide><NewsCard /></SwiperSlide>
                <SwiperSlide><NewsCard /></SwiperSlide>
                <SwiperSlide><NewsCard /></SwiperSlide>
                <SwiperSlide><NewsCard /></SwiperSlide>
                <SwiperSlide><NewsCard /></SwiperSlide>
                <SwiperSlide><NewsCard /></SwiperSlide>
            </Swiper>
            <div className={cls.links}>
                <Link href='#'>{t("showAllNews")}</Link>
                <Link href='#'>{t("followNews")}</Link>
            </div>
        </div>
    )

}

export default News;