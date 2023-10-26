import React from 'react';
import cls from "./style.module.scss"
import Image from 'next/image';
import Button from '../button/button';

export interface CardProps {
    imgUrl: string;
    text: string;
}

const Card: React.FC<CardProps> = ({ imgUrl, text }) => {

    return (
        <div className={cls.wrapper}>
            <Image src={`${imgUrl}`} alt='product' width={150} height={150} />
            <span>{text}</span>
            <Button label='Посмотреть все' />
        </div>
    )

}

export default Card;