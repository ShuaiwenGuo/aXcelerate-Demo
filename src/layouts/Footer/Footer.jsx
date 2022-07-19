import styled from 'styled-components';
import { color } from '../../styles/variables';
import Solutions from './component/Solutions';
import Services from './component/Services';
import Product from './component/Product';
import Company from './component/Company';
import Help from './component/Help';
import Social from './component/Social';

const { whiteColor } = color;

const FooterContainer = styled.section`
	background-color: ${whiteColor};
`;

const Content = styled.div`
    display: flex;
    align-items: flex-start;
	margin: 0 auto;
	max-width: 1020px;
	padding: 20px 0;
`;

const Footer = () => {
    return(
        <FooterContainer>
            <Content>
                <Services />
                <Solutions />
                <Product />
                <Company />
                <Help />
                <Social />
            </Content>
        </FooterContainer>
    )
};

export default Footer;
