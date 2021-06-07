import React, { useState } from "react";
import { FaGrin, FaLaughWink } from "react-icons/fa";

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
	ThanksText,
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
	const [displayText, setDisplayText] = useState(false);
	const [info, setInfo] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		setInfo({ name: "", email: "", message: "" });
		setDisplayText(true);
	};

	const handleChange = (e) => {
		setInfo({ ...info, [e.target.name]: e.target.value });
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
								<ContactForm onSubmit={handleSubmit}>
									<ContactLabel htmlFor="name">
										Name
										<ContactInput
											placeholder="name"
											type="text"
											name="name"
											value={info.name}
											onChange={handleChange}></ContactInput>
									</ContactLabel>
									<ContactLabel htmlFor="email">
										Email
										<ContactInput
											placeholder="email"
											type="email"
											name="email"
											value={info.email}
											onChange={handleChange}></ContactInput>
									</ContactLabel>
									<ContactLabel htmlFor="message">
										Message
										<ContactTextArea
											placeholder="message"
											name="message"
											value={info.message}
											onChange={handleChange}></ContactTextArea>
									</ContactLabel>
									<FormButton onClick={handleSubmit}>submit</FormButton>
								</ContactForm>
							</FormWrapper>
							{displayText && (
								<ThanksText>
									<FaLaughWink
										style={{
											color: "#eef058",
											background: "#000",
											borderRadius: "50%",
										}}
									/>{" "}
									Thank you!{" "}
									<FaGrin
										style={{
											color: "#eef058",
											background: "#000",
											borderRadius: "50%",
										}}
									/>
									<br />
									<small>I'll be in touch soon!</small>
								</ThanksText>
							)}
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
