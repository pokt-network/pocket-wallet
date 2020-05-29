import React from 'react';
import Wrapper from '../../components/wrapper';
import SendContent from './send';
import Title from '../../components/public/title/title';
import Input from '../../components/public/input/input';
import PopupPW from './popup';
import altertR from '../../utils/images/alert-circle-red.png';

function Send (){
    return (
            <SendContent>
                <Wrapper className="wide-block-wr">
                    <Title>Send Transaction</Title>
                    <div className="quantity">
                        <form className="quantity-form">
                            <div className="row">
                                <div className="container">
                                    <input type="number" name="quantity" id="pokt" placeholder="0,00" />
                                    <label htmlFor="pokt">POKT</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="container">
                                    <input type="number" name="quantity" id="usd" placeholder="0,00" />
                                    <label htmlFor="usd">USD</label>
                                </div>
                            </div>
                        </form>
                        <form className="send-form">
                            <div className="container">
                                <label htmlFor="adrs">To address</label>
                                <Input type="text" name="address" id="adrs" placeholder="Pocket account address" />
                                <span className="error"> <img src={altertR} alt="alert" /> Please enter an address</span>
                                <label>TX Fee 100,000POKT</label>
                                <div className="btn-subm">
                                    <PopupPW />
                                    <span className="error"> <img src={altertR} alt="alert" /> Not Enough Balance</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </Wrapper>
            </SendContent>
    );
}

export default Send;