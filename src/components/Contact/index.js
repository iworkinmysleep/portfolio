import React, { useState } from "react";
import emailjs from "emailjs-com";
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
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"emmysdad71213@gmail.com",
				"template_7ifbl46",
				e.target,
				"user_s2ctR0D7OD87gRYp6gtJv"
			)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));

		setName("");
		setEmail("");
		setMessage("");

		setDisplayText(true);
	};

	// const handleChange = (e) => {
	// 	setInfo({ ...info, [e.target.name]: e.target.value });
	// };

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
											value={name}
											onChange={(e) => setName(e.target.value)}></ContactInput>
									</ContactLabel>
									<ContactLabel htmlFor="email">
										Email
										<ContactInput
											placeholder="email"
											type="email"
											name="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}></ContactInput>
									</ContactLabel>
									<ContactLabel htmlFor="message">
										Message
										<ContactTextArea
											placeholder="message"
											name="message"
											value={message}
											onChange={(e) =>
												setMessage(e.target.value)
											}></ContactTextArea>
									</ContactLabel>
									<FormButton type="submit">submit</FormButton>
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
