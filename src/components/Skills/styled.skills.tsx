import styled from "styled-components";

export const SkillsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;
`;

export const DivSkillsTitle = styled.div`
  width: 60%;
  height: 10%;
`;

export const TextTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  height: 100%;
  display: flex;
  font-family: "Fira Code", monospace;
  font-weight: 500;
  background-image: linear-gradient(90deg, #b0f3f1, #ffcfdf);
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-size: 1.8rem;
  width: 60%;
  height: 10%;
  align-items: center;
  margin-top: 6rem;
  gap: 1rem;

  @media screen and (max-width: 1300px) {
    width: 80%;
    height: 80%;
  }

  @media screen and (max-width: 1000px) {
    width: 90%;
    height: 90%;
  }
`;

export const AboutTextLine = styled.p`
  width: 300px;
  height: 1px;
  background-image: linear-gradient(90deg, #b0f3f1, #ffcfdf);
  display: flex;
  margin-top: 0.3rem;
`;

export const TeckListWrapper = styled.div`
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  margin-top: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  width: 60%;
  margin-bottom: 2rem;
  @media screen and (max-width: 1300px) {
    width: 80%;
    height: 80%;
  }

  @media screen and (max-width: 500px) {
    gap: 20px;
  }
`;

//tecklist

export const TeckList = styled.div`
  width: 140px;
  height: 140px;
  justify-content: center;
  border-radius: 30px;
  border: 1px solid #292929;
  position: relative;
  align-items: center;
  display: flex;
  background-image: linear-gradient(
    to bottom right,
    #1a1a29,
    rgba(27, 27, 40, 0)
  );

  &:hover {
    span {
      opacity: 1;
    }
  }

  @media screen and (max-width: 380px) {
    width: 120px;
    height: 120px;
  }
`;

export const ImageTeck = styled.img`
  width: 100%;
  height: 100%;
`;

export const TitleImage = styled.span`
  position: absolute;
  background: linear-gradient(to bottom right, #1a1a29, rgba(27, 27, 40, 0));
  border: 1px solid #292929;
  padding: 5px 10px;
  border-radius: 5px;
  justify-content: center;
  transition-duration: 1s;
  pointer-events: none;
  letter-spacing: 0.5px;
  font-size: 1rem;
  backdrop-filter: blur(5px);
  font-weight: 500;
  color: #fff;
  top: -20px;
  opacity: 0;
`;

export const TitleStacks = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  font-weight: 500;
  background-image: linear-gradient(90deg, #b0f3f1, #ffcfdf);
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  margin-top: 3rem;
`;
