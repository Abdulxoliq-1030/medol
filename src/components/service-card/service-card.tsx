"use client"
import React from 'react';
import cls from "./style.module.scss"
import Image from 'next/image';
import Button from '../button/button';
import { useTranslation } from 'react-i18next';

export interface ServiceCardProps {
    imgUrl: string;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imgUrl, title, description }) => {
    const { t } = useTranslation()
    return (
        <div className={cls.wrapper}>
            <div className={cls.imageWrap}>
                <Image className={cls.desktopImage} src={`${imgUrl}`} alt='service-image' width={340} height={220} />
                <img className={cls.mobileImage} src={`${imgUrl}`} alt='service-image' />
            </div>
            <div className={cls.textWrap}>
                <span>{title}</span>
                <p>{description}</p>
            </div>
            <Button label={t("detail")} />
        </div>
    )

}

export default ServiceCard;