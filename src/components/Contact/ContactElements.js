import styled from "styled-components";

export const ContactContainer = styled.div`
	color: #fff;
	background: ${({ lightBg }) => (lightBg ? " #c5c6c7" : "#0b0c10")};

	@media screen and (max-width: 768px) {
		padding: 100px 0;
	}
`;

export const ContactWrapper = styled.div`
	display: grid;
	z-index: 1;
	height: 860px;
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
			imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
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
`


export const Heading = styled.h1`
	margin-bottom: 24px;
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
	margin-bottom: 15px;
	font-size: 18px;
	line-height: 1.4;
	color: ${({ darkText }) => (darkText ? " #fff" : "#000")};
`;


export const ImgWrap = styled.div ` 
max-width: 555px;
height: 100%;
`

export const Img = styled.img ` 
width: 100%;
margin:0 0 10px 0;
padding-right: 0;
`

export const ContactForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
`
export const ContactLabel = styled.label`
display: flex;
flex-direction: column;
color: #0b0c10;
`
export const ContactInput = styled.input`
width: 300px;
padding: 5px;
margin: 0 0 10px 0;
border: 1px solid #66fcf1;
border-radius: 5px;
`

export const ContactTextArea = styled.textarea`
width: 300px;
padding: 5px;
margin: 0 0 10px 0;
border: 1px solid #66fcf1;
border-radius: 5px;
`