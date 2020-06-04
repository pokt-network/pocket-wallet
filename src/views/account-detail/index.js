import React, { Component } from 'react';
import Wrapper from '../../components/wrapper';
import AccountLContent from './account-detail';
import Input from '../../components/public/input/input';
import Button from '../../components/public/button/button';
import ToggleBtn from '../../components/public/toggle/toggle-btn';
import ContainerToggle from '../../components/public/toggle/container-toggle';
import token from '../../utils/images/token.png';
import unstaking from '../../utils/images/unstaking.png';
import node from '../../utils/images/node.png';
import sent from '../../utils/images/sent.png';
import received from '../../utils/images/received.png';
import load from '../../utils/images/load.png';
import reload from '../../utils/images/reload.png'; 
import arrowUp from '../../utils/images/arrow-up.png';
import T from '../../components/public/table/Table';
import Th from '../../components/public/table/Th';
import Td from '../../components/public/table/Td';
import Tr from '../../components/public/table/Tr';
import THead from '../../components/public/table/THead';
import TBody from '../../components/public/table/TBody';
import TFooter from '../../components/public/table/TFooter';
import { DataSource } from "../../datasource"

class AccountLatest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            app: undefined,
            node: undefined,
            visibility: false,
            addressHex: "",
            publicKeyHex: ""
        }
        // Set up locals
        this.dataSource = DataSource.instance
        // Binds
        this.onToggleBtn = this.onToggleBtn.bind(this)
        this.getBalance = this.getBalance.bind(this)
        this.getAccountType = this.getAccountType.bind(this)
        this.addApp = this.addApp.bind(this)
        this.addNode = this.addNode.bind(this)
        this.getTransactions = this.getTransactions.bind(this)
        this.pushToSend = this.pushToSend.bind(this)
        // Set current Account
        this.currentAccount = this.props.location.data
    }
    // Retrieve the latest transactions
    async getTransactions() {
        const allTxs = await this.dataSource.getAllTransactions(this.currentAccount.addressHex)
        if (allTxs !== undefined) {
            this.updateTransactionList(allTxs)
        }
    }
    updateTransactionList(txs) {
        try {
            // Invert the list
            const rTxs = txs.reverse()
            // Images src paths
            const sentImgSrc = sent
            const receivedImgSrc = received

            rTxs.forEach(tx => {
                var d1 = document.getElementById('transation-list-section');
                const events = JSON.parse(tx.tx_result.log)[0].events
                //
                if (events[1].type === "transfer") {
                    const attributes = events[1].attributes
                    if (attributes[1].key === "amount") {
                        const value = attributes[1].value.replace("upokt","")
    
                        const txHash = tx.hash
                        const imageSrc = tx.type.toLowerCase() === "sent" ? sentImgSrc : receivedImgSrc
        
                        const txTemplate = '<Tr class="sc-fzqBZW ilrPoA">\n' +
                            '<Td class="sc-fzokOt hITMcq"> <img src='+ imageSrc +' alt="'+ tx.type.toLowerCase() +'" /> </Td>\n' +
                            '<Td class="sc-fzokOt hITMcq"> <div class="qty">'+ value / 1000000 +' <span>POKT</span></div> <div class="status">'+ tx.type.toLowerCase() +'</div> </Td>\n' +
                            '<Td class="sc-fzokOt hITMcq">'+tx.height+'</Td>\n' +
                            '<Td class="sc-fzokOt hITMcq"> <a href="http://example.com"> '+txHash+' </a> </Td>\n' +
                        '</Tr>'
                        d1.insertAdjacentHTML('beforeend', txTemplate);
                    }else {
                        console.dir(attributes, {depth: null})
                    }
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    // Account type, amount staked and staking status
    async addApp() {
        if (this.state.app !== undefined) {
            // Update the staked amount
            const appStakedTokensLabel = document.getElementById("app-staked-tokens-amount")
            if (appStakedTokensLabel) {
                const POKT = Number(this.state.app.stakedTokens.toString()) / 1000000
                appStakedTokensLabel.innerText = POKT + " POKT"
            }
            // Update the unstaking status
            const appStakingStatusLabel = document.getElementById("app-staking-status")
            if (this.state.app.status === 1) {
                appStakingStatusLabel.innerText = "UNSTAKING"
            }else {
                appStakingStatusLabel.innerText = "STAKED"
            }
            // Show the app section
            const appTypeSection = document.getElementById("app-type-section")
            if (appTypeSection) {
                appTypeSection.style.display = "flex"
            }
        }
    }
    // Account type, amount staked and staking status
    async addNode() {
        if (this.state.app !== undefined) {
            // Update the staked amount
            const appStakedTokensLabel = document.getElementById("node-staked-tokens-amount")
            if (appStakedTokensLabel) {
                const POKT = Number(this.state.app.stakedTokens.toString()) / 1000000
                appStakedTokensLabel.innerText = POKT + " POKT"
            }
            // Update the unstaking status
            const appStakingStatusLabel = document.getElementById("node-staking-status")
            if (this.state.app.status === 1) {
                appStakingStatusLabel.innerText = "UNSTAKING"
            }else {
                appStakingStatusLabel.innerText = "STAKED"
            }
            // Show the app section
            const nodeTypeSection = document.getElementById("node-type-section")
            if (nodeTypeSection) {
                nodeTypeSection.style.display = "flex"
            }
        }
    }
    // Account type, amount staked and staking status
    async getAccountType() {
        const appOrError = await this.dataSource.getApp(this.currentAccount.addressHex)
        if (appOrError !== undefined) {
            this.setState({app: appOrError.application})
            this.addApp()
        }
        const nodeOrError = await this.dataSource.getNode(this.currentAccount.addressHex)
        if (nodeOrError !== undefined) {
            this.setState({app: nodeOrError.node})
            this.addNode()
        }
    }
    
    // Retrieves the account balance
    async getBalance() {
        const balance = await this.dataSource.getBalance(this.currentAccount.addressHex)
        // Scroll to the account information section
        var element = document.querySelector("#pokt-balance");
        element.scrollIntoView({
            behavior: 'smooth'
        })
        // Update account detail values
        document.getElementById('pokt-balance').innerText = balance + " POKT"
        this.setState({
            addressHex: this.currentAccount.addressHex,
            publicKeyHex: this.currentAccount.publicKeyHex
        })
    }
    pushToSend() {
        // Check the account info before pushing
        if (this.currentAccount.addressHex === undefined ||
            this.currentAccount.publicKeyHex === undefined ||
            this.currentAccount.ppk === undefined) {
            this.toggleError(true, "No account available, please create an account")
            return
        }
        const accountObj = {
            addressHex: this.currentAccount.addressHex,
            publicKeyHex: this.currentAccount.publicKeyHex,
            ppk: this.currentAccount.ppk,
        }
        // Move to the account detail
        this.props.history.push({
            pathname: "/send",
            data: accountObj,
        })
    }
    // Transaction list toggle
    onToggleBtn() {
        this.setState((prevState) => {
            return { visibility: !prevState.visibility };
        })
    }
    componentDidMount() {
        if (this.currentAccount !== undefined) {
            this.getBalance()
            this.getAccountType()
            this.getTransactions()
        }
    }
    // Render
    render() {
        // Check if current account is set
        if (this.currentAccount === undefined) {
            // Redirect to the home page
            this.props.history.push({
                pathname: '/'
            })
            return null
        }
        
        return (
            <AccountLContent>
                <Wrapper className="wide-block-wr">
                    <div className="quantitypokt">
                        <div className="container">
                            <h1 id="pokt-balance" >0.00 POKT</h1>
                            <div style={{flexDirection: "column"}} className="stats">
                                <div className="stat">
                                    <span>$ 0 USD</span>
                                    <img src={reload} alt="reload" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pokt-options">
                        {/* NODE Section */}
                        <div style={{ display: "none" }} id="node-type-section" className="container">
                            <div className="option">
                                <div className="heading">
                                    <h2 id="node-staked-tokens-amount" > <img src={token} alt="staked tokens"/> 1900 <span>POKT</span></h2>
                                </div>
                                <span className="title">Staked Tokens</span>
                            </div>
                            <div className="option">
                                <div className="heading">
                                    <h2 id="node-staking-status"> <img src={unstaking} alt="staked tokens"/> UNSTAKING </h2>
                                </div>
                                <span className="title">Staking Status</span>
                            </div>
                            <div className="option">
                                <div className="heading">
                                    <h2> <img src={node} alt="staked tokens"/> NODE</h2>
                                </div>
                                <span className="title">Account Type</span>
                            </div>
                        </div>
                        {/* / NODE Section */}
                        {/* APP Section */}
                        <div style={{ display: "none", marginTop: "16px" }} id="app-type-section" className="container">
                            <div className="option">
                                <div className="heading">
                                    <h2 id="app-staked-tokens-amount"> <img src={token} alt="staked tokens"/> 1900 <span>POKT</span></h2>
                                </div>
                                <span className="title">Staked Tokens</span>
                            </div>
                            <div className="option">
                                <div className="heading">
                                    <h2 id="app-staking-status"> <img src={unstaking} alt="staked tokens"/> UNSTAKING </h2>
                                </div>
                                <span className="title">Staking Status</span>
                            </div>
                            <div className="option">
                                <div className="heading">
                                    <h2> <img src={node} alt="staked tokens"/> APP</h2>
                                </div>
                                <span className="title">Account Type</span>
                            </div>
                        </div>
                        {/* / APP Section */}
                        <div className="btn-subm">
                            <Button href="https://dashboard.pokt.network/" dark>Buy POKT</Button>
                            <Button id="send-pokt" onClick={this.pushToSend}>Send</Button>
                        </div> 
                    </div>
                    <form className="pass-pk">
                        <div className="container">
                            <div className="cont-input">
                                <label htmlFor="add">Address</label>
                                <Input type="text" name="address" id="address" value={this.state.addressHex} disabled />
                            </div>
                            <div className="cont-input second">
                                <label htmlFor="puk">Public Key</label>
                                <Input type="text" name="public-k" id="public-key" value={this.state.publicKeyHex} disabled />
                            </div>
                        </div>
                    </form>
                    <div className="toggle-btn">
                        <ToggleBtn id="tooglebtn" onClick={this.onToggleBtn}>Latest Transactions</ToggleBtn>
                    </div>
                    <ContainerToggle isVisible={this.state.visibility}>
                        <T>
                            <THead className="latest-tx">
                                <Tr>
                                <Th> </Th>
                                <Th>STATUS</Th>
                                <Th>BLOCK HEIGHT</Th>
                                <Th> TX HASH</Th>
                                </Tr>
                            </THead>
                            <TBody id="transation-list-section" className="l-tx">
                                 <Tr style={{display: "none"}}>
                                    <Td> <img src={load} alt="loading" /> </Td>
                                    <Td> <div className="qty">0.00 <span>POKT</span></div> <div className="status">Sending</div> </Td>
                                    <Td>34 sec ago</Td>
                                    <Td> <a href=""> 94691343T5cbd87abd8864bd87abd87a9974f1R34 </a> </Td>
                                </Tr>
                            </TBody>
                        </T>
                    </ContainerToggle>
                </Wrapper>
            </AccountLContent>
        );
    }
}

export default AccountLatest;