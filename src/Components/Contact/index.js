import React from 'react';
import {Span,Input,InputEmail,InputText,Form,Text,Title,ContactSection,FormInput,InputSub,
InputSubmit} from './style'
import Footer from './../Footer'
const Contact =() =>{
    return(
        <React.Fragment>
            <ContactSection>
                <div className="container">
                    <Title ><Span>Drop </Span>Me A line</Title>
                    <Form action="">
                        <FormInput >
                            <InputText type="text" placeholder="Your Name"/>
                            <InputEmail type="email" placeholder="Your Email"/>
                        </FormInput>
                        <InputSub type="text" placeholder="Your Subject"/>
                        <Text cols="30" rows="10" placeholder="Your Message"></Text>
                        <InputSubmit type="submit" value="Send Message"/>
                    </Form>
                </div>
            </ContactSection>
            <Footer/>
        </React.Fragment>
    )
}

export default Contact;