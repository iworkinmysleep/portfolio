import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll } from "react-scroll";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
	const [scroll, setScroll] = useState(false);
	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeNav);
	}, []);

	const toggleHome = () => {
		animateScroll.scrollToTop();
	};

	return (
		<>
			<Nav scroll={scroll}>
				<NavbarContainer>
					<NavLogo onClick={toggleHome}>JH</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks
								to="about"
								smooth={true}
								duration={800}
								spy={true}
								exact={"true"}
								offset={-80}>
								About
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to="projects"
								smooth={true}
								duration={800}
								spy={true}
								exact={"true"}
								offset={-80}>
								Projects
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to="resume"
								smooth={true}
								duration={800}
								spy={true}
								exact={"true"}
								offset={-80}>
								Resume
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to="contact"
								smooth={true}
								duration={800}
								spy={true}
								exact={"true"}
								offset={-80}>
								Contact
							</NavLinks>
						</NavItem>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
