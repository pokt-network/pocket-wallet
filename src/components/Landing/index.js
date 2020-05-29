import React, { Component } from "react";

import Wrapper from '../wrapper';
import LandingContent from './landing-content';
import logoPW from '../../utils/images/50x45.png';
import Description from './description';
import Title from './../public/title/title';
import Button from './../public/button/button';

class Landing extends Component {
  render () {
    return (
      <LandingContent>
          <Wrapper className="wide-block-wr">
            <div className="top">
              <div className="title">
                <h1><span> Welcome to </span>
                Pocket <img src={logoPW} alt="logo pocket" /> Wallet
                </h1>
              </div>
              <Description>
                This is an open-source interface to provide easy access and management of your POKT cryptocurrency. 
              </Description>
            </div>
            <div className="bottom">
              <Title>
                Do you have a Pocket account?
              </Title>
              <div className="btns">
                <Button href="/create" dark>Create</Button>
                <Button href="/import">Import</Button>
              </div>
            </div>
          </Wrapper>
      </LandingContent>
    );
  }
}

export default Landing;