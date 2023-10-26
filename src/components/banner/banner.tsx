"use client";
import React, { useState } from 'react';
import { Navbar } from '..';
import NavLinks, { buttons } from '../nav-links/nav-links';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import cls from "./style.module.scss"
import Image from 'next/image';
import Button from '../button/button';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import Link from 'next/link';

interface BannerProps { }



interface itemsProps {
    title: string;
    subText: string;
    description: string;
    imgUrl: string;
}


const items: itemsProps[] = [
    {
        title: "Анализатор",
        subText: "ABL800 FLEX",
        description: "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",
        imgUrl: "/slide-1.png"
    },
    {
        title: "Аппарат ИК-лазерный",
        subText: "МАКДЭЛ-09.1",
        description: "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",
        imgUrl: "/slide-2.png"
    },
    {
        title: "Система для",
        subText: "аутогемотрансфузии",
        description: "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",
        imgUrl: "/slide-4.png"
    },
]

const Banner: React.FC<BannerProps> = () => {

    const [showSidebar, setShowSidebar] = useState(false);

    const handleShowSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    return (
        <div id='store' className={cls.wrapper}>
            <Navbar handleShowSidebar={handleShowSidebar} />
            <NavLinks />
            <Swiper
                spaceBetween={300}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                className={cls.swiper}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={true} modules={[Pagination]}
            >
                {items.map((item, idx) => (
                    <SwiperSlide>
                        <div className={cls.sliderItem}>
                            <div className={cls.sliderLeft}>
                                <h1>{item.title} <br /> {item.subText}</h1>
                                <p>{item.description}</p>
                                <Button label='Подробнее' />
                            </div>
                            <div className={cls.sliderRight}>
                                <Image src={`${item.imgUrl}`} alt={`slide-${idx}`} width={520} height={400} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper >
            <div style={{ left: showSidebar ? "0" : "-100%" }} onClick={handleShowSidebar} className={cls.mediaModal}>
                <Image src="/logo.svg" alt='logo' width={220} height={80} />
                <ul>
                    {buttons.map(link => (
                        <li>
                            <Link onClick={handleShowSidebar} href={`${link.link}`}>{link.label}</Link>
                        </li>
                    ))}

                </ul>
            </div>
        </div >
    )
}

export default Banner;