"use client"
import {  memo } from "react";

interface headerType {
    title : string
}

interface scrollType {
    top : number,
    behavior : ScrollBehavior | undefined
}

const HeaderNavCompo = ( props : headerType ) => {

    const liClickHandler = ( e : any ) : void=> {
    
        const target = e.target.innerText;
        
        const location = document.querySelector('#' + target) as HTMLElement;

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
        <li><a onClick={(e) => liClickHandler(e)}>{props.title}</a></li>
    )
}

const HeaderNav = memo(HeaderNavCompo);
export default HeaderNav;