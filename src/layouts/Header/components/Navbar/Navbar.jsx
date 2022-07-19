import styled from 'styled-components';

import { color } from '../../../../styles/variables';
import { NavList } from '../../../../constants/navItem';

const { textWhiteColor, textGreyColor, secondaryColor } = color;

const NavContainer = styled.div`
	align-items: center;
    width: 60%;
`;

const ContentWrapper = styled.div`
    display: flex;
	align-items: center;
	justify-content: space-between;
`;

const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 390px;
`;

const NavItem = styled.a`
    color: ${textWhiteColor};
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        color: ${textGreyColor}
    }
`;

const DemoWrapper = styled.a`
    background-color: ${secondaryColor};
    color: ${textWhiteColor};
    width: 175px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius:30px;
    font-size: 14px;
    font-weight: bold;
    -webkit-transition: width 0.5s;
    transition: width 0.5s;
    &:hover {
        width: 200px;
    }
`;

const Arrow = styled.span`
    vertical-align: top;
    margin: 0 5px;
    display: none;
    ${DemoWrapper}:hover & {
        display: inline-block;
        transition: 1s;
    }
`;

const Navbar = () => {
	return (
        <NavContainer>
            <ContentWrapper>
                <NavWrapper>
                    { NavList.map(item => 
                        <NavItem key={item.key}>
                            {item.item}
                        </NavItem>) 
                    }
                </NavWrapper>
                <DemoWrapper>
                    Request a demo
                    <Arrow>→</Arrow>
                </DemoWrapper>
            </ContentWrapper>
        </NavContainer>
	);
};

export default Navbar;