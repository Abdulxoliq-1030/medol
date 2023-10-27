"use client"
import React from 'react';
import { Card, Title } from '..';
import Link from 'next/link';
import Image from 'next/image';
import { CardProps } from '../card/card';
import cls from "./style.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useTranslation } from 'react-i18next';

interface ProductsProps { }





const Products: React.FC<ProductsProps> = () => {
    const { t } = useTranslation();


    const items: CardProps[] = [
        {
            imgUrl: "/product-1.png",
            text: t("xirrurg")
        },
        {
            imgUrl: "/product-2.png",
            text: t("laboratory")
        },
        {
            imgUrl: "/product-3.png",
            text: t("heartOperation")
        },
        {
            imgUrl: "/product-4.png",
            text: "ДИАБЕТ"
        },
        {
            imgUrl: "/product-5.png",
            text: t("endourology")
        },
        {
            imgUrl: "/product-6.png",
            text: t("aritmology")
        },
    ]

    return (
        <div id='products' className={cls.wrapper}>
            <Title label={t("products")} />
            <div className={cls.products}>
                {
                    items.map((item) => (
                        <Card {...item} />
                    ))
                }
            </div>
            <Swiper spaceBetween={20}
                slidesPerView={2} className={cls.swiper} >
                {
                    items.map(item => (
                        <SwiperSlide>
                            <Card {...item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <Swiper spaceBetween={20}
                slidesPerView={1} className={cls.mediaSwiper} >
                {
                    items.map(item => (
                        <SwiperSlide>
                            <Card {...item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <Link href="#" className={cls.link}>
                {t("nextProductLink")} <Image src="/right-icon.svg" alt="icon" width={20} height={20} />
            </Link>
        </div>
    )
}

export default Products;