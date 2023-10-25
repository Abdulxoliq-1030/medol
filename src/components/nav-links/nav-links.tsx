"use client";
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import cls from "./style.module.scss"
import Link from 'next/link';

interface NavLinksProps { }


interface btnProps {
    label: string;
    link: string;
}

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

const NavLinks: React.FC<NavLinksProps> = () => {

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