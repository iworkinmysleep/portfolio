import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
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
		letter-spacing: 2px;
		border: 3px solid #66fcf1;
	}
`;
