import styled, { keyframes, css } from "styled-components";

type TextProps = {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  wordSpacing?: string;
  lineHeight?: string;
  isKeyframes?: boolean;
  keyframesColors?: colorsKeyframes;
};

type colorsKeyframes = {
  colorPrimary: string;
  colorSecondary: string;
  colorTertiary: string;
  colorQuaternary: string;
};

type ParagraphProps = {
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
};

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Context = styled.div`
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 10rem;
`;

const createColorChangeAnimation = (
  keyframesColors?: colorsKeyframes
) => keyframes<colorsKeyframes>`
  0%, 100% {
    color: ${keyframesColors?.colorPrimary};
  }
  33% {
    color: ${keyframesColors?.colorSecondary};
  }
  66% {
    color: ${keyframesColors?.colorTertiary};
  }
  99% {
    color: ${keyframesColors?.colorQuaternary};
  }
`;

export const Text = styled.h1<TextProps>`
  font-size: ${({ fontSize }) => fontSize || ""};
  font-weight: ${({ fontWeight }) => fontWeight || ""};
  color: ${({ color }) => color || ""};
  word-spacing: ${({ wordSpacing }) => wordSpacing || ""};
  line-height: ${({ lineHeight }) => lineHeight || ""};

  ${({ isKeyframes, keyframesColors }) =>
    isKeyframes &&
    css`
      animation: ${createColorChangeAnimation(keyframesColors)} 3.5s infinite;
    `}
`;

export const Paragraph = styled.p<ParagraphProps>`
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
`;
