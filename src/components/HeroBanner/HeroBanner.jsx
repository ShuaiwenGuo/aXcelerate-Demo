import styled from 'styled-components';
import { color } from '../../styles/variables';
import Button from '../Button';
import IntroVideo from './IntroVideo';

const { textWhiteColor, lightPrimaryColor } = color

const HeroBlock = styled.section`
    margin: 0 auto;
    padding: 60px 0;
    border: none;
    background-color: ${lightPrimaryColor};
`;

const Content = styled.div`
	margin: 0 auto;
	max-width: 1020px;
`;

const Title = styled.h1`
    color: ${textWhiteColor};
    font-size: 45px;
    font-weight: 600;
    line-height: 60px;
    text-align: center;
    padding: 0 125px;
    word-wrap: wrap;
`;

const SubTitle = styled.p`
    color: ${textWhiteColor};
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    padding: 10px 200px;
    word-wrap: wrap;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 440px;
`;

const Herobanner = () => {
    return (
        <HeroBlock>
            <Content>
                <Title>
                    Everything your training organisation needs in One System.
                </Title>
                <SubTitle>
                    aXcelerate is an award-winning student management system trusted by RTOs, short course providers, CRICOS institutes, schools, and more.
                </SubTitle>
                <ButtonWrapper>
                    <Button theme = 'primary'>Learn More</Button>
                    <Button theme = 'white'>Get Started</Button>
                </ButtonWrapper>
                <IntroVideo />
            </Content>
        </HeroBlock>

    )
}

export default Herobanner;