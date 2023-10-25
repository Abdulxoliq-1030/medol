import React from 'react';
import cls from "./style.module.scss"

interface ButtonProps {
    label: string;
    onclick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onclick }) => {
    return (
        <button onClick={onclick} className={cls["btn-grad"]}>
            {label}
        </button>
    )
}

export default Button;