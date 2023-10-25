import React from 'react';
import cls from "./style.module.scss"

interface TitleProps {
    label: string;
}

const Title: React.FC<TitleProps> = ({ label }) => {

    return (
        <h1 className={cls.title}>
            {label}
        </h1>
    )
}

export default Title;