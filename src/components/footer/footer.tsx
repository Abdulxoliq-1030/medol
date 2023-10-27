"use client"
import React, { useState } from 'react';
import cls from "./style.module.scss"
import Image from 'next/image';
import Button from '../button/button';
import Link from 'next/link';
import { Modal, Input } from 'antd';
import Swal from "sweetalert2";
import { useTranslation } from 'react-i18next';

interface FooterProps { }

const { TextArea } = Input;


const Footer: React.FC<FooterProps> = () => {

    const { t } = useTranslation()


    const [inputValue, setInputValue] = useState({
        name: "",
        phone: "",
        theme: "",
        message: ""
    })
    const [isModalOpen, setIsModalOpen] = useState(false);


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        sendMessage()
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    function sendMessage() {
        try {
            Swal.fire({
                title: t("dialogText"),
                icon: "success"
            });
            setInputValue({ ...inputValue, name: "", phone: "" });
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Ошибка...",
                text: "Попробуйте еще раз.",
            });
        }
    }

    return (
        <div id='connect' className={cls.wrapper}>
            <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div style={{ display: "flex", flexDirection: "column", gap: 15, justifyContent: "center", alignItems: "center" }} >
                    <h2>Оставьте заявку</h2>
                    <Input onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })} placeholder="ФИО..." />
                    <Input type='number' onChange={(e) => setInputValue({ ...inputValue, phone: e.target.value })} placeholder="Номер телефона" />
                    <Input onChange={(e) => setInputValue({ ...inputValue, theme: e.target.value })} placeholder="Тема обращения" />
                    <TextArea onChange={(e) => setInputValue({ ...inputValue, message: e.target.value })} rows={4} placeholder="Сообщение" maxLength={6} />
                </div>
            </Modal>
            <div className={cls.contentWrap}>
                <div className={cls.contacts}>
                    <div className={cls.contactsTop}>
                        <h2>Контакты</h2>
                        <div className={cls.contactItems}>
                            <div className={cls.item}>
                                <div className={cls.imgWrap}>
                                    <Image src="/map.svg" alt='map' width={20} height={20} />
                                </div>
                                <p>г.Ташкент, Чиланзар <br />
                                    10 квартал, дом 3/1</p>
                            </div>
                            <div className={cls.item}>
                                <div className={cls.imgWrap}>
                                    <Image src="/mail.svg" alt='mail' width={20} height={20} />
                                </div>
                                <p>info@medol.uz  </p>
                            </div>
                        </div>
                        <div className={cls.contactItems}>
                            <div className={cls.item}>
                                <div className={cls.imgWrap}>
                                    <Image src="/phone.svg" alt='phone' width={20} height={20} />
                                </div>
                                <div className={cls.phoneNumbers}>
                                    <Link href="tel: +998 71 276-62-53">+998 71 276-62-53</Link>
                                    <Link href="tel: +998 71 276-62-54">+998 71 276-62-54</Link>
                                </div>
                            </div>
                            <div className={cls.item}>
                                <Button onclick={showModal} label='Оставить заявку' />
                            </div>
                        </div>
                    </div>
                    <div className={cls.companyAboutDesc}>
                        <Image src="/logo.svg" alt='logo' width={200} height={58} />
                        <p>Наша цель – построить прозрачный, долгосрочный бизнес, приносить огромную пользу населению, путем решения глобальных вопросов. Внедряя инновационные технологии на рынок Узбекистана.</p>
                    </div>
                </div>
                <div className={cls.aboutCompany}>
                    <ul className={cls.links}>
                        <li className={cls.linkTitle}>О Компании</li>
                        <li>
                            <Link href="/#">История</Link>
                        </li>
                        <li>
                            <Link href="/#">Партнеры</Link>
                        </li>
                        <li>
                            <Link href="/#">Вакансии</Link>
                        </li>
                    </ul>
                    <ul className={cls.links}>
                        <li className={cls.linkTitle}>Продукция</li>
                        <li>
                            <Link href="/#">Эндоваскулярная хирургия</Link>
                        </li>
                        <li>
                            <Link href="/#">Аритмология</Link>
                        </li>
                        <li>
                            <Link href="/#">Кардиохирургия</Link>
                        </li>
                        <li>
                            <Link href="/#">Лабораторная диагностика</Link>
                        </li>
                        <li>
                            <Link href="/#">Хирургия</Link>
                        </li>
                        <li>
                            <Link href="/#">Эндоурология</Link>
                        </li>
                        <li>
                            <Link href="/#">Нейрохирургия</Link>
                        </li>
                        <li>
                            <Link href="/#">Анестезиология и реанимация</Link>
                        </li>
                        <li>
                            <Link href="/#">Диабет</Link>
                        </li>

                    </ul>
                    <ul className={cls.links}>
                        <li className={cls.linkTitle}>Услуги</li>
                        <li>
                            <Link href="/#">Сервис</Link>
                        </li>
                        <li>
                            <Link href="/#">Регистрации</Link>
                        </li>
                        <li>
                            <Link href="/#">Услуги логистики</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cls.mobileFooter}>
                <Image src="/logo.svg" alt='logo' width={320} height={65} />
                <h4>Контакты</h4>
                <div className={cls.contactItems}>
                    <div className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/map.svg" alt='map' width={20} height={20} />
                        </div>
                        <p>г.Ташкент, Чиланзар <br />
                            10 квартал, дом 3/1</p>
                    </div>
                    <div className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/mail.svg" alt='mail' width={20} height={20} />
                        </div>
                        <p>info@medol.uz  </p>
                    </div>
                    <div className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/phone.svg" alt='phone' width={20} height={20} />
                        </div>
                        <div className={cls.phoneNumbers}>
                            <Link href="tel: +998 71 276-62-53">+998 71 276-62-53</Link>
                            <Link href="tel: +998 71 276-62-54">+998 71 276-62-54</Link>
                        </div>
                    </div>
                    <div className={cls.item}>
                        <Button label='Оставить заявку' />
                    </div>
                    <p>Наша цель – построить прозрачный, долгосрочный бизнес, приносить огромную пользу населению, путем решения глобальных вопросов. Внедряя инновационные технологии на рынок Узбекистана.</p>
                </div>
            </div>
            <div className={cls.footerBottom}>
                <span>© 2021 ООО «Medical Online Services»</span>
                <span className={cls.creator}>Сайт разработан компанией www<Link href="/#">.uz</Link></span>
            </div>
        </div>
    )
}

export default Footer;