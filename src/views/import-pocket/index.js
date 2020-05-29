import React from 'react';
import Wrapper from '../../components/wrapper';
import ImportPocketContent from './import-pocket';
import Title from '../../components/public/title/title';
import Input from '../../components/public/input/input';
import Button from '../../components/public/button/button';
import altertR from '../../utils/images/alert-circle-red.png';

function ImportPocket (){
    return (
        <ImportPocketContent>
            <Wrapper className="wide-block-wr">
                <Title>Import a pocket account</Title>
                <div className="quantity">
                    <form className="import-p-form">
                        <div className="container">
                            <div className="cont-input">
                                <label htmlFor="keyf">Key File</label>
                                <div className="cont-file">
                                    <div className="upload"></div>
                                    <Input type="file" name="key-file" id="keyf" />
                                </div>
                                <span className="error"> <img src={altertR} alt="alert" />Incorrect file</span>
                            </div>
                            <div className="cont-input">
                                <label htmlFor="privkey">Access by Private Key</label>
                                <Input type="password" name="privatekey" id="privkey" placeholder="Enter Private Key" />
                                <span class="error"> <img src={altertR} alt="alert" />Incorrect private key</span>
                            </div>
                        </div>
                        <div className="btn-subm">
                            <Button href="http://example.com">Import</Button>
                            <span className="error"> <img src={altertR} alt="alert" />  Please enter Private key</span>
                        </div>
                    </form>
                    <a href="http://example.com" className="account">Don’t have an account? Create a new Pocket account</a>
                </div>
            </Wrapper>
        </ImportPocketContent>
    );
}

export default ImportPocket;