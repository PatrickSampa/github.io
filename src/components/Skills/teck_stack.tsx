import * as Styled from "./styled.skills";

type TeckStackProps = {
  src: string;
};

export const TeckStack = ({ src }: TeckStackProps) => {
  return (
    <Styled.TeckList>
      <Styled.ImageTeck src={src} />
    </Styled.TeckList>
  );
};
