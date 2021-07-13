import React from "react";
import howTo from "../../images/howTo.png";
import puterStuff from "../../images/puterstuff2.png";
import telenet from "../../images/telenet-data2.png";
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
						Full stack eCommerce app built with MERN stack. User auth using JWT.  Admin users have crud functionality with products and users.<br />{" "}
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
						hacks. (back end developer) Node, Express, Knex, SQLite
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
						I built this small app to help solve a problem for a telecom company that needed to keep inventory notes. React, Node, Express, MongoDB Bootstrap <br />
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
