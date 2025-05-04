import styles from "../../css/layout.module.css";
import localFont from "next/font/local";

import { Header_Log } from "./ImageCompo";

const pretendard = localFont({
    src : "../../fonts/Pretendard-Regular.woff",
    display : "swap",
    weight : "45 920",
    variable: "--font_pretend"
});

export function Header_Layout () {
    return (
        <header className = { pretendard.className } id="header">
            <div className = { styles.header_inner } >
                <div className = { styles.header_logo }>
                    <Header_Log></Header_Log>
                </div>
                <nav className = { styles.header_nav } role="navigation" aria-label='헤더 메뉴'>
                    <ul className = { styles.header_nav_ul }>
                        <li><a>소개</a></li>
                        <li><a>경력</a></li>
                        <li><a>지향목표</a></li>
                        <li><a>서브프로젝트</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

// Root 레이아웃
export function Root_Layout ( { children } : any ) {
    return (
        <div id="root">{children}</div>
    )
}

// 컨텐트 레이아웃
export function Content_Layout ( { children } : any ) {
    return (
        <div className={styles.content_layout}>
            {children}
        </div>
    )
}