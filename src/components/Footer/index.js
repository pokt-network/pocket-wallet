import React, { Component } from "./node_modules/react";

import FooterContent from './Footer';
import Wrapper from '.././Wrapper';
import HalfColumn from './half-column';
import tw from '../../utils/images/twitter.png';
import github from '../../utils/images/github.png';
import discord from '../../utils/images/discord.png';
import telegram from '../../utils/images/telegram.png';
import cent from '../../utils/images/cent.png';

class Footer extends Component {
  
  render () {
    return (
      <FooterContent >
        <Wrapper className="footer-w"> 
            
          <HalfColumn>
            <div className="social-ch">
              <div className="title">
                <h3>STAY UPDATED</h3>
              </div>
            </div>
            <div className="tech-logos">
              <a href="http://bit.ly/PocketDiscordInvite" target="_blank" rel="noopener noreferrer">
                <img src={discord} alt="tech logo" /> 
              </a>
              <a href="https://github.com/pokt-network" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="tech logo" /> 
              </a>
							<a href="https://t.me/POKTnetwork" target="_blank" rel="noopener noreferrer">
								<img src={telegram} alt="tech logo" /> 
							</a>
							<a href="https://twitter.com/POKTnetwork" target="_blank" rel="noopener noreferrer">
								<img src={tw} alt="tech logo" /> 
							</a>
							<a href="https://beta.cent.co/@POKTnetwork" target="_blank" rel="noopener noreferrer">
								<img src={cent} alt="tech logo" /> 
							</a>
            </div>	
          </HalfColumn>

          <HalfColumn className="last">
            <nav className="footer-nav">
              <ul className="menu-footer">
                <li className="mainli"> 
                  <div className="title-sm">PRODUCT</div>
                  <ul className="sub-menu">
                    <li className="menu-item"><a href="http://example.com">Overview</a></li>
                    <li className="menu-item"><a href="http://example.com">How to use Pocket</a></li>
                    <li className="menu-item"><a href="http://example.com">Documentation</a></li>
                  </ul>
                </li>
                <li className="mainli">
                  <div className="title-sm">RESOURCES</div>
                  <ul className="sub-menu">
                    <li className="menu-item"><a href="http://example.com">WhitePaper</a></li>
                    <li className="menu-item"><a href="http://example.com">Economic One Pager</a></li>
                    <li className="menu-item"><a href="http://example.com">DAO</a></li>
                  </ul>
                </li>
                <li className="mainli">
                  <div className="title-sm">COMMUNITY</div>
                  <ul className="sub-menu">
                    <li className="menu-item"><a href="http://example.com">Blog</a></li>
                    <li className="menu-item"><a href="http://example.com">Forum</a></li>
                  </ul>
                </li>
              </ul>				
            </nav>
          </HalfColumn>

        </Wrapper> 
      </FooterContent>
    )
  }

}

export default Footer;