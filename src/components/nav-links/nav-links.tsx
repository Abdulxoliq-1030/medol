"use client";
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import cls from "./style.module.scss"
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

interface NavLinksProps { }


export interface btnProps {
    label: string;
    link: string;
}



const NavLinks: React.FC<NavLinksProps> = () => {
    const { t } = useTranslation()

    const buttons: btnProps[] = [
        {
            label: t("store"),
            link: "#store"
        },
        {
            label: t("company"),
            link: "#company"
        }, {
            label: t("products"),
            link: "#products"
        }, {
            label: t("services"),
            link: "#service"
        }, {
            label: t("news"),
            link: "#news"
        }, {
            label: t("connect"),
            link: "#connect"
        },
    ]

    const [selected, setSelected] = useState(0);

    return (
        <div className={cls.wrapper}>
            <ButtonGroup variant="contained" style={{ boxShadow: "none" }} aria-label="outlined primary button group">
                {buttons.map(({ link, label }, idx) => (
                    <Link onClick={() => setSelected(idx)} href={link}>
                        <Button style={{ color: selected === idx ? "#00c9c9" : "#000" }}>
                            {label}
                            {selected === idx ? <div className={cls.dot}></div> : null}
                        </Button>
                    </Link>
                ))}
            </ButtonGroup>
        </div >
    )

}

export default NavLinks;