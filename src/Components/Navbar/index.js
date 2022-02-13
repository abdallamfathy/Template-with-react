import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Links,LogoText, UlList, ListItem, Logo, Anchor, NavbarSection} from './style.js';
const Navbar =() =>{
    return(
        <NavbarSection>

            <Container >

                <Logo>
                    <LogoText >Ultra Profile</LogoText>
                </Logo>


                    <UlList>
                        <ListItem><Links to="/">Home</Links></ListItem>
                        <ListItem><Anchor href="#">Work</Anchor></ListItem>
                        <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                        <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                        <ListItem><Anchor href="#">About</Anchor></ListItem>
                        <ListItem><Links to="/contact">Contact</Links></ListItem>
                    </UlList>

            </Container>

        </NavbarSection>
    )
}

export default Navbar;