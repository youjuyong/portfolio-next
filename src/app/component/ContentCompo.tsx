
import styles from "../../css/layout.module.css";
import localFont from "next/font/local";
import { Intro_Profile, JavaScript, React, NextJs, Html, SpringBoot, NodeJs, TypeScript, Css, Github, AwsImage , Vercel } from "../component/ImageCompo";
import { Intro_Down }    from "../component/ImageCompo";
import { Content_Title_Div } from "./ClientComponent/StyledCompo";

const pretendard = localFont({
    src : "../../fonts/Pretendard-Regular.woff",
    display : "swap",
    weight : "45 920",
    variable: "--font_pretend"
});

interface content_title {
    title : string,
    id : string,
    margintop : string
}
export function Content_Title (props :  content_title) {
    return (
        <Content_Title_Div margintop={props.margintop} id={props.id}>
            <p>{props.title}</p>
        </Content_Title_Div>
    )
}

export const Intro = () => {
    return (
        <div className={`${styles.intro_layout} ${pretendard.className} intro`}>
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
        <div className={`${styles.intro_detail_1} ${pretendard.className}`}>
            <dl>
                <dt></dt>
                <dd>
                    <p>HTML 웹 표준을 준수합니다.</p>
                    <p>웹 접근성 심사 인증 경험과 항목에 대한 이해를 가지고 있습니다. </p>
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


export const Career = () => {
    return (
        <div className={`${styles.careerDiv} ${pretendard.className}`}>
              <div className={styles.carrerInner}>
                    <div className={styles.carrerInnerLectang}></div>
                    <ul>
                        <li><p className={styles.carrerInnerTang}></p><span>TEST1</span></li>
                        <li><p className={styles.carrerInnerTang}></p><span>TEST2</span></li>
                        <li><p className={styles.carrerInnerTang}></p><span>TEST3</span></li>
                    </ul>
              </div>
        </div>
    )
}

export const Skill = () => {
    return (
        <div className={`${styles.skillDiv} ${pretendard.className}`}>
            <div className={styles.skillInner}>
                <section>
                    <p>1. COMMON</p>
                    <Github></Github><AwsImage></AwsImage><Vercel></Vercel>
                </section>
                <section>
                    <p>2. FRONT</p>
                    <JavaScript></JavaScript><React></React><NextJs></NextJs><Html></Html><NodeJs></NodeJs><TypeScript></TypeScript><Css></Css>
                </section>
                <section>
                    <p>3. BACK</p>
                    <SpringBoot></SpringBoot>
                </section>
            </div>
        </div>
    )
}