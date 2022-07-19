import styled from "styled-components";
import { useState } from "react";
import Bradley from '../../../../assets/Testimonials_bradley.png';
import Rikky from '../../../../assets/Testimonial_rikkybw.png';
import EssentialEnergy from '../../../../assets/essential-circle.png';
import Paradiam from '../../../../assets/paradigm_logo_circle.png';
import { color } from "../../../../styles/variables";

const { textColor, textGreyColor, shadowColor } = color;

const  Container = styled.div`
    width: 90%;
    height: 350px;
    display: flex;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0 0 20px 0 ${shadowColor};
    position: relative;
`;

const testimonials = [
    {
        name: <strong>Bradley Smith</strong>,
        title: <p>Training & Development Specialist - Essential Energy</p>,
        url: Bradley,
        logo: EssentialEnergy,
        statement: 
        <p>Since we`ve been a client of aXcelerate, we`ve found that every month there is something new that is a 100% value-add for our training management. There hasn`t been a release which didn't contain updates and features useful to our team's needs. <br /><br />
        aXcelerate has raised the bar of what we can do.</p>
    },
    {
        name: <strong>Rikky Burkett</strong>,
        title: <p>Director - Paradigm</p>,
        url: Rikky,
        logo: Paradiam,
        statement: 
        <p>The aXcelerate system has enabled PTG to automate our enrolment, training and assessment processes, while capturing assessment outcomes in a range of contexts and environments. Having the ability to assess while offline is a huge leap forward and advantage to our assessors and students as well as from an administrative and compliance perspective. <br /><br />
        Our industry is complex and highly skills-based. Being able to capture and record evidence of individual and group competence in the field enables all stakeholders a streamlined, effective and time-efficient method of record capture. and storage.</p>,
    }
];

const ContextWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 350px;
    padding: 20px 75px;
`;

const StatementWrapper = styled.div`
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    opacity: 1;
`;

const Statement = styled.div`
    color: ${textGreyColor};
    font-size: 15px;
    line-height:20px;
`;

const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top:25px;
    height: 60px;
`;

const PersonalInfo = styled.div`
    margin-left: 10px;
    height: 46px;
`;

const Name = styled.div`
    font-size: 14px;
    color: ${textColor};
`;

const Position = styled.div`
    font-size: 12px;
    color: ${textGreyColor};
`;

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideImages = {
        width: "40%",
        height: "350px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${testimonials[currentIndex].url})`,
        borderRadius: "10px 0 0 10px"
    };

    const leftArrowStyles = {
        width: "50px",
        height: "50px",
        position: "absolute",
        top: "50%",
        left: "-25px",
        transform: "translate(0, -50%)",
        borderRadius: "100px",
        boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.1",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };

    const rightArrowStyles = {
        width: "50px",
        height: "50px",
        position: "absolute",
        top: "50%",
        right: "-25px",
        transform: "translate(0, -50%)",
        borderRadius: "100px",
        boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.1",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };

    const goToPrevious = () => {
        const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const newIndex = currentIndex === testimonials.length -1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };


    return (
        <Container>
            <div style={leftArrowStyles} onClick={goToPrevious}><span>←</span></div>
            <div style={rightArrowStyles} onClick={goToNext}><span>→</span></div>
            <div style={slideImages}></div>
            <ContextWrapper>
                <StatementWrapper>
                    <Statement>{testimonials[currentIndex].statement}</Statement>
                    <InfoWrapper>
                        <img style={{boxShadow:"0 0 20px 0 rgba(0, 0, 0, 0.1)", borderRadius:"100px"}} src={testimonials[currentIndex].logo} alt="company logo"/>
                        <PersonalInfo>
                            <Name>{testimonials[currentIndex].name}</Name>
                            <Position>{testimonials[currentIndex].title}</Position>
                        </PersonalInfo>
                    </InfoWrapper>
                </StatementWrapper>
            </ContextWrapper>
        </Container>
    )
}

export default ImageSlider;