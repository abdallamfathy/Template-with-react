import React , {useState,useEffect} from 'react';
import axios from 'axios'
import {ImageWrapper,Image,List,ListItem,Overlay,OverlaySpan,PortfolioSection,PortfolioTitle,TitleSpan,Container} from './style'
const Portfolio =() =>{

    const [ images, setImages] = useState([])
    useEffect(() => {
        axios.get('js/data.json').then(res => {
            setImages(res.data.portfolio)
        })
    },[])

    const PortfolioImages = images.map((item)=>{
        return(
            <ImageWrapper key = {item.id}>
                <Image src={item.image} alt=""/>
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
        )
    } )
    return(
        <PortfolioSection>
            <PortfolioTitle><TitleSpan>My</TitleSpan> Portfolio</PortfolioTitle>
            <List>
                <ListItem active >All</ListItem>
                <ListItem >HTML</ListItem>
                <ListItem >Photoshop</ListItem>
                <ListItem >Wordpress</ListItem>
                <ListItem >Mobile</ListItem>
            </List>

            <Container>
                {PortfolioImages}
                </Container>


        </PortfolioSection>

)
}

export default Portfolio;