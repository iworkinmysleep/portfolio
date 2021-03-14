import React from "react";
import Video from "../../video/rain-on-glass.mp4";
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroIntro,
	HeroName,
	HeroP,
	HeroBtnWrapper,
} from "./HeroElements";
import {Button} from '../BtnElements'

const Hero = () => {
	return (
		<HeroContainer id="home">
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
			</HeroBg>
			<HeroContent>
				<HeroIntro>
					Hi, I'm<HeroName>Jason Hinton</HeroName>
				</HeroIntro>
				<HeroP>I am a full stack web developer</HeroP>
				<HeroBtnWrapper>
					<Button to="about">Learn More</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default Hero;
