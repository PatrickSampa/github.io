export type TextProps = {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  wordSpacing?: string;
  lineHeight?: string;
  isKeyframes?: boolean;
  keyframesColors?: colorsKeyframes;
  isVisible?: boolean;
  opacityNumber?: string;
  transformNumber?: string;
  transitionDelayNumber?: string;
  fontSizeMobile?: string;
};

export type colorsKeyframes = {
  colorPrimary: string;
  colorSecondary: string;
  colorTertiary: string;
  colorQuaternary: string;
};

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

export type LinkProps = {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  wordSpacing?: string;
  textAlign?: string;
  textTransform?: string;
  textDecoration?: string;
  textDecorationColor?: string;
  textDecorationStyle?: string;
  textDecorationThickness?: string;
  backgroundColor?: string;
  paddingMobile?: string;
};

export type ButtonProps = {
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  wordSpacing?: string;
  textAlign?: string;
  textTransform?: string;
  textDecoration?: string;
  textDecorationColor?: string;
  textDecorationStyle?: string;
  textDecorationThickness?: string;
  width?: string;
  height?: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  transition?: string;
  border?: string;
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderRadius?: string;
  borderRadiusTopLeft?: string;
  borderRadiusTopRight?: string;
  borderRadiusBottomLeft?: string;
  borderRadiusBottomRight?: string;
  padding?: string;
  margin?: string;
  cursor?: string;
  backgroundImage?: string;
  opacity?: string;
  hover?: HoverProps;
  isHover?: boolean;
  rotate?: boolean;
  left?: string;
  top?: string;
  position?: string;
  right?: string;
  bottom?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
  paddingMobile?: string;
};

export type HoverProps = {
  transform?: string;
  opacity?: string;
};

export type ImageProps = {
  width?: string;
  height?: string;
  backgroundSize?: string;
  rotate?: boolean;
  cursor?: string;
  border?: string;
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderRadius?: string;
  color?: string;
  backgroundColor?: string;
  opacity?: string;
};
