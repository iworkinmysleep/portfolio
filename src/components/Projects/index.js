import React from "react";
import howTo from "../../images/howTo.png";
import puterStuff from "../../images/puterstuff.png";
import gitHubSmall from "../../images/github-sm.png";
import {
	ProjectsContainer,
	ProjectsH1,
	ProjectsWrapper,
	ProjectsCard,
	ProjectsIcon,
	ProjectsH2,
	ProjectsP,
	ProjectsGitHub,
	GitHubLink,
} from "./ProjectsElements";

const Projects = () => {
	return (
		<ProjectsContainer id="projects">
			<ProjectsH1>Some of my work</ProjectsH1>
			<ProjectsWrapper>
				<ProjectsCard>
					<ProjectsIcon src={puterStuff} />
					<ProjectsH2>PuterStuff</ProjectsH2>
					<ProjectsP>
						Full stack eCommerce app built with MERN stack. <br/>{" "}
						<a target="blank" href="https://puterstuff.herokuapp.com/">
							View Project
						</a>
					</ProjectsP>
					<GitHubLink
						target="_blank"
						href="https://github.com/iworkinmysleep/mern-ecommerce">
						<ProjectsGitHub src={gitHubSmall} alt="github" />
					</GitHubLink>
				</ProjectsCard>
				<ProjectsCard>
					<ProjectsIcon src={howTo} />
					<ProjectsH2>How-To</ProjectsH2>
					<ProjectsP>
						A simple app that allows users to view, add, update, and delete life
						hacks. (back end developer)
					</ProjectsP>
					<GitHubLink
						target="_blank"
						href="https://github.com/Build-Week-LS-How-To/back-end">
						<ProjectsGitHub src={gitHubSmall} alt="github" />
					</GitHubLink>
				</ProjectsCard>
			</ProjectsWrapper>
		</ProjectsContainer>
	);
};

export default Projects;
