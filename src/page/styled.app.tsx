import styled from "styled-components";

type WrapperProps = {
  backgroundColor?: string;
};

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  flex-direction: column;
`;
