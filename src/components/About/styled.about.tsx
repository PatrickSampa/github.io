import styled from "styled-components";

export type ParagraphProps = {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  wordSpacing?: string;
  textAlign?: string;
  textTransform?: string;
  textDecoration?: string;
  textShadow?: string;
  textDecorationColor?: string;
  textDecorationStyle?: string;
  textDecorationThickness?: string;
  width?: string;
  height?: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  backgroundColor?: string;
  isVisible?: boolean;
  opacityNumber?: string;
  transformNumber?: string;
  transitionDelayNumber?: string;
};

export const AboutWrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivAbout = styled.div`
  width: 60%;
  height: 60%;
  margin-top: 10rem;
  display: flex;
`;

export const DivAboutText = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const DivAboutTextTitle = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AboutTextLine = styled.p`
  width: 300px;
  height: 1px;
  background-image: linear-gradient(90deg, #b0f3f1, #ffcfdf);
  display: flex;
  margin-top: 0.5rem;
`;

export const DivAboutImage = styled.img`
  width: 60%;
  height: 70%;
  border-radius: 50%;
`;

export const DivAboutImageWrapper = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextAbout = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  height: 100%;
  display: flex;
  align-items: center;
  font-family: "Fira Code", monospace;
  font-weight: 500;
  background-image: linear-gradient(90deg, #b0f3f1, #ffcfdf);
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-size: 1.8rem;
`;

export const TextAboutDescription = styled.p<ParagraphProps>`
  font-size: ${({ fontSize }) => fontSize || ""};
  font-weight: ${({ fontWeight }) => fontWeight || ""};
  color: ${({ color }) => color || ""};
  line-height: ${({ lineHeight }) => lineHeight || ""};
  word-spacing: ${({ wordSpacing }) => wordSpacing || ""};
  text-align: ${({ textAlign }) => textAlign || ""};
  text-transform: ${({ textTransform }) => textTransform || ""};
  text-decoration: ${({ textDecoration }) => textDecoration || ""};
  text-shadow: ${({ textShadow }) => textShadow || ""};
  text-decoration-color: ${({ textDecorationColor }) =>
    textDecorationColor || ""};
  text-decoration-style: ${({ textDecorationStyle }) =>
    textDecorationStyle || ""};
  text-decoration-thickness: ${({ textDecorationThickness }) =>
    textDecorationThickness || ""};
  background-color: ${({ backgroundColor }) => backgroundColor || ""};
  width: ${({ width }) => width || ""};
  height: ${({ height }) => height || ""};
  display: ${({ display }) => display || ""};
  flex-direction: ${({ flexDirection }) => flexDirection || ""};
  justify-content: ${({ justifyContent }) => justifyContent || ""};
  align-items: ${({ alignItems }) => alignItems || ""};

  /* opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity ${({ opacityNumber }) => opacityNumber} ease-in-out,
    transform ${({ transformNumber }) => transformNumber} ease-in-out;
  transition-delay: ${({ transitionDelayNumber }) => transitionDelayNumber};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(100%)"}; */
`;
