import React , {Component}from 'react';
import axios from 'axios';
import {Span,Icon,SocialSection,Social,InfoSpan,SocialP} from './style'
class SocialMedia extends Component{
    state= {
        social:[]
    }

    componentDidMount()
    {
        axios.get('js/data.json').then(res => {this.setState({
        social:res.data.social})})
    }
    render() {
        const {social} = this.state;
        const socialList = social.map( (item) =>{
            return (
                <Social id={item.id} key={item.id}>
                    <Icon className={item.icon}></Icon>
                    <SocialP>
                        <Span className="info1">{item.title}</Span>
                        <InfoSpan className="info2">{item.body}</InfoSpan>
                    </SocialP>
                </Social>
            )
        } )
        return(
            <SocialSection className="social-media">
                {socialList}
            </SocialSection>
        )
    }

}

export default SocialMedia;