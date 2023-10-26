import React from 'react';
import cls from "./style.module.scss"
import { Title } from '..';
import Image from 'next/image';
import Button from '../button/button';

interface CompanyProps { }

const Company: React.FC<CompanyProps> = () => {

    return (
        <div id='company' className={cls.wrapper}>
            <Title label='О КОМПАНИИ' />
            <div className={cls.content}>
                <Image src="/company-img.png" alt='company-img' width={450} height={450} />
                <div className={cls.textWrap}>
                    <p>Группа компаний MEDOL создавалась высококвалифицированными специалистами в сфере медицины, инженерии и экономики, за плечами которых значительный опыт на рынке высоких медицинских технологий, которая имеет свои представительства в разных уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online Services". Цель компании построить прозрачный долгосрочный бизнес, принести пользу обществу путем развития и внедрения передовых технологий в систему здравоохранения Республики Узбекистан. </p>
                    <Button label='Узнать больше' />
                </div>
            </div>
        </div>
    )

}

export default Company;