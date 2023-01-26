import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  return (
    <div>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">dawson.Dev</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='about'>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='myWork'>My Work</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='skills'>Skills</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='contactMe'>Contact Me</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
    </div>
  )
}

export default Navbar