import React from 'react';
import Wrapper from '../../components/wrapper';
import ImportContent from './import';
import Title from '../../components/public/title/title';
import Input from '../../components/public/input/input';
import Button from '../../components/public/button/button';
import altertR from '../../utils/images/alert-circle-red.png';

function Send (){
    return (
        <ImportContent>
            <Wrapper className="wide-block-wr">
                <Title>Import a pocket account</Title>
                <div className="keys first">
                    <form className="keys-form">
                        <div className="cont-input">
                            <label htmlFor="keyfile">KEY FILE</label>
                            <Input type="text" name="keyf" id="keyfile" placeholder="Upload your Key File" />
                            <span className="error"> <img src={altertR} alt="alert" />Incorrect file</span>
                            <div className="btn-subm">
                                <Button dark href="http://example.com">Upload</Button>
                            </div>
                        </div>
                        <div className="cont-input">
                            <label htmlFor="passp">Passphrase</label>
                            <Input type="password" name="passphrase" id="passp" placeholder="•••••••••••••••••" />
                            <span className="error"> <img src={altertR} alt="alert" />Incorrect Passphrase</span>
                            <div className="btn-subm">
                                <Button href="http://example.com">Import</Button>
                            </div>
                        </div>
                    </form>
                    <a href="http://example.com" className="account">Don’t have an account? Create a Pocket account</a>
                </div>
                <div className="keys second">
                    <form className="private-key">
                        <div className="cont-input">
                            <label htmlFor="private">Private Key</label>
                            <Input type="password" name="priv" id="private" placeholder="•••••••••••••••••" />
                            <span className="error"> <img src={altertR} alt="alert" />Incorrect Private Key</span>
                            <div className="btn-subm">
                                <Button href="http://example.com">Import</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </Wrapper>
        </ImportContent>
    );
}

export default Send;