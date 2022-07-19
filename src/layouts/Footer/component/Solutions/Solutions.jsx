import styled from 'styled-components';
import Column from '../Column/Column';
import { SolutionList } from '../../../../constants/solutions';

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
            <TitleWrapper>{SolutionList[0].item}</TitleWrapper>
            {SolutionList.slice(1).map(item => 
                <Column key={item.key} link={item.item} />
            )}
        </Wrapper>
    )
}

export default Solutions;