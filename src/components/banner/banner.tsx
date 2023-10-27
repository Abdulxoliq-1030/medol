"use client";
import React, { useState } from 'react';
import { Navbar } from '..';
import NavLinks, { btnProps } from '../nav-links/nav-links';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import cls from "./style.module.scss"
import Image from 'next/image';
import Button from '../button/button';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

interface BannerProps { }


const buttons: btnProps[] = [
    {
        label: "МАГАЗИН",
        link: "#store"
    },
    {
        label: "О КОМПАНИИ",
        link: "#company"
    }, {
        label: "ПРОДУКЦИЯ",
        link: "#products"
    }, {
        label: "УСЛУГИ",
        link: "#service"
    }, {
        label: "АКЦИИ И НОВОСТИ",
        link: "#news"
    }, {
        label: "ОБРАТНАЯ СВЯЗЬ",
        link: "#connect"
    },
]


interface itemsProps {
    title: string;
    subText: string;
    description: string;
    imgUrl: string;
}



const Banner: React.FC<BannerProps> = () => {

    const [showSidebar, setShowSidebar] = useState(false);
    const { t } = useTranslation();


    const items: itemsProps[] = [
        {
            title: t("analize"),
            subText: "ABL800 FLEX",
            description: t("bannerText"),
            imgUrl: "/slide-1.png"
        },
        {
            title: t("lazerName"),
            subText: "МАКДЭЛ-09.1",
            description: t("bannerText"),
            imgUrl: "/slide-2.png"
        },
        {
            title: t("forSystem"),
            subText: t("autogemotransfuzii"),
            description: t("bannerText"),
            imgUrl: "/slide-4.png"
        },
    ]



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
                                <Button label={t("detail")} />
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