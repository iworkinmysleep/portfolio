import React from "react";
import {FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa'
import {
	FooterContainer,
	FooterWrap,
	SocLinksContainer,
	SocLinksWrapper,
	SocLinkItems,
	SocLinkTitle,
	SocLink,
	CopyRight,
} from "./FooterElements";

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrap>
				<SocLinksContainer>
					<SocLinksWrapper>
						<SocLinkTitle>Socials</SocLinkTitle>
						<SocLinkItems>
							<SocLink to="#"><FaGithub size={32}/></SocLink>
							<SocLink to="#"><FaLinkedin size={32}/></SocLink>
							<SocLink to="#"><FaFacebook size={32}/></SocLink>
						</SocLinkItems>
					</SocLinksWrapper>
				</SocLinksContainer>
				<CopyRight>&copy; {(new Date().getFullYear())} Jason Hinton</CopyRight>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
