import Image from "next/image";
import { Header_Layout, Root_Layout, Content_Layout } from "../app/component/LayOutCompo";
import { Intro, IntroDown, IntroDetail, Skill, Content_Title } from "./component/ContentCompo";
import { Project } from "../app/component/ClientComponent/Project";
import "../css/globals.css";
import "../css/header.css";
import "../css/var.css";
import "../css/mobile.css";
import "../css/__modalCss.css";

export default function Home( {children} : any) {
  return (
    <Root_Layout>
      <Header_Layout/>
      <Content_Layout>
          <Content_Title title="INTRO" id={"INTRO"} margintop={'80px'}></Content_Title>
          <Intro></Intro>
      </Content_Layout>
      <Content_Layout>
          <IntroDetail></IntroDetail>
      </Content_Layout>
      <Content_Layout>
          <IntroDown></IntroDown>
      </Content_Layout>
      <Content_Layout>
          <Content_Title title="SKILL" id={"SKILL"} margintop={'0px'}></Content_Title>
          <Skill></Skill>
      </Content_Layout>
      <Content_Layout>
          <Content_Title title="PROJECT" id={"PROJECT"} margintop={'0px'}></Content_Title>
          <Project></Project>
      </Content_Layout>
    </Root_Layout>
  );
}
