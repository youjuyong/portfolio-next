'use client'

import styles from "../../../css/layout.module.css";
import { Project_Content_Image_Div } from "./StyledCompo";
import { Project_GuriDaek } from "../../component/ImageCompo";
import { Project_Subway } from "../../component/ImageCompo";
import { Project_Modal_Cp } from "../modal/ProjectModal";
import { Project_Section_Layout } from "../LayOutCompo";
import { Project_GuriDaek_Img1, Project_GuriDaek_Img2, Project_Erd_Png, SubWay_img1, SubWay_img2, SubWay_img3, SubWay_img4 } from "../ImageCompo";
import { useState } from "react";

type modalType = {
    modalValue : boolean,
    modalName : string
}

// 프로젝트
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
                     {
                      modal.modalName === 'guridaek' ? <GuriDaeck_Container setModal={modalProject}></GuriDaeck_Container> :
                      modal.modalName === 'subway'   ? <Subway_Container setModal={modalProject}></Subway_Container> :
                      ''
                     }
                         
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
                                    <span>2025.02 ~ 2025.05</span>
                                </span>
                                <span className={styles.items_div_span_04}>
                                    <span>군주온라인 정보사이트</span>
                                </span>
                            </div>
                        </li>
                         <li onClick={() => modalProject({ modalValue : true, modalName : 'subway' } )}>
                            <div className={styles.items_div}>
                                <span className={styles.items_div_span_01}>
                                        <Project_Subway></Project_Subway>
                                </span>
                                <span className={styles.items_div_span_02}>
                                    <a className={styles.items_div_span_02_a}></a>
                                    <span className={styles.items_div_span_02_span}>뉴맵</span>
                                </span>
                                <span className={styles.items_div_span_03}>
                                    <span>2025.05 ~ </span>
                                </span>
                                <span className={styles.items_div_span_04}>
                                    <span>지하철 도착 정보 어플리케이션</span>
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
// 모달 컨테이너
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
                         <div className={styles.project_content}>
                            <Project_Section_Layout>
                                <h1>프로젝트 소개<a href="https://guridaek.com">( https://guridaek.com )</a></h1>   
                                    <Project_Content_Image_Div height={"300px"} marginleft="0px">
                                        <Project_GuriDaek_Img1></Project_GuriDaek_Img1>
                                        <Project_GuriDaek_Img2></Project_GuriDaek_Img2>
                                    </Project_Content_Image_Div>
                                <div className={styles.project_content_inner_detail_div}>
                                    <p>
                                        온라인 RPG 게임 군주온라인 ( 정보, 마을 관리 ) 사이트 입니다. 한창 즐겨 했던 온라인 게임 에서 새로운 주민, 초보자들에게 장비 대여 또는 게임정보를 
                                        알려주기 위한 목적으로 만든 사이트입니다.
                                    </p>
                                </div>
                           </Project_Section_Layout>
                          <Project_Section_Layout>
                             <h1>프로젝트 기간</h1>
                             <div className={styles.project_content_inner_detail_div}>
                                    <p>
                                        2025.02.01 ~ 2025.05.01
                                    </p>
                             </div>
                          </Project_Section_Layout>
                          <Project_Section_Layout>

                          </Project_Section_Layout>
                           <Project_Section_Layout>
                                <h1>개발 환경</h1>
                                <div className={styles.project_content_inner_detail_div}>
                                    <p>FrontEnd : React, JavaScript</p>
                                    <p>BackEnd  : SpringBoot, JAVA, JPA</p>
                                    <p>DB : AWS RDS( Mysql 17)</p>
                                    <p>SSL : AWS Certificate Manager</p>
                                    <p>Front 배포 : AWS S3 Bucket</p>
                                    <p>BackEnd 배포 : AWS EC2 ( Ubuntu 16GB )</p>
                                    <p>Swagger API : <a href="https://api.guriguri.shop/api/swagger-ui/index.html">https://api.guriguri.shop/api/swagger-ui/index.html</a></p>
                                </div>
                           </Project_Section_Layout>
                          <Project_Section_Layout>
                             <h1>주요 기술</h1>
                             <div className={styles.project_content_inner_detail_div}>
                                    <p>JWT 웹토큰 기반 로그인</p>
                                    <p>로그인시 회원정보 Redux로 상태 보관</p>
                                    <p>React Node를 이용해 장비대여 가능 물품들 진열, 신청 기능</p>
                                    <p>React Intersection Observer 라이브러리로 viewport에 들어온 객체만 다운로드 (리소스 관리)</p>
                                    <p>에드센스 SEO 최적화를 위해 sitemap 자동 생성, 라우트 경로별 페이지 상세소개 metaTag 생성 </p>
                                    <p>React 차트로 주민수 통계 정보 표출</p>
                                    <p>React Swiper로 슬라이드 구현</p>
                             </div>
                          </Project_Section_Layout>
                          <Project_Section_Layout>
                             <h1>ERD</h1>
                             <Project_Content_Image_Div height={"780px"} marginleft="0px">
                                        <Project_Erd_Png></Project_Erd_Png>
                            </Project_Content_Image_Div>
                          </Project_Section_Layout>
                        </div>
                    </div>
                </div>
     )
}

const Subway_Container = (props : Container_type) => {

    return (
         <div className="modal-dialog popup_bitplus" role="document">
                    <div className="modal-content">
                         <div className="modal-header">
                            <h2>뉴맵</h2>
                             <button type="button" className="close" data-dismiss="modal" onClick={() => {
                                props.setModal({ modalValue : false, modalName : '' })
                            }}>닫기</button>
                         </div>
                         <div className={styles.project_content}>
                            <Project_Section_Layout>
                                <h1>프로젝트 소개</h1>   
                                    <Project_Content_Image_Div height={"300px"} marginleft={"90px"} >
                                        <Project_Subway></Project_Subway>
                                        <SubWay_img1></SubWay_img1>
                                        <SubWay_img2></SubWay_img2>
                                        <SubWay_img3></SubWay_img3>
                                         <SubWay_img4></SubWay_img4>
                                    </Project_Content_Image_Div>
                                <div className={styles.project_content_inner_detail_div}>
                                    <p>
                                        평소에 사용하던 지하철 앱에 로그인 기능과 즐겨찾기 기능이 없어 불편함을 느껴 자체 제작을 하게 되었습니다. 지하철 도착정보는 공공데이터 포탈 API를 사용하였고, 
                                        로그인 기능은 카카오 로그인 API와 네이버 API 를 사용 하였습니다. 
                                    </p>
                                </div>
                           </Project_Section_Layout>
                          <Project_Section_Layout>
                             <h1>프로젝트 기간</h1>
                             <div className={styles.project_content_inner_detail_div}>
                                    <p>
                                        2025.05 ~ 
                                    </p>
                             </div>
                          </Project_Section_Layout>
                          <Project_Section_Layout>

                          </Project_Section_Layout>
                           <Project_Section_Layout>
                                <h1>개발 환경</h1>
                                <div className={styles.project_content_inner_detail_div}>
                                    <p>FrontEnd : React Native, Android Studio</p>
                                    <p>BackEnd  : SpringBoot</p>
                                    <p>DB : AWS RDS</p>
                                </div>
                           </Project_Section_Layout>
                          <Project_Section_Layout>
                             <h1>주요 기능</h1>
                             <div className={styles.project_content_inner_detail_div}>
                                    <p>카카오, 네이버를 통한 로그인기능</p>
                                    <p>사람들이 자주 이용하는 노선 or 지하철 즐겨찾기 기능</p>
                             </div>
                          </Project_Section_Layout>
                        </div>
                    </div>
                </div>
    )
}