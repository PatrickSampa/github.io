import styled, { keyframes } from "styled-components";

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
  marginTop?: string;
};

export const AboutWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivAbout = styled.div`
  width: 60%;
  height: 80%;
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
  margin-top: 0.3rem;
`;

const slideUp = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const DivAboutImage = styled.img`
  width: 60%;
  height: 50%;
  border-radius: 50%;
  margin-bottom: 7rem;
  animation: ${slideUp} 0.5s ease-out forwards;
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
  margin-top: ${({ marginTop }) => marginTop || ""};

  /* opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity ${({ opacityNumber }) => opacityNumber} ease-in-out,
    transform ${({ transformNumber }) => transformNumber} ease-in-out;
  transition-delay: ${({ transitionDelayNumber }) => transitionDelayNumber};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(100%)"}; */
`;

type ButtonUploadProps = {
  backgroundColor?: string;
  borderRadius?: string;
  border?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
  margin?: string;
  cursor?: string;
  hoverBackgroundColor?: string;
};

export const ButtonUpload = styled.button<ButtonUploadProps>`
  width: 45px;
  height: 40px;
  background: linear-gradient(82.3deg, #965de9 10.8%, #6358ee 94.3%);
  border-radius: ${({ borderRadius }) => borderRadius || ""};
  border: ${({ border }) => border || ""};
  color: ${({ color }) => color || ""};
  font-size: ${({ fontSize }) => fontSize || ""};
  font-weight: ${({ fontWeight }) => fontWeight || ""};
  padding: ${({ padding }) => padding || ""};
  margin: ${({ margin }) => margin || ""};
  cursor: ${({ cursor }) => cursor || ""};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 0.3s;
  position: relative;
  &:hover {
    transform: scale(1.05);
    width: 100px;
    border-radius: 40px;
    gap: 1rem;
    span {
      opacity: 1;
      position: relative;
    }
  }
`;

export const ButtonUploadText = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  opacity: 0;
  transition-duration: 0.2s;
  position: absolute;
`;
