import styled from "styled-components";

export const HeroContainer = styled.div`
	background: #0b0c10;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 30px;
	height: 800px;
	position: relative;
	z-index: 1;
`;

export const HeroBg = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background-image: linear-gradient(
		to bottom,
		#0b0c10,
		#121419,
		#171b21,
		#1b212a,
		#1f2833
	);
`;

export const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	mix-blend-mode: overlay;
`;

export const HeroContent = styled.div`
	z-index: 3;
	max-width: 1200px;
	position: absolute;
	padding: 8px 24px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (max-width: 480px) {
		flex-wrap: wrap;
	}
`;

export const HeroIntro = styled.p`
	color: #fff;
	font-size: 2rem;
	@media screen and (max-width: 768px) {
		font-size: 40px;
	}
	@media screen and (max-width: 480px) {
		font-size: 16px;
	}
`;
export const HeroName = styled.span`
	display: inline-block;
	color: #66fcf1;
	font-size: 3rem;
	font-weight: bold;
	letter-spacing: 2px;
	text-align: center;
	margin-left: 15px;
	animation: skew 2s infinite;
	transform: skew(1deg);
	animation-direction: alternate;
	opacity: 0.7;

	@keyframes skew {
		0% {
			transform: skew(1deg, 1deg);
		}
		100% {
			transform: skew(-1deg, -1deg)
		}
	}

	@media screen and (max-width: 768px) {
		font-size: 40px;
	}
	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;
export const HeroP = styled.p`
	color: #fff;
	font-size: 2rem;
	text-align: center;
	font-weight: lighter;

	@media screen and (max-width: 768px) {
		font-size: 20px;
	}
	@media screen and (max-width: 480px) {
		font-size: 16px;
	}
`;

export const HeroBtnWrapper = styled.div`
	margin-top: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
