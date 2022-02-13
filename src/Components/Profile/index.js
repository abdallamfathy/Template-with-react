import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { TitleSpan,ListItem,List,Bar,PercSpan,ListSpan,Parent,ProfileSkills,ParentSpan,ProfileSection,Skills,SkillsDesc,SkillsTitle,
    SkillsTitleSpan,WebSpan,Container} from './style';



const Profile =() =>{

    const [work , setWork] = useState([]);
    useEffect(()=> {
        axios.get('js/data.json').then(res=>{setWork(res.data.work)})
    })

    const workItem = work.map((item)=>{
        return(
            <Bar>
                <TitleSpan >{item.title}</TitleSpan>
                <PercSpan >{item.perc}</PercSpan>
                <Parent >
                    <ParentSpan Span={item.spanPerc}></ParentSpan>
                </Parent>
            </Bar>
        )
    })

    return(
        <ProfileSkills>
            <Container >
                <ProfileSection >
                    <h2 ><SkillsTitleSpan>My </SkillsTitleSpan>Profile</h2>
                    <List >
                        <ListItem >
                            <ListSpan>Name</ListSpan>
                            Abdullah mohamed
                        </ListItem>
                        <ListItem >
                            <ListSpan>Birthday</ListSpan>
                            21/1/1666
                        </ListItem>
                        <ListItem>
                            <ListSpan>Address</ListSpan>
                            Cairo
                        </ListItem>
                        <ListItem >
                            <ListSpan>Phone</ListSpan>
                            4444 5555 6666
                        </ListItem>
                        <ListItem >
                            <ListSpan>Email</ListSpan>
                            abdalla@abdalla.com
                        </ListItem>
                        <ListItem >
                            <ListSpan>Website</ListSpan>
                            <WebSpan>www.google.com</WebSpan>
                        </ListItem>
                    </List>
                </ProfileSection>

                <Skills >
                    <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                    <SkillsDesc >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    {workItem}
                </Skills>

            </Container>
        </ProfileSkills>    )
}

export default Profile;