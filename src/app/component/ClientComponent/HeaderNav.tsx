"use client"
import {  memo, useState, useEffect } from "react";
import { Header_Log } from "../ImageCompo";
import styles from "../../../css/layout.module.css";
import localFont from "next/font/local";

const pretendard = localFont({
    src : "../../../fonts/Pretendard-Regular.woff",
    display : "swap",
    weight : "45 920",
    variable: "--font_pretend"
});

interface headerType {
    title : string
}

interface scrollType {
    top : number,
    behavior : ScrollBehavior | undefined
}

const HeaderNavCompo = ( props : headerType ) => {

    const liClickHandler = ( e : any ) : void => {
    
        const target = e.target.innerText;
        
        const location = document.querySelector('#' + target) as HTMLElement;

        if ( location !== null ) 
        {

            const option : scrollType = {
                     top : location.offsetTop - 100,
                behavior : 'smooth'
            }

            window.scrollTo(option);

        }
    }

    return (
        <li onClick={(e) => liClickHandler(e)}><a>{props.title}</a></li>
    )
}



export function Header_Layout_CP () {
    const [mobileMode, setMobileMode] = useState( false );

    const mobileClickHandle = ( v : boolean ) => {
        setMobileMode(v);
    }

    useEffect(() => {
        window.addEventListener('resize',() => {
            debounce(resize, 100);
        });

        function resize () {
            if ( window.innerWidth >= 1430 ) 
            {
                setMobileMode(false);
            }
        }
    },[]);

    return (
        <header className = { pretendard.className } id="header">
            <div className = { styles.header_inner } >
                <div className = { styles.header_logo }>
                    <Header_Log></Header_Log>
                </div>
                {      mobileMode === true  ?  <button className={`${styles.mobile_btn} ${styles.mobile_cancle_btn}`} onClick={() => mobileClickHandle(false)}></button>
                     : mobileMode === false ?  <button className={ styles.mobile_btn }                                onClick={() => mobileClickHandle(true)}></button>
                     : ''
                }
                {
                      mobileMode === true ? <nav className = { styles.header_mobile_nav } role="navigation" aria-label='헤더 메뉴'>
                                                <ul>
                                                    <HeaderNavCompo title="INTRO"></HeaderNavCompo>
                                                    <HeaderNavCompo title="CAREER"></HeaderNavCompo>
                                                    <HeaderNavCompo title="SKILL"></HeaderNavCompo>
                                                    <HeaderNavCompo title="PROJECT"></HeaderNavCompo>
                                                </ul>
                                            </nav>  
                    : mobileMode ===false ? <nav className = { styles.header_nav } role="navigation" aria-label='헤더 메뉴'>
                                                <ul className = { styles.header_nav_ul }>
                                                    <HeaderNavCompo title="INTRO"></HeaderNavCompo>
                                                    <HeaderNavCompo title="CAREER"></HeaderNavCompo>
                                                    <HeaderNavCompo title="SKILL"></HeaderNavCompo>
                                                    <HeaderNavCompo title="PROJECT"></HeaderNavCompo>
                                                </ul>
                                            </nav> 
                    : ''
                }
              
            </div>
        </header>
    );
}

let timeoutId : any;
const debounce = (func : any, delay : number) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        func();
    }, delay);
};


const Header_Layout = memo(Header_Layout_CP);
export default Header_Layout;