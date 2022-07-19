import styled from 'styled-components';
import ImageSlider from './components/ImageSlider';

const Container = styled.div`
    width: 1200px;
    margin: 40px auto;
    align-items: center;
    justify-content: center;
`;

const Testimonials = () => {
    return (
        <Container>
            <ImageSlider/>
        </Container>
    )
}

export default Testimonials;