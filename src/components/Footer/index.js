import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import {
	FooterContainer,
	FooterWrap,
	SocLinksContainer,
	SocLinksWrapper,
	SocLinkItems,
	SocLink,
	CopyRight,
} from "./FooterElements";

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrap>
				<SocLinksContainer>
					<SocLinksWrapper>
						<SocLinkItems>
							<SocLink
								href="//www.github.com/iworkinmysleep"
								target="_blank"
								aria-label="Github">
								<FaGithub size={32} />
							</SocLink>
							<SocLink
								href="//www.linkedin.com/in/jason-hinton"
								target="_blank"
								aria-label="Linkedin">
								<FaLinkedin size={32} />
							</SocLink>
							<SocLink href="/" target="_blank" aria-label="Facebook">
								<FaFacebook size={32} />
							</SocLink>
						</SocLinkItems>
					</SocLinksWrapper>
				</SocLinksContainer>
				<CopyRight>&copy; {new Date().getFullYear()} Jason Hinton</CopyRight>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
