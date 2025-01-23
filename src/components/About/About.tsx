import * as Styled from "./styled.about";
import patrick from "../../assets/patrick.jpeg";

export const About = () => {
  return (
    <Styled.AboutWrapper id="about-section">
      <Styled.DivAbout>
        <Styled.DivAboutText>
          <Styled.DivAboutTextTitle>
            <Styled.TextAbout>{"<AboutMe/>"}</Styled.TextAbout>
            <Styled.AboutTextLine />
          </Styled.DivAboutTextTitle>
          <Styled.TextAboutDescription
            color="white"
            fontSize="1.1rem"
            width="80%"
            lineHeight="25px"
            fontWeight="400"
          >
            Hello! My name is Patrick. I am a web developer and digital visual
            artist. I love creating things that exist on the internet. My
            interest in web development started in 2020 when I decided to create
            an app for my friends’ online store.
          </Styled.TextAboutDescription>
          <Styled.TextAboutDescription
            color="white"
            fontSize="1.1rem"
            width="80%"
            lineHeight="25px"
            fontWeight="400"
          >
            Instead of creating an online Concept Art website, I started to
            enjoy web development. Creating custom things for the web has taught
            me a lot about design and development!
          </Styled.TextAboutDescription>
          <Styled.TextAboutDescription
            color="white"
            fontSize="1.1rem"
            width="80%"
            lineHeight="25px"
            fontWeight="400"
          >
            My main focus these days is building interesting and creative web
            apps, I like coding things from scratch and I like bringing ideas to
            life in the browser.
          </Styled.TextAboutDescription>
        </Styled.DivAboutText>
        <Styled.DivAboutImageWrapper>
          <Styled.DivAboutImage src={patrick} />
        </Styled.DivAboutImageWrapper>
      </Styled.DivAbout>
    </Styled.AboutWrapper>
  );
};
