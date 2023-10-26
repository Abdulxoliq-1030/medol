import React from 'react';
import cls from "./style.module.scss"
import Image from 'next/image';
import Link from 'next/link';
import Button from '../button/button';

interface NewsCardProps { }

const NewsCard: React.FC<NewsCardProps> = () => {
    return (
        <div className={cls.wrapper}>
            <Image src="/news-img.png" alt='news' width={270} height={170} />
            <Link href="#" className={cls.link}>
                Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
            </Link>
            <span>26.07.2021</span>
            <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
            <Button label='Подробнее' />
        </div >
    )
}

export default NewsCard;