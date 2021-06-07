import styled from "styled-components";

export const ContactContainer = styled.div`
	color: #fff;
	background: ${({ lightBg }) => (lightBg ? " #c5c6c7" : "#0b0c10")};
	height: calc(100vh - 82px);

	@media screen and (max-width: 768px) {
		height: 850px;
	}
`;

export const ContactWrapper = styled.div`
	display: grid;
	z-index: 1;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-content: center;
`;

export const ContactRow = styled.div`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: ${({ imgStart }) =>
		imgStart ? `'col2 col1'` : `'col1 col2'`};

	@media screen and (max-width: 768px) {
		grid-template-areas: ${({ imgStart }) =>
			imgStart ? `'col2' 'col1'` : `'col2 col2' 'col1 col1'`};
	}
`;

export const Column1 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col1;
`;

export const Column2 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col2;
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	padding-bottom: 20px;
`;

export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;
export const FormButton = styled.button`
	display: block;
	background: transparent;
	color: #45a29e;
	border: 1px solid #45a29e;
	width: 200px;
	padding: 10px;
	font-size: 20px;
	text-align: center;
	cursor: pointer;

	&:hover {
			border: 1px solid #66fcf1;
	}
`;

export const Heading = styled.h1`
	margin: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	color: ${({ lightText }) => (lightText ? " #fff" : " #45a29e")};

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;

export const SubTitle = styled.p`
	max-width: 440px;
	margin-bottom: 10px;
	font-size: 16px;
	line-height: 1.4;
	color: ${({ darkText }) => (darkText ? " #fff" : "#000")};
`;

export const ImgWrap = styled.div`
	max-width: 555px;
	height: 100%;

`;

export const Img = styled.img`
	width: 100%;
	margin: 0 0 10px 0;
	padding-right: 0;
	
	
`;

export const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px;
`;
export const ContactLabel = styled.label`
	display: flex;
	flex-direction: column;
	color: #0b0c10;
`;
export const ContactInput = styled.input`
	width: 300px;
	padding: 5px;
	margin: 0 0 10px 0;
	border: 1px solid #66fcf1;
	border-radius: 5px;
`;

export const ContactTextArea = styled.textarea`
	width: 300px;
	padding: 5px;
	margin: 0 0 10px 0;
	border: 1px solid #66fcf1;
	border-radius: 5px;
`;

export const ThanksText = styled.h2`
	font-size: 1.5rem;
	width: 50%;
	color: #000;
	margin: 10px auto;
	padding: 20px;
	opacity: 0.9;
	border-radius: 5px;
	text-align: center;
`
