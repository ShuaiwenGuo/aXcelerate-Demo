import styled from 'styled-components';
import Column from '../Column/Column';
import { ServiceList } from '../../../../constants/services';
import Logo from '../../../../assets/new_logo_dark.svg';

const Wrapper = styled.div`
    padding:10px;
    margin-right:60px;
`;

const LogoWrapper = styled.div`
    margin-bottom: 4px;
`;

const Services = () => {
    return (
        <Wrapper>
            <LogoWrapper><img src={Logo} alt="dark-color logo"/></LogoWrapper>
            {ServiceList.map(item => 
                <Column key={item.key} link={item.item} />
            )}
        </Wrapper>
    )
}

export default Services;