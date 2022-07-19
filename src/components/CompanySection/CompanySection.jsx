import styled from 'styled-components';
import { color } from '../../styles/variables';
import Logo from '../../assets/new_logo_dark.svg';
import Mater from '../../assets/Mater_education_icon.png';
import Chubb from '../../assets/Chubb_icon.png';
import QFES from '../../assets/QFES_icon.png';
import USQ from '../../assets/USQ_icon.png';
import AWFA from '../../assets/Aus_Wide_First_Aid_icon.png';
import BridgeStone from '../../assets/Bridgestone_icon.png';
import SLS from '../../assets/SLS_icon.png';
import SES from '../../assets/nswses_icon.png';
import OpenColleges from '../../assets/Open_Colleges_icon.png';
import Swinburne from '../../assets/Swinburne_icon.png';

const { whiteColor, textColor } = color

const CompanyBlock = styled.section`
    margin: 0 auto;
    padding: 60px 0;
    border: none;
    background-color: ${whiteColor};
`;

const Content = styled.div`
	margin: 0 auto;
	max-width: 1020px;
`;

const Title = styled.h2`
    color: ${textColor};
    font-size: 38px;
    font-weight: 600;
    line-height: 60px;
    text-align: center;
    padding: 0 125px;
    word-wrap: wrap;
    margin: 20px 0;
`;

const SubTitle = styled.h3`
    color: ${textColor};
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    word-wrap: wrap;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto auto;
    grid-gap: 16px;
`;

const CompanySection = () => {
    return(
        <CompanyBlock>
            <Content>
                <Title>You're in good company</Title>
                <SubTitle>With over 1000 clients and growing, more and more training organisations are choosing <img src={Logo} alt="logo" />.</SubTitle>
                <Grid>
                    <img src={Mater} alt="mater education" width="136"/>
                    <img src={Chubb} alt="chubb" width="136"/>
                    <img src={QFES} alt="qfes" width="136"/>
                    <img src={USQ} alt="usq" width="136"/>
                    <img src={AWFA} alt="australia wide first aid" width="136"/>
                    <img src={BridgeStone} alt="bridge stone" width="136"/>
                    <img src={SLS} alt="surf life saving" width="136"/>
                    <img src={SES} alt="state emergency service" width="136"/>
                    <img src={OpenColleges} alt="open colleges" width="136"/>
                    <img src={Swinburne} alt="swinburne university" width="136"/>
                </Grid>
            </Content>
        </CompanyBlock>

    )
}

export default CompanySection;