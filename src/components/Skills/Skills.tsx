import * as Styled from "./styled.skills";
import { TeckStack } from "./teck_stack";
import logoJavascript from "../../assets/jslogo.png";
import logoJava from "../../assets/java-logo.png";
import logoPHtml from "../../assets/htmllogo.png";
import logoNext from "../../assets/nextlogo.png";
import logoNode from "../../assets/node.png";
import logoSpring from "../../assets/spring.png";
import logoReact from "../../assets/reactlogo.png";
import logoCss from "../../assets/csslogo.png";
import logoGit from "../../assets/gitlogo.png";
import logoGithub from "../../assets/githublogo.png";
import logoPostgres from "../../assets/postgree.png";
import logoMysql from "../../assets/mysql.png";
import logoTypescript from "../../assets/typescript.png";
import logoNest from "../../assets/nest.png";

export const Skills = () => {
  return (
    <Styled.SkillsWrapper id="skills-section">
      <Styled.TextTitle>
        {"<Skills/>"} <Styled.AboutTextLine />
      </Styled.TextTitle>
      <Styled.TeckListWrapper>
        <TeckStack src={logoJavascript} />
        <TeckStack src={logoTypescript} />
        <TeckStack src={logoJava} />
        <TeckStack src={logoCss} />
        <TeckStack src={logoPHtml} />
        <TeckStack src={logoNode} />
        <TeckStack src={logoReact} />
        <TeckStack src={logoNext} />
        <TeckStack src={logoSpring} />
        <TeckStack src={logoNest} />
        <TeckStack src={logoPostgres} />
        <TeckStack src={logoMysql} />
        <TeckStack src={logoGit} />
        <TeckStack src={logoGithub} />
      </Styled.TeckListWrapper>
    </Styled.SkillsWrapper>
  );
};
