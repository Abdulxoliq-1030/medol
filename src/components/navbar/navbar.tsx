"use client";
import React, { useState } from 'react';
import cls from "./style.module.scss"
import Image from 'next/image';
import Link from 'next/link';
import { Select } from 'antd';
import cx from "classnames"
import { Modal, Input } from 'antd';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { translationsRu, translationsUz } from "../../i18n/i18n";

interface NavbarProps {
    handleShowSidebar?: () => void;
}

i18n.use(initReactI18next).init({
    resources: {
        uz: { translation: translationsUz },
        ru: { translation: translationsRu },
    },
    lng: "ru",
    fallbackLng: "ru",
    interpolation: { escapeValue: false },
});


const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

const Navbar: React.FC<NavbarProps> = ({ handleShowSidebar }) => {

    const [inputValue, setInputValue] = useState("")

    const [isModalOpen, setIsModalOpen] = useState(false);

    const { t, i18n } = useTranslation();

    const handleChangeLanguage = (value: string) => {
        i18n.changeLanguage(value)
    };



    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleChangeValue = (value: string) => {
        setInputValue(value)
    }


    return (
        <div className={cls.wrapper}>
            <Modal title={t("search")} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input onChange={(e) => handleChangeValue(e.target.value)} placeholder="поиск..." />
            </Modal>
            <div className={cls.left}>
                <div className={cls.itemsWrap}>
                    <div className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/map.svg" alt='map' width={20} height={20} />
                        </div>
                        <p>{t("address")}<br />
                            {t("houseAddress")}</p>
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
                </div>
            </div>
            <div className={cls.center}>
                <Image className={cls.desktopLogo} src="/logo.svg" alt='logo' width={180} height={58} />
                <Image className={cls.mediaLogo} src="/logo.svg" alt='logo' width={130} height={58} />
            </div>
            <div className={cls.right}>
                <div className={cls.itemsWrap}>
                    <div style={{ cursor: "pointer" }} onClick={showModal} className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/search.svg" alt='search' width={20} height={20} />
                        </div>
                    </div>
                    <div className={cls.item}>
                        <Link href="#">
                            <div className={cls.child}>
                                <Image src="/facebook.svg" alt='facebook' width={20} height={20} />
                                <p>{t("facebook")}</p>
                            </div>
                        </Link>
                    </div>
                    <div className={cls.item}>
                        <div className={cls.child}>
                            <Select
                                defaultValue="ru"
                                // className={cls.languageSelector}
                                style={{ width: 120, }}
                                onChange={handleChangeLanguage}
                                options={[
                                    { value: 'uz', label: <span className={cls.flags}>🇺🇿 <span style={{ fontSize: 14 }}>O'zbek</span></span> },
                                    { value: 'ru', label: <span className={cls.flags}>🇷🇺 <span style={{ fontSize: 14 }}>Русский</span></span> },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cls.mediaRight}>
                <div className={cls.itemsWrap}>
                    <div className={cx([cls.item, cls.hiddenMobile])}>
                        <div className={cls.imgWrap}>
                            <Image src="/map.svg" alt='map' width={20} height={20} />
                        </div>
                    </div>
                    <div className={cls.item}>
                        <Link href="tel: +998 71 276-62-53">
                            <div className={cls.child}>
                                <Image src="/phone.svg" alt='phone' width={20} height={20} />
                            </div>
                        </Link>
                    </div>
                    <div className={cx([cls.item, cls.hiddenMobile])}>
                        <div className={cls.imgWrap}>
                            <Image src="/search.svg" alt='search' width={20} height={20} />
                        </div>
                    </div>

                    <div className={cls.item}>
                        <div className={cls.languageChild}>
                            <Select
                                defaultValue="ru"
                                onChange={handleChange}
                                className={cls.languageController}
                                options={[
                                    { value: 'uz', label: <span className={cls.flags}>🇺🇿</span> },
                                    { value: 'ru', label: <span className={cls.flags}>🇷🇺</span> },
                                ]}
                            />
                        </div>
                    </div>
                    <div style={{ cursor: "pointer" }} className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image onClick={handleShowSidebar} src="/bar.svg" alt='bar' width={20} height={20} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Navbar;