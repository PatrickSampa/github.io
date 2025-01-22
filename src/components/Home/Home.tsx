import * as Styled from "./styled.home";
import { ThemeProvider } from "../../Global/Theme";

export const Home = () => {
  return (
    <Styled.HomeWrapper id="home-section">
      <Styled.Context>
        <Styled.Text
          fontSize="2.3rem"
          fontWeight="700"
          color={ThemeProvider.colors.primary}
          wordSpacing="1rem"
        >
          {"Welcome(); I'm"}
        </Styled.Text>
        <Styled.Text
          fontSize="4rem"
          fontWeight="800"
          color={ThemeProvider.colors.secondary}
          wordSpacing="1rem"
          isKeyframes={true}
          keyframesColors={{
            colorTertiary: ThemeProvider.colors.tertiary,
            colorPrimary: ThemeProvider.colors.quaternary,
            colorSecondary: ThemeProvider.colors.quinary,
            colorQuaternary: ThemeProvider.colors.senary,
          }}
        >
          Patrick Sampaio
        </Styled.Text>
        <Styled.Text
          fontSize="4rem"
          fontWeight="700"
          color={ThemeProvider.colors.primary}
        >
          I am Full Stack Web Developer
        </Styled.Text>
        <Styled.Paragraph
          width="80%"
          fontSize="1.3rem"
          fontWeight="600"
          color="#ddd"
        >
          Web Developer with experience in Digital Conceptual Arts, Frontend
          Design. Passionate about fun UIs, collaboration, and product creation.
        </Styled.Paragraph>
        <Styled.Paragraph
          width="80%"
          fontSize="1.3rem"
          fontWeight="600"
          color="#ddd"
        >
          I value simple content structures, clean design patterns, and
          thoughtful interactions.
        </Styled.Paragraph>
      </Styled.Context>
    </Styled.HomeWrapper>
  );
};
