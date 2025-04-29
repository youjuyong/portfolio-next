import Head from "next/head";
import { Children } from "react";
import styles from "../../css/layout.module.css";
import localFont from "next/font/local";

const pretendard = localFont({
    src : "../../fonts/Pretendard-Regular.woff",
    display : "swap",
    weight : "45 920",
    variable: "--font_pretend"
});

export function Header_Layout ({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <header>
            <div className={styles.header_inner}>
                {children}
            </div>
        </header>
    );
}
