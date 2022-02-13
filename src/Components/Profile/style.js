 import styled from 'styled-components';

 export const  Container = styled.div`
  width: 85%;
  margin: auto;
`
export const ProfileSkills = styled.div `
  padding: 50px 0;
  overflow: hidden;
`
export const ProfileSection = styled.div `
  width: 50%;
  float: left;
  padding: 30px 0;

`

export const List = styled.ul `
  list-style: none

`
 export const  ListItem = styled.li
        `    margin-bottom: 8px
`
export const ListSpan = styled.span
` display: inline-block;
 width: 100px;
 font-weight: bold`

export const WebSpan = styled.span
    `font-weight: normal;
    color: #eb5424`

export const Skills = styled.div
    `width: 50%;
    float: left;`


 export const SkillsDesc = styled.div
    `font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px`


export const Bar = styled.div
    `overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px`


export const TitleSpan = styled.span `
    float: left;
`

 export const PercSpan = styled.span ` 
    float: right;
    margin-right: 100px
`

export const Parent = styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`

 export const ParentSpan = styled.span `
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
   width: ${props => props.Span === 1 ? '100%' : props.Span===2 ? '90%' : props.Span===3 ? '80%': '' };
`

// .profile_skills .skills .bar .parent span.sp1 {
//     width: 100%;
// }
//
// .profile_skills .skills .bar .parent span.sp2 {
//     width: 90%;
// }
//
// .profile_skills .skills .bar .parent span.sp3 {
//     width: 80%;
// }



export const SkillsTitle = styled.h2
    `font-size: 40px;
    margin-bottom: 20px`
export const SkillsTitleSpan = styled.span
 `    font-weight: normal;
`