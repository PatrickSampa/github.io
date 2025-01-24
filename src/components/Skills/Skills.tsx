import * as Styled from "./styled.skills";
import { TeckStack } from "./teck_stack";
import { LogosToExport } from "./Exports_config";

export const Skills = () => {
  return (
    <Styled.SkillsWrapper id="skills-section">
      <Styled.TextTitle>
        {"<Skills/>"}
        <Styled.AboutTextLine />
      </Styled.TextTitle>
      <Styled.TitleStacks>Teck Stacks</Styled.TitleStacks>
      <Styled.TeckListWrapper>
        {LogosToExport.map((logo) => (
          <TeckStack src={logo.xpath} title={logo.name} />
        ))}
      </Styled.TeckListWrapper>
    </Styled.SkillsWrapper>
  );
};
