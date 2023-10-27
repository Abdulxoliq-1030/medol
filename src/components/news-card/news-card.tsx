"use client"
import React from 'react';
import cls from "./style.module.scss"
import Image from 'next/image';
import Link from 'next/link';
import Button from '../button/button';
import { useTranslation } from 'react-i18next';

interface NewsCardProps { }

const NewsCard: React.FC<NewsCardProps> = () => {
    const { t } = useTranslation()
    return (
        <div className={cls.wrapper}>
            <Image src="/news-img.png" alt='news' width={270} height={170} />
            <Link href="#" className={cls.link}>
                {t("newsAboutPerson")}
            </Link>
            <span>26.07.2021</span>
            <p>{t("newsAbout")}</p>
            <Button label={t("detail")} />
        </div >
    )
}

export default NewsCard;