'use client'

import styles from "../../../css/layout.module.css";
import { Project_GuriDaek } from "../../component/ImageCompo";
import { Project_Modal_Cp } from "../modal/ProjectModal";
import { useState } from "react";

type modalType = {
    modalValue : boolean,
    modalName : string
}

export const Project = () => {
    const [modal, setModal] = useState({ modalValue : false, modalName : ''});

    const modalProject = ( data : modalType ) => {
        if ( data.modalValue === true ) 
        {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        setModal({ modalValue : data.modalValue, modalName : data.modalName });
    }
    return (
        <>
        <Project_Modal_Cp  modalBoolean={modal.modalValue}
                        setModalIsOpen={modalProject}>
                            <GuriDaeck_Container setModal={modalProject}></GuriDaeck_Container>
                         
        </Project_Modal_Cp>
            <div className={`${styles.projectItemsDiv}`} >
                <div className={styles.items}>
                    <ul>
                        <li onClick={() => modalProject({ modalValue : true, modalName : 'guridaek' } )}>
                            <div className={styles.items_div}>
                                <span className={styles.items_div_span_01}>
                                        <Project_GuriDaek></Project_GuriDaek>
                                </span>
                                <span className={styles.items_div_span_02}>
                                    <a className={styles.items_div_span_02_a}></a>
                                    <span className={styles.items_div_span_02_span}>구리댁닷컴</span>
                                </span>
                                <span className={styles.items_div_span_03}>
                                    <span>2024.02 ~ 2024.05</span>
                                </span>
                                <span className={styles.items_div_span_04}>
                                    <span>군주온라인 정보사이트</span>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
      </>
    )
}
 
type Container_type = {
    setModal : (e : modalType) => void,
}
const GuriDaeck_Container = ( props : Container_type ) => {
     
     return (
                <div className="modal-dialog popup_bitplus" role="document">
                    <div className="modal-content">
                         <div className="modal-header">
                            <h2>구리댁닷컴</h2>
                             <button type="button" className="close" data-dismiss="modal" onClick={() => {
                                props.setModal({ modalValue : false, modalName : '' })
                            }}>닫기</button>
                         </div>
                         <div className="horse_popcontent">

                        </div>
                    </div>
                </div>

     )
}