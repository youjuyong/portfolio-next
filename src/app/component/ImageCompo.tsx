'use client'

import Image from "next/image";
import { MouseEventHandler, useState } from "react";
import img from "../../../public/images/header_logo.png";
import profile from "../../../public/images/photo1.png";
import cake from "../../../public/images/cake.png";
import intro_down from "../../../public/images/intro_down.png";
import intro_down_fover from "../../../public/images/intro_down_fover.png";
import javascript from "../../../public/images/javascript-F7DF1E.svg";
import react from "../../../public/images/React-61DAFB.svg";
import nextJs from "../../../public/images/NextFir.svg";
import html from "../../../public/images/HTML-E34F26.svg";
import springboot from "../../../public/images/springboot-6DB33F.svg";
import nodeJsFir from "../../../public/images/nodeFir.svg";
import typeScript from "../../../public/images/typescript-3178C6.svg";
import css from "../../../public/images/css-663399.svg";
import github from "../../../public/images/github-181717.svg";
import aws from "../../../public/images/aws-232F3E.svg";
import vercel from "../../../public/images/vercel-232F3E.svg";
import grafImg from "../../../public/images/grafImg.jpg";

export const Header_Log = () => {
   
   return( 
        <Image
            src = {img}
            alt = "헤더 로고"
            height = "50"
            width = "150"
        ></Image>
    )

}

export const Intro_Profile = () => {

    return (
        <Image
            src = {profile}
            alt = "프로필"
            height = "200"
            width  = "200"
        >
        </Image>
    );
}

export const Profile_cake = () => {

    return (
        <Image
            src = { cake }
            alt = "프로필 케이크" 
            width = "20"
            height = "20"
        ></Image>
    )
}

interface scrollType {
    top : number,
    behavior : ScrollBehavior | undefined
}

export const Intro_Down = (props : any) => {
    const [ishovered, setIsHovered] = useState(false);

    const clickHandler = ( e : any) => {
        const location = document.querySelector('#SKILL') as HTMLElement;

        if ( location !== null ) 
        {

            const option:scrollType = {
                     top : location.offsetTop - 100,
                behavior : 'smooth'
            }

            window.scrollTo(option);

        }
    }

    return (
        <div 
             className={props.className}
        >
            <span   onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={(e) => clickHandler(e)}
            >
                <Image
                    src = { ishovered === true ? intro_down_fover : intro_down  }
                    alt = "아래로" 
                    width = "40"
                    height = "40"
                ></Image>
            </span>
        </div>
    )
}

export const JavaScript = () => {
    
    return (
        <Image src = {javascript}
               alt = "JavaScript"
               width = "140"
               height ="120"></Image>
    )
}

export const React = () => {
    
    return (
        <Image src = {react}
               alt = "React"
               width = "100"
               height ="80"></Image>
    )
}

export const NextJs = () => {
    
    return (
        <Image src = {nextJs}
               alt = "NextJs"
               width = "120"
               height ="80"></Image>
    )
}

export const Html = () => {
    
    return (
        <Image src={html}
              alt="Html"
                width = "100"
                height ="80">
        </Image>
    )
}

export const NodeJs = () => {
    
    return (
        <Image src={nodeJsFir}
                alt="nodeJs"
                width="110"
                height="80"></Image>
    )
}
export const SpringBoot = () => {
    
    return (
        <Image src = {springboot}
               alt = "springBoot"
             width = "140"
            height = "80"></Image>
    )
}

export const TypeScript = () => {
    return (
        <Image    src={typeScript}
                  alt="typeScript"
                width="130"
               height="80"
        ></Image>
    )
}

export const Css = () => {
    return (
        <Image src={css}
                alt="CSS"
                width="80"
                height="100">
        </Image>
    )
}

export const Github =() => {
    return (
        <Image src={github}
                alt="Github"
                width="100"
                height ="100">
        </Image>
    )
}

export const AwsImage = () => {
    return (
        <Image src={aws}
            width="100"
            height ="100"
            alt="AWS"></Image>
    )
}

export const Vercel = () => {
    return (
        <Image src={vercel}
            alt="vercel"
            width="100"
            height="80"></Image>
    )
}

export const Project_GuriDaek = () => {
    return (
        <Image src={grafImg}
               alt="구리댁닷컴"
               width="302"
               height="224"></Image>
    )
}