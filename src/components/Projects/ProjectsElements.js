import styled from "styled-components";

export const ProjectsContainer = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #1f2833;

	@media screen and (max-width: 768px) {
		height: 1100px;
	}
	@media screen and (max-width: 480px) {
		height: 1300px;
	}
`;

export const ProjectsH1 = styled.h1`
	font-size: 48px;
	color: #45a29e;
	margin-bottom: 64px;

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`;

export const ProjectsWrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
	grid-gap: 16px;
	padding: 0 50px;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}
	@media screen and (max-width: 480px) {
		grid-template-columns: 1fr;
		padding: 0 20px;
	}
`;

export const ProjectsCard = styled.div`
	background: #f2ecff;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 5px;
	max-height: 340px;
	padding: 20px;
	box-shadow: 0 1px 3px rgba(255, 255, 255, 0.2);
	transition: all 0.3s ease-in;

	&:hover {
		transform: scale(1.01);
		transition: all 0.3s ease-in;
	}
`;

export const ProjectsIcon = styled.img`
	height: 160px;
	max-width: 100%;
	margin-bottom: 10px;
`;

export const ProjectsH2 = styled.h2`
	font-size: 1rem;
	margin-bottom: 10px;
`;

export const ProjectsP = styled.p`
	font-size: 1rem;
	text-align: center;
	margin-bottom: 10px;
`;

export const ProjectLink = styled.a`
	text-decoration: none;
	color: #1f2833;

	&:hover {
		border-bottom: 1px solid #66fcf1;
	}
`

export const ProjectsGitHub = styled.img`
	display: block;
	height: 20px;
	width: 20px;
`;

export const GitHubLink = styled.a `
display: block;
list-style: none;
&:hover {
	transform: scale(1.2);
	cursor: pointer;
}
`
