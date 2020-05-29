import React, { Component } from "react";
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

import Wrapper from '.././wrapper';
import Menu from "./menu";
import MobileButton from "./mobile-button";
import Logo from "./logo";
import StyledUl from "./ul";
import StyledLi from "./li";
import HeaderContainer from "./header";
import logo from '../../utils/images/logo-white.png';
import arrow from '../../utils/images/right-arrow.png';

class Header extends Component {
  state = {
    isMenuHidden: true
  };

  onToggleMenu = () => {
    this.setState((prevState) => {
      return { isMenuHidden: !prevState.isMenuHidden };
    });
  };

  render() {
    let hrefLink = '#';
    return (
      <HeaderContainer isHidden={this.state.isMenuHidden}>
        <Wrapper className="header">
          <Logo href="/"> <img src={logo} alt="logo pocket" /> <span>/ &nbsp; WALLET</span> </Logo>
          <Menu isHidden={this.state.isMenuHidden}>
            <StyledUl>
              <StyledLi>
                <NavLink exact activeClassName="active" to="/send" onClick={this.onToggleMenu}>Send</NavLink>
              </StyledLi>
              <StyledLi>
                <NavLink activeClassName="active" to="/buypokt" onClick={this.onToggleMenu}>Buy POKT</NavLink>
              </StyledLi>
              <StyledLi className="sub_menu">
                <a href={hrefLink}> Account <img src={arrow} alt="greater than" /> </a>
                <ul>
                  <li><NavLink activeClassName="active" to="/logout" onClick={this.onToggleMenu}>Log out</NavLink></li>
              </ul>
              </StyledLi>
            </StyledUl>
          </Menu>
          <MobileButton onClick={this.onToggleMenu} />
        </Wrapper>
      </HeaderContainer>
    );
  }
}

export default Header;