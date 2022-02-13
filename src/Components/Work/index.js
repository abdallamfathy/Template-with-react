import React , {Component} from 'react';
import {Span,Icon,Line,Part,PartDesc,PartTitle,WorkSection,WorkTitle,Container} from './style'
import axios from 'axios';
class Work extends Component {

    state = {
        works: []
    }
    componentDidMount(){
        axios.get('js/data.json').then(res => {this.setState({works: res.data.works})})
    }

    render() {

        const workss = this.state.works;
        const worksList = workss.map( (worksItem) => {
            return (

                <Part first = {worksItem.id} key = {worksItem.id}>
                    <Icon className={worksItem.icon_name}></Icon>
                    <PartTitle>{worksItem.title}</PartTitle>
                    <Line/>
                    <PartDesc>
                        {worksItem.body}
                    </PartDesc>
                </Part>

            )
        } )




        return(
    <WorkSection>
        <Container>
            <WorkTitle><Span>My</Span> Work</WorkTitle>
            {worksList}
        </Container>
    </WorkSection>
       )}








}

export default Work;