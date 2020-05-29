import React from 'react';
import Popup from "reactjs-popup";
import PopupContent from './popup-content';
import Button from '../../components/public/button/button';
import Input from '../../components/public/input/input';
import exit from '../../utils/images/exit.png';

function PopupPW (){
    return (
        <Popup trigger={<Button className="button">Send</Button>} modal>
            {close => (
            <PopupContent className="modal">
                <a className="close" onClick={close}>
                    <img src={exit} alt="exit icon close"/>
                </a>
                <h2> Are you sure you want to send from  your Balance: </h2>
                <div className="content">
                    <div className="qty">
                        <div className="pokt">
                            0,00POKT
                        </div>
                        <div className="usd">
                            0,00USD
                        </div>
                    </div>
                    <form className="pass-pk">
                        <div className="cont-input">
                            <label htmlFor="toadd">To Address</label>
                            <Input type="text" name="toaddress" id="toadd" value="9L69144c864bd87a92e9a969144c864bd87a92e9" />
                        </div>
                        <div className="btn-subm">
                            <Button href="http://example.com">Send</Button>
                        </div>
                    </form>
                </div>
            </PopupContent>
            )}
        </Popup>
    );
}

export default PopupPW;