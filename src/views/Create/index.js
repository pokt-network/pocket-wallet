import React, {Component} from './node_modules/react';
import Wrapper from '../../components/wrapper';
import CreateContent from './Create';
import Title from '../../components/public/Title/Title';
import Input from '../../components/public/input/input';
import Button from '../../components/public/button/button';
import altertR from '../../utils/images/alert-circle-red.png';
import altertT from '../../utils/images/alert-triangle.png';
import { DataSource } from "../../datasource"

class Create extends Component {
    constructor(props) {
        super(props)
        // Set up locals
        this.dataSource = new DataSource(undefined, [new URL("http://localhost:8081")])
        // Bind functions
        this.handleCreateAccount = this.handleCreateAccount.bind(this)
    }
    // Create account function
    handleCreateAccount = async () => {
        // Retrieve the passphrase value
        const passphrase = document.getElementById('passp').value
        // Verify the passphrase length
        if (passphrase.length > 1) {
            const account = await this.dataSource.createAccount(passphrase)
            const accountObj = {
                addressHex: account.addressHex,
                publicKeyHex: account.publicKey.toString("hex"),
                encryptedPrivateKeyHex: account.encryptedPrivateKeyHex
            }
            // Set current account and push to createprivatekey view
            this.props.history.push({
                pathname: '/createprivatekey',
                data: accountObj
              })
            
            // Go to create private key
            // window.location = `/createprivatekey`
        }else{
            alert("passphrase is too short")
        }
    }
    // Render
    render () {
        return (
        <CreateContent>
            <Wrapper className="wide-block-wr">
                <Title>CREATE a pocket account</Title>
                <div className="passphrase">
                    <h2>PROTECT YOUR PRIVATE KEY<br /> WITH a passphrase</h2>
                    <p>Write down a Passphrase to protect your key file. This should have: minimun 15 alphanumeric symbols, one capital letter, one lowercase, one special characters and one number.</p>
                    <form className="pass-form">
                        <div className="cont-input">
                            <Input type="password" name="passphrase" id="passp" placeholder="•••••••••••••••••" />
                            <span className="error"> <img src={altertR} alt="alert" />The password does not fit the requirements</span>
                        </div>
                        <div className="btn-subm">
                            <Button href="http://example.com">Download</Button>
                            <Button onClick={this.handleCreateAccount} dark>Create</Button>
                        </div>
                    </form>
                    <a href="http://example.com" className="account">Already have an account? Access my Pocket account</a>
                </div>
                <div className="alert">
                    <img src={altertT} alt="alert" />
                    <div className="cont-alert">
                        <div className="title">
                            <h3>Don’t forget to save your PASSPHRASE!</h3>
                        </div>
                        <p>
                            You wont be able to change it, make a back up, store it save and preferably offline. You’ll nee it to import or set up your node.
                            <br />
                            <br />
                            Remember that  the keyfile by itself is useless without the passphrase.
                        </p>
                    </div>
                </div>
            </Wrapper>
        </CreateContent>
    );
}
}
export default Create;