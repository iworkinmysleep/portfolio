import React from "react";
import styled from "styled-components";
import resumePdf from "../../images/resume2021.pdf";
import Iframe from "react-iframe";

const ResumeWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: calc(100vh - 80px);
	background-color: #1f2833;
	overflow: hidden;
`;

const Resume = () => {
	return (
		<ResumeWrapper id="resume">
			<Iframe src={resumePdf} height='80%' width='80%' />
		</ResumeWrapper>
	);
};

export default Resume;
