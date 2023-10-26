import React from 'react';
import cls from "./style.module.scss"
import { ServiceCard, Title } from '..';
import { ServiceCardProps } from '../service-card/service-card';

interface ServicesProps { }


const serviceItems: ServiceCardProps[] = [
    {
        imgUrl: "/service-1.png",
        title: "СЕРВИС ОБОРУДОВАНИЯ",
        description: "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......"
    },
    {
        imgUrl: "/service-2.png",
        title: "РЕГИСТРАЦИИ",
        description: "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......"
    },
    {
        imgUrl: "/service-3.png",
        title: "УСЛУГИ ЛОГИСТИКИ",
        description: "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......"
    },
]

const Services: React.FC<ServicesProps> = () => {

    return (
        <div className={cls.wrapper}>
            <Title label='УСЛУГИ' />
            <div className={cls.serviceTypes}>
                {serviceItems.map((item) => (
                    <ServiceCard {...item} />
                ))}
            </div>
        </div>
    )


}

export default Services;