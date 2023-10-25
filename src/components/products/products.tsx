import React from 'react';
import cls from "./style.module.scss"
import { Title } from '..';

interface ProductsProps { }

const Products: React.FC<ProductsProps> = () => {
    return (
        <div className={cls.wrapper}>
            <Title label='ПРОДУКЦИЯ' />
        </div>
    )
}

export default Products;