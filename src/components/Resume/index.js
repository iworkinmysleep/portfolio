import React from "react";
import styled from "styled-components";
import resumeImg from "../../images/resume.jpg";

const ResumeWrapper = styled.div`
	display: flex;
  justify-content: center;
  align-items: center;
	background-color: #1f2833;
  overflow: hidden;
`;

const ResumeImg = styled.img`
max-width: 100%;
max-height: 100%;
flex-shrink: 0;
`
const Resume = () => {
	return (
		<ResumeWrapper id="resume">
			<ResumeImg src={resumeImg} alt="" />
		</ResumeWrapper>
	);
};

export default Resume;
