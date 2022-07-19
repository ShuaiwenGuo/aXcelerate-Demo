import Navbar from './components/Navbar';
import styled from 'styled-components';
import Logo from '../../assets/new_logo_light.svg';
import { color } from '../../styles/variables';
const { primaryColor } = color;

const NavContainer = styled.section`
    width: 100%;
    background-color: ${primaryColor};
`;

const ContentWrapper = styled.div`
    max-width: 1020px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const LogoWrapper = styled.div`
    justify-content: center;
    width: 40%;
`;

const Header = () => {
    return (
        <NavContainer>
            <ContentWrapper>
                <LogoWrapper><img src={Logo} alt="ligtht-color logo"/></LogoWrapper>
                <Navbar />
            </ContentWrapper>
        </NavContainer>
    )

}

export default Header;