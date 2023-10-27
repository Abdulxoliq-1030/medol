"use client"
import React from 'react';
import cls from "./style.module.scss"
import { Title } from '..';
import Image from 'next/image';
import Button from '../button/button';
import { useTranslation } from 'react-i18next';

interface CompanyProps { }

const Company: React.FC<CompanyProps> = () => {
    const { t } = useTranslation()

    return (
        <div id='company' className={cls.wrapper}>
            <Title label={t("company")} />
            <div className={cls.content}>
                <Image src="/company-img.png" alt='company-img' width={450} height={450} />
                <div className={cls.textWrap}>
                    <p>{t("companyAbout")}</p>
                    <Button label={t("moreInformation")} />
                </div>
            </div>
        </div>
    )

}

export default Company;