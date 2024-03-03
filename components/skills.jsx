import React, { useRef } from "react";
import {
  StyledHorizontalLine,
  StyledSectionContainer,
  Title,
} from "./commonComponents";
import styled from "styled-components";
import SkillsContainer from "./skillsContainer";
import { SkillsList } from "@/common/constant";

const StyledSkillTopContainers = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
}));

const Skills = () => {
  return (
    <StyledSectionContainer id="skills" bgcolor="#f6f2f2">
      <StyledSkillTopContainers>
        <Title type="h3" capitalize center fontType="1">
          My skills
        </Title>
        {SkillsList?.map((Skill, index) => (
          <>
            <SkillsContainer skills={Skill} />
            {SkillsList?.length - 1 == index ? null : (
              <StyledHorizontalLine width="20%" />
            )}
          </>
        ))}
      </StyledSkillTopContainers>
    </StyledSectionContainer>
  );
};

export default Skills;
