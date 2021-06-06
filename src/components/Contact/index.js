import React, { useState } from "react";


import {
	ContactContainer,
	ContactWrapper,
	ContactRow,
	Column1,
	Column2,
	TextWrapper,
	FormWrapper,
	FormButton,
	ContactForm,
	ContactLabel,
	ContactInput,
	ContactTextArea,
	Heading,
	SubTitle,
	ImgWrap,
	Img,
} from "./ContactElements";

const Contact = ({
	lightBg,
	id,
	imgStart,
	lightText,
	headline,
	darkText,
	description,
	img,
	alt,
}) => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

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
									<FormButton onClick={handleSubmit}>submit</FormButton>
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
			</ContactContainer>
		</>
	);
};

export default Contact;
