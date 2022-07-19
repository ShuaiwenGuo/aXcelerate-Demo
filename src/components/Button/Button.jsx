import styled, { css }  from "styled-components";
import { color } from "../../styles/variables";

const { buttonColor, whiteColor, textGreyColor, shadowColor } = color;

const buttonTheme = (theme) => {
	switch (theme) {
		case 'primary':
			return css`
				background-color: ${buttonColor};
				color: ${whiteColor};
                box-shadow: 0 0 20px 0 ${shadowColor};
                :hover {
                    background-color: ${whiteColor};
                    color: ${buttonColor};
                }
			`;
		case 'white':
			return css`
				background-color: ${whiteColor};
				color: ${buttonColor};
                box-shadow: 0 0 20px 0 ${shadowColor};
                :hover {
                    background-color: ${buttonColor};
                    color: ${whiteColor};
                }
			`;
		default:
			return css`
				background-color: ${whiteColor};
				color: ${textGreyColor};
                box-shadow: 0 0 20px 0 ${shadowColor};
                :hover {
                    background-color: ${buttonColor};
                    color: ${whiteColor};
                }
			`;
	}
};

const StyledButton = styled.button`
	align-items: center;
	border: none;
	border-radius: 5px;
	display: inline-flex;
    font-size: 14px;
    font-weight: bold;
	justify-content: center;
	outline: none;
	padding: 15px;
    width: 200px;
	white-space: nowrap;
    cursor: pointer;
	${({ theme }) => buttonTheme(theme)};

	&:hover {
		transition: 0.5s;
	}
`;

const Button = props => {
	const { onClick, children, theme = 'primary' } = props;
	return (
		<StyledButton
			theme={theme}
			onClick={onClick}
		>
			{children}
		</StyledButton>
	);
};

export default Button;
