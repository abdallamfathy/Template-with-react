import React from 'react';
import {HomeSection,HomeBtn,HomeDesc,HomeInfo,Info,HomeTitle,Span,Container} from './style'

const Home =() =>{
    return(
        <HomeSection>
            <Container>
                <HomeInfo>
                    <HomeTitle>Abdullah mohamed</HomeTitle>
                    <Info>Front-End developer</Info>
                    <HomeDesc>
                        Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you.
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInfo>
            </Container>
        </HomeSection>
    )
}

export default Home;