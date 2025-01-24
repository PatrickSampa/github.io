import * as Styled from "./styled.skills";

type TeckStackProps = {
  src: string;
  title: string;
};

export const TeckStack = ({ src, title }: TeckStackProps) => {
  return (
    <Styled.TeckList>
      <Styled.TitleImage>{title}</Styled.TitleImage>
      <Styled.ImageTeck src={src} alt="teckstack" />
    </Styled.TeckList>
  );
};
