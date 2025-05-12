import Image from "next/image";
import { Header_Layout, Root_Layout, Content_Layout } from "../app/component/LayOutCompo";
import { Intro, IntroDown, IntroDetail, Skill, Project } from "./component/ContentCompo";
import "../css/globals.css";
import "../css/header.css";
import "../css/var.css";
import "../css/mobile.css";

export default function Home( {children} : any) {
  return (
    <Root_Layout>
      <Header_Layout/>
      <Content_Layout>
          <Intro></Intro>
      </Content_Layout>
      <Content_Layout>
          <IntroDetail></IntroDetail>
      </Content_Layout>
      <Content_Layout>
          <IntroDown></IntroDown>
      </Content_Layout>
      <Content_Layout>
          <Skill></Skill>
      </Content_Layout>
      <Content_Layout>
          <Project></Project>
      </Content_Layout>
    </Root_Layout>
  );
}
