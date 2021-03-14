import React from "react";
import {
	AboutContainer,
	AboutWrapper,
	AboutRow,
	Column1,
	Column2,
	TextWrapper,
	TopLine,
	Heading,
	SubTitle,
	ImgWrap,
	Img,
} from "./AboutElements";


const About = ({
	lightBg,
	id,
	imgStart,
	topLine,
	lightText,
	headline,
	darkText,
	description,
	img,
	alt,
}) => {
	return (
		<>
			<AboutContainer lightBg={lightBg} id={id}>
				<AboutWrapper>
					<AboutRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>{headline}</Heading>
								<SubTitle darkText={darkText}>{description}</SubTitle>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={img} alt={alt} />
							</ImgWrap>
						</Column2>
					</AboutRow>
				</AboutWrapper>
			</AboutContainer>
		</>
	);
};

export default About;
