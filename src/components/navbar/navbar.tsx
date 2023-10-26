"use client";
import React from 'react';
import cls from "./style.module.scss"
import Image from 'next/image';
import Link from 'next/link';
import { Select } from 'antd';
import cx from "classnames"

interface NavbarProps {
    handleShowSidebar?: () => void;
}

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

const Navbar: React.FC<NavbarProps> = ({ handleShowSidebar }) => {



    return (
        <div className={cls.wrapper}>
            <div className={cls.left}>
                <div className={cls.itemsWrap}>
                    <div className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/map.svg" alt='map' width={20} height={20} />
                        </div>
                        <p>г.Ташкент, Чиланзар <br />
                            10 квартал, дом 3/1</p>
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
                    <div className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/search.svg" alt='search' width={20} height={20} />
                        </div>
                    </div>
                    <div className={cls.item}>
                        <Link href="#">
                            <div className={cls.child}>
                                <Image src="/facebook.svg" alt='facebook' width={20} height={20} />
                                <p>Мы на Facebook</p>
                            </div>
                        </Link>
                    </div>
                    <div className={cls.item}>
                        <div className={cls.child}>
                            <Select
                                defaultValue="ru"
                                // className={cls.languageSelector}
                                style={{ width: 120, }}
                                onChange={handleChange}
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
                    <div className={cls.item}>
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