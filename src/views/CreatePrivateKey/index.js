import React, {Component} from 'react';
import Wrapper from '../../components/Wrapper';
import CreatePrivateKeyContent from './CreatePrivateKey';
import Input from '../../components/Public/Input/Input';
import Button from '../../components/Public/Button/Button';
import altertT from '../../utils/images/alert-triangle.png';
import reload from '../../utils/images/reload.png'; 
import increase from '../../utils/images/increase.png';
import { DataSource } from "../../datasource"

class CreatePrivateKey extends Component {
    
    constructor(props) {
        super(props)
        // Setup locals
        this.dataSource = new DataSource(undefined, [new URL("http://localhost:8081")])
        // Bind functions
        this.getBalance = this.getBalance.bind(this)
        // Set current Account
        this.currentAccount = this.props.location.data
    }

    // Retrieves the account balance
    getBalance = async (address) => {
        const balance = await this.dataSource.getBalance(address)
        // Update balance value
        // TODO: Convert the UPOKT to POKT values
        document.getElementById('balance').text = balance + ""
    }

    render () {
    // Call getBalance
    this.getBalance(this.currentAccount.addressHex)

    return (
        <CreatePrivateKeyContent>
            <Wrapper className="wide-block-wr">
                <div className="quantitypokt">
                    <div className="container">
                        <h1 id="balance">0.00 POKT</h1>
                        <div className="stats">
                            <div className="stat">
                                <img src={increase} alt="alert" />
                                <span>23,87% </span>
                            </div>
                            <div className="stat">
                                <span>$ 0.00 USD</span>
                                <img src={reload} alt="alert" />
                            </div>
                        </div>
                    </div>
                </div>
                <form className="pass-pk">
                    <div className="container">
                        <div className="cont-input">
                            <label htmlFor="prk">PRIVATE KEY</label>
                            <Input type="password" name="privateKey" id="prk" defaultValue={this.currentAccount.encryptedPrivateKeyHex} />
                        </div>
                        <div className="alert">
                            <img src={altertT} alt="alert" />
                            <div className="cont-alert">
                                <div className="title">
                                    <h3>STORE SAVE YOUR PRIVATE KEY!</h3>
                                </div>
                                <p>
                                    You wont be able see it again or change it, make a back up, store it save  preferably offline. You’ll need it to acces your account again.
                                </p>
                            </div>
                        </div>
                        <div className="cont-input second">
                            <label htmlFor="add">Address</label>
                            <Input type="text" name="address" id="add" defaultValue={this.currentAccount.addressHex} disabled />
                        </div>
                        <div className="cont-input">
                            <label htmlFor="puk">Public Key</label>
                            <Input type="text" name="public-k" id="puk" defaultValue={this.currentAccount.publicKeyHex} disabled />
                        </div>
                        <div className="btn-subm">
                            <Button href="http://example.com">Account Details</Button>
                        </div>
                    </div>
                </form>
            </Wrapper>
        </CreatePrivateKeyContent>
    );
}
}
export default CreatePrivateKey;