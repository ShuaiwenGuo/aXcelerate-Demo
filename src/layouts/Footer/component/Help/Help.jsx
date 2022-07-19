import styled from 'styled-components';
import Column from '../Column/Column';
import { HelpList } from '../../../../constants/help';

const Wrapper = styled.div`
    padding:10px;
    margin-right:60px;
`;

const TitleWrapper = styled.span`
    display: block;
    font-size:10px;
    font-weight:bold;
    margin-bottom: 10px;
`;

const Solutions = () => {
    return (
        <Wrapper>
            <TitleWrapper>{HelpList[0].item}</TitleWrapper>
            {HelpList.slice(1).map(item => 
                <Column key={item.key} link={item.item} />
            )}
        </Wrapper>
    )
}

export default Solutions;