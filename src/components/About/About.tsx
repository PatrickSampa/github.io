import * as Styled from "./styled.about";

export const About = () => {
  return (
    <Styled.AboutWrapper id="about-section">
      <Styled.DivAbout>
        <Styled.DivAboutText>
          <Styled.DivAboutTextTitle>
            <Styled.TextAbout>{"<AboutMe/>"}</Styled.TextAbout>
            <Styled.AboutTextLine />
          </Styled.DivAboutTextTitle>
        </Styled.DivAboutText>
      </Styled.DivAbout>
    </Styled.AboutWrapper>
  );
};
