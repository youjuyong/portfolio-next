
import styles from "../../css/layout.module.css";
import localFont from "next/font/local";
import { Intro_Profile } from "../component/ImageCompo";
import { Intro_Down }    from "../component/ImageCompo";

const pretendard = localFont({
    src : "../../fonts/Pretendard-Regular.woff",
    display : "swap",
    weight : "45 920",
    variable: "--font_pretend"
});

export const Intro = () => {
    return (
        <div className={`${styles.intro_layout} ${pretendard.className}`}>
            <article className={styles.intro_art1}>
                <div className={styles.intro_art1_div}>
                        <dl>
                            <dt>
                                <Intro_Profile></Intro_Profile>
                            </dt>
                            <dd>
                                <div className={styles.art1_Dd_profile}> 
                                    <span>Name  : 유주용</span>
                                    <span>Age   : 1992. 05. 18</span>
                                    <span>Phone : 010-2966-3366</span>
                                    <span>Email : dbwndyd518@gmail.com</span>
                                </div>
                            </dd>
                        </dl>
                </div>
            </article>
            <article className={styles.intro_art2}>
                <div className={styles.intro_art2_div}>
                    <h1>천천히 꾸준하게 발전하자</h1>
                    <p></p>
                    <p></p>
                </div>
            </article>
        </div>
    )
}

export const IntroDetail = () => {
    return (
        <div className={styles.intro_detail_1}>
            <dl>
                <dt></dt>
                <dd>
                    <p>HTML 웹 표준을 준수합니다.</p>
                    <p>웹 접근성 향상의 중요성과 항목에 대한 이해를 가지고 있습니다. </p>
                    <p>반응형 웹 페이지 디자인을 지향합니다.</p>
                </dd>
            </dl>
            <dl>
                <dt></dt>
                <dd>
                </dd>
            </dl>
            <dl>
                <dt></dt>
                <dd>
                </dd>
            </dl>
            <dl>
                <dt></dt>
                <dd>
                </dd>
            </dl>
        </div>
    )    
}

export const IntroDown = () => {

    return (
            <Intro_Down className={styles.introDown_div}></Intro_Down>
    )
}  
