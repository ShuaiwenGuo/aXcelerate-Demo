import styled from 'styled-components';
import { color } from '../../../../styles/variables';
const { textColor } = color;

const Wrapper = styled.div`
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Links = styled.a`
    font-size: 10px;
    color: ${textColor};
    cursor: pointer;
`;

const Colunm = props => {
    const { link } = props;
    return (
        <Wrapper>
            <Links>{link}</Links>
        </Wrapper>
    )
};

export default Colunm;
