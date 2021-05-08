import React from "react";
import Footer from "../Footer";
import {
	ContactContainer,
	ContactWrapper,
	ContactRow,
	Column1,
	Column2,
	TextWrapper,
	FormWrapper,
	ContactForm,
	ContactLabel,
	ContactInput,
	ContactTextArea,
	Heading,
	SubTitle,
	ImgWrap,
	Img,
} from "./ContactElements";
import { Button } from "../BtnElements";

const Contact = ({
	lightBg,
	id,
	imgStart,
	lightText,
	buttonLable,
	headline,
	darkText,
	description,
	img,
	alt,
}) => {
	return (
		<>
			<ContactContainer lightBg={lightBg} id={id}>
				<ContactWrapper>
					<ContactRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<Heading lightText={lightText}>{headline}</Heading>
								<SubTitle darkText={darkText}>{description}</SubTitle>
							</TextWrapper>
							<FormWrapper>
								<ContactForm>
									<ContactLabel htmlFor="name">
										Name
										<ContactInput placeholder="name" type="text"></ContactInput>
									</ContactLabel>
									<ContactLabel htmlFor="email">
										Email
										<ContactInput
											placeholder="email"
											type="email"></ContactInput>
									</ContactLabel>
									<ContactLabel htmlFor="message">
										Message
										<ContactTextArea placeholder="message"></ContactTextArea>
									</ContactLabel>
									<Button>submit</Button>
								</ContactForm>
							</FormWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={img} alt={alt} />
							</ImgWrap>
						</Column2>
					</ContactRow>
				</ContactWrapper>
				<Footer />
			</ContactContainer>
		</>
	);
};

export default Contact;
