
import styles from "../../css/layout.module.css";
import localFont from "next/font/local";
import { Intro_Profile, JavaScript, React, NextJs, Html, SpringBoot, NodeJs, TypeScript, Css, Github, AwsImage , Vercel } from "../component/ImageCompo";
import { Intro_Down, Career_Img }    from "../component/ImageCompo";
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
                                    <span>Name  &nbsp;&nbsp;&nbsp;  : 유주용</span>
                                    <span>Age&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    : 1992. 05. 18</span>
                                    <span>Phone &nbsp;&nbsp; : 010-2966-3366</span>
                                    <span>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   : dbwndyd518@gmail.com</span>
                                    <span>Github&nbsp;&nbsp;&nbsp;  : <a href="https://github.com/youjuyong">https://github.com/youjuyong</a></span>
                                </div>
                            </dd>
                        </dl>
                </div>
            </article>
            <article className={styles.intro_art2}>
                <div className={styles.intro_art2_div}>
                    <h1>천천히 꾸준하게 쌓아가자</h1>
                    <p>안녕하세요. 항상 새로움을 추구하고  &nbsp;
                           <span>'사용자 중심'</span>&nbsp;의 인터페이스를 구현하는 
                    </p> 
                    <p>프론트엔드 개발자 유주용입니다.</p>
                    <p>새로운 기술들을 배워가며 사용자에게 효율적으로 데이터를 보여주고 </p>
                    <p>사용자의 요구사항을 충족시키기 위해 끊임없이 고민하는 개발자입니다.</p>
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
                    <p>검색 엔진 최적화(SEO)를 지향합니다.</p>
                    <p>지연 로딩을 사용하여 검색엔진 최적화와 사용자 경험(UX)을 향상 시키는것을 지향합니다.</p>
                    <p>Styled.Component를 사용하여 재사용 가능한 디자인 설계를 추구합니다.</p>
                </dd>
            </dl>
            <dl>
                <dt></dt>
                <dd>
                    <p>XSS 공격, SQL Injection 공격 등 웹사이트 보안 취약점 항목을 이해하고 있습니다.</p>
                </dd>
            </dl>
            <dl>
                <dt></dt>
                <dd>
                    <p>서버 API의 데이터 처리, 원활한 의사소통을 통해 사용자에게 효율적인 데이터를 표출할 수 있습니다.</p>
                    <p>자바스크립트 이벤트 루프, 클로저, ES6 문법, 프로토 타입을 이해하고 적용할 수 있습니다.</p>
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
                    <div className={styles.carrerInner_1}><Career_Img></Career_Img></div>
                    <div className={styles.carrerInner_2}>
                        <p className={styles.careerInner_p}>라온텍 ( 2022. 07 ~ )</p>
                        <ul>
                            <li><p className={styles.carrerInnerTang}></p><span>BIT 관제 모니터링 프로그램 개발 ( React, SpringBoot )</span></li>
                            <li><p className={styles.carrerInnerTang}></p><span>교통 정보 통계, 소통정보 상황판 개발  </span></li>
                        </ul>
                    </div>
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
                    <Github></Github><AwsImage></AwsImage>
                </section>
                <section>
                    <p>2. FRONT</p>
                    <JavaScript></JavaScript><React></React><NextJs></NextJs><Html></Html><TypeScript></TypeScript><Css></Css>
                </section>
                <section>
                    <p>3. BACK</p>
                    <SpringBoot></SpringBoot><NodeJs></NodeJs>
                </section>
            </div>
        </div>
    )
}

export const Certificate = () => {
    return (
        <div className={`${styles.careerDiv} ${pretendard.className}`}>
              <div className={styles.carrerInner}>
                    <div className={`${styles.carrerInnerLectang} ${styles.certificateLectang}`}></div>
                    <ul>
                        <li><p className={styles.carrerInnerTang}></p><div><span>2021. 06 JLPT N2</span></div></li>
                        <li><p className={styles.carrerInnerTang}></p><div><span>2022. 11 컴퓨터 활용능력 2급</span></div></li>
                        <li><p className={styles.carrerInnerTang}></p><div><span>2022. 07 정보처리기사</span></div></li>
                    </ul>
              </div>
        </div>
    );
}