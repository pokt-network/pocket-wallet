import React, { Component } from 'react';
import Wrapper from '../../components/wrapper';
import DetailContent from './detail-content';
import Title from '../../components/public/title/title';
import T from '../../components/public/Table/Table';
import Th from '../../components/public/Table/Th';
import Td from '../../components/public/Table/Td';
import Tr from '../../components/public/Table/Tr';
import TBody from '../../components/public/Table/TBody';
import load from '../../utils/images/load.png';
import none from '../../utils/images/none.png';


class TransactionDetail extends Component {
    render() {
        return (
            <DetailContent>
                <Wrapper className="wide-block-wr">
                    <Title>Transaction Detail</Title>
                    <T className="detail-table desktop">
                        <TBody className="details-t">
                            <Tr>
                                <Th>TRANSACTION HASH</Th>
                                <Td> 94691343T5cbd87abd8864bd87abd87a9974f1R34 </Td>
                            </Tr>
                            <Tr>
                                <Th>STATUS</Th>
                                <table className="states">
                                    <TBody> 
                                        <Tr>
                                            <Td> <img src={load} alt="loading state"/> <span>Sending</span> </Td>
                                            <Td> <span>Pending</span> <img src={none} alt="none state"/> </Td>
                                        </Tr>
                                    </TBody>
                                </table>
                            </Tr>
                            <Tr>
                                <Th>TIMESTAMP</Th>
                                <Td>34 sec ago</Td>
                            </Tr>
                            <Tr>
                                <Th>AMOUNT</Th>
                                <Td>246,576.058 <span>POKT</span></Td>
                            </Tr>
                            <Tr>
                                <Th>TX FEE</Th>
                                <Td>100,000 POKT</Td>
                            </Tr>
                            <Tr>
                                <Th>Tx Type</Th>
                                <Td>DAOTransfer</Td>
                            </Tr>
                            <Tr>
                                <Th>TO ADDRESS</Th>
                                <Td>9L69144c864bd87a92e9a969144c864bd87a92e9</Td>
                            </Tr>
                            <Tr>
                                <Th>BALANCE Before</Th>
                                <Td>454,758.987 POKT</Td>
                            </Tr>
                            <Tr>
                                <Th>BALANCE AFTER</Th>
                                <Td>100,000 POKT</Td>
                            </Tr>
                            <Tr>
                                <Th>BLOCK #</Th>
                                <Td>343T5</Td>
                            </Tr>
                        </TBody>
                    </T>
                    <T className="detail-table mobile">
                        <TBody className="details-t">
                            <Tr>
                                <Th>TRANSACTION HASH</Th>
                            </Tr>
                            <Tr>
                                <Td> 94691343T5cbd87abd8864bd87abd87a9974f1R34 </Td>
                            </Tr>
                            <Tr>
                                <Th>STATUS</Th>
                            </Tr>
                            <Tr>
                                <table className="states">
                                    <TBody> 
                                        <Tr>
                                            <Td> <img src={load} alt="loading state"/> <span>Sending</span> </Td>
                                            <Td> <span>Pending</span> <img src={none} alt="none state"/> </Td>
                                        </Tr>
                                    </TBody>
                                </table>
                            </Tr>
                            <Tr>
                                <Th>TIMESTAMP</Th>
                            </Tr>
                            <Tr>
                                <Td>34 sec ago</Td>
                            </Tr>
                            <Tr>
                                <Th>AMOUNT</Th>
                            </Tr>
                            <Tr>
                                <Td>246,576.058 <span>POKT</span></Td>
                            </Tr>
                            <Tr>
                                <Th>TX FEE</Th>
                            </Tr>
                            <Tr>
                                <Td>100,000 POKT</Td>
                            </Tr>
                            <Tr>
                                <Th>Tx Type</Th>
                            </Tr>
                            <Tr>
                                <Td>DAOTransfer</Td>
                            </Tr>
                            <Tr>
                                <Th>TO ADDRESS</Th>
                            </Tr>
                            <Tr>
                                <Td>9L69144c864bd87a92e9a969144c864bd87a92e9</Td>
                            </Tr>
                            <Tr>
                                <Th>BALANCE Before</Th>
                            </Tr>
                            <Tr>
                                <Td>454,758.987 POKT</Td>
                            </Tr>
                            <Tr>
                                <Th>BALANCE AFTER</Th>
                            </Tr>
                            <Tr>
                                <Td>100,000 POKT</Td>
                            </Tr>
                            <Tr>
                                <Th>BLOCK #</Th>
                            </Tr>
                            <Tr>
                                <Td>343T5</Td>
                            </Tr>
                        </TBody>
                    </T>
                </Wrapper>
            </DetailContent>
        );
    }
}

export default TransactionDetail;