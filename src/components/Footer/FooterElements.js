import styled from "styled-components";

export const FooterContainer = styled.footer`
	background-color: #0b0c10;
`;
export const FooterWrap = styled.div`
	padding: 10px 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1100px;
	margin: 0 auto;
`;
export const SocLinksContainer = styled.div`
	display: flex;
	justify-content: center;
`;
export const SocLinksWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const SocLinkItems = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 16px;
	text-align: center;
	width: 200px;
	box-sizing: border-box;
	color: #fff;

	@media screen and (max-width: 420px) {
		margin: 0;
		padding: 10px;
		width: 100%;
	}
`;
export const SocLinkTitle = styled.h1`
	font-size: 16px;
	color: #45a29e;
`;
export const SocLink = styled.a`
	color: #fff;
	text-decoration: none;
	margin-bottom: 0.5rem;
	padding: 10px;
	transition: all 0.6s ease-in-out;

	&:hover {
		color: #c5c5c7;
		transition: 0.3s ease-out;
		transform: translateY(5px);
	}
`;
export const CopyRight = styled.small`
	margin-bottom: 16px;
	text-align: center;
	color: #45a29e;
`;
