import React from "react";
import howTo from "../../images/howTo.png";
import puterStuff from "../../images/puterstuff.png";
import telenet from "../../images/telenet-data.png";
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
	ProjectLink,
} from "./ProjectsElements";

const Projects = () => {
	return (
		<ProjectsContainer id="projects">
			<ProjectsH1>some of my work...</ProjectsH1>
			<ProjectsWrapper>
				<ProjectsCard>
					<ProjectsIcon src={puterStuff} />
					<ProjectsH2>PuterStuff</ProjectsH2>
					<ProjectsP>
						Full stack eCommerce app built with MERN stack. <br />{" "}
						<ProjectLink
							target="blank"
							href="https://puterstuff.herokuapp.com/">
							View Project
						</ProjectLink>
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
				<ProjectsCard>
					<ProjectsIcon src={telenet} />
					<ProjectsH2>Telenet-Data</ProjectsH2>
					<ProjectsP>
						I built this app after I was tasked with taking inventory notes in a
						Word document at my current job. <br />
						<ProjectLink
							target="blank"
							href="https://telenet-data.herokuapp.com/">
							View Project
						</ProjectLink>
					</ProjectsP>
					<GitHubLink
						target="_blank"
						href="https://github.com/iworkinmysleep/telenet">
						<ProjectsGitHub src={gitHubSmall} alt="github" />
					</GitHubLink>
				</ProjectsCard>
			</ProjectsWrapper>
		</ProjectsContainer>
	);
};

export default Projects;
