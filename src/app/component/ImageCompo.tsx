'use client'

import Image from "next/image";
import { useState } from "react";
import img from "../../../public/images/header_logo.png";
import profile from "../../../public/images/photo1.png";
import cake from "../../../public/images/cake.png";
import intro_down from "../../../public/images/intro_down.png";
import intro_down_fover from "../../../public/images/intro_down_fover.png";

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

export const Intro_Down = (props : any) => {
    const [ishovered, setIsHovered] = useState(false);

    return (
        <div 
             className={props.className}
        >
            <span   onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
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