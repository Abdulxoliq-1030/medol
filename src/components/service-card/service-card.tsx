import React from 'react';
import cls from "./style.module.scss"
import Image from 'next/image';
import Button from '../button/button';

export interface ServiceCardProps {
    imgUrl: string;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imgUrl, title, description }) => {

    return (
        <div className={cls.wrapper}>
            <div className={cls.imageWrap}>
                <Image src={`${imgUrl}`} alt='service-image' width={340} height={220} />
            </div>
            <div className={cls.textWrap}>
                <span>{title}</span>
                <p>{description}</p>
            </div>
            <Button label='Подробнее' />
        </div>
    )

}

export default ServiceCard;