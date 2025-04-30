import Image from "next/image";
import img from "../../../public/images/header_logo.png";
import profile from "../../../public/images/test33.png";
import cake from "../../../public/images/cake.png";

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