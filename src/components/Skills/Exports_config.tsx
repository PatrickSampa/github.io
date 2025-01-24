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
import logoPrisma from "../../assets/prisma.png";

type Logos = {
  xpath: string;
  name: string;
};

export const LogosToExport: Logos[] = [
  { xpath: logoJavascript, name: "JS" },
  { xpath: logoTypescript, name: "TS" },
  { xpath: logoJava, name: "Java" },
  { xpath: logoCss, name: "CSS" },
  { xpath: logoPHtml, name: "HTML" },
  { xpath: logoNode, name: "Node" },
  { xpath: logoNext, name: "Next" },
  { xpath: logoReact, name: "React" },
  { xpath: logoNest, name: "Nest" },
  { xpath: logoSpring, name: "Spring" },
  { xpath: logoPrisma, name: "Prisma" },
  { xpath: logoGit, name: "Git" },
  { xpath: logoGithub, name: "Github" },
  { xpath: logoPostgres, name: "PostgreSQL" },
  { xpath: logoMysql, name: "Mysql" },
];
