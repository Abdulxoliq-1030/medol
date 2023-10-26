import React from 'react';
import cls from "./style.module.scss"
import { Card, Title } from '..';
import Link from 'next/link';
import Image from 'next/image';
import { CardProps } from '../card/card';

interface ProductsProps { }

const items: CardProps[] = [
    {
        imgUrl: "/product-1.png",
        text: "Эндоваскулярная хирургия"
    },
    {
        imgUrl: "/product-2.png",
        text: "Лабораторная диагностика"
    },
    {
        imgUrl: "/product-3.png",
        text: "Кардиохирургия"
    },
    {
        imgUrl: "/product-4.png",
        text: "ДИАБЕТ"
    },
    {
        imgUrl: "/product-5.png",
        text: "ЭНДОУРОЛОГИЯ"
    },
    {
        imgUrl: "/product-6.png",
        text: "АРИТМОЛОГИЯ"
    },
]


const Products: React.FC<ProductsProps> = () => {
    return (
        <div id='products' className={cls.wrapper}>
            <Title label='ПРОДУКЦИЯ' />
            <div className={cls.products}>
                {
                    items.map((item) => (
                        <Card {...item} />
                    ))
                }
            </div>
            <Link href="#" className={cls.link}>
                Перейти в каталог нашей продукции <Image src="/right-icon.svg" alt="icon" width={20} height={20} />
            </Link>
        </div>
    )
}

export default Products;