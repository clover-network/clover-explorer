import React, {Component} from 'react'
import styled from 'styled-components'
import AppBody from '../AppBody'
import Row, { RowBetween } from '../../components/Row'
import { GrayText, GreenText } from "../../components/TextColor";
import Modal from '@material-ui/core/Modal';
import {Text} from "rebass";
import Header from '../../components/Header'
import ContractManageIcon from "../../assets/images/contract_manage_icon.svg";
import ConnectImg from "../../assets/images/connect_img.svg";
import ContentHeader from "../../components/ContentHeader";
import TableBottomComponent from "../../components/TableBottom";
import {IconGray, IconSM} from "../../components/IconSpan";

const BodyWrapper = styled.div`
  width: 1240px;
  margin: 30px auto 50px;
`;

const ContentWrapper = styled.div`
  padding: 20px;
  background: #FFFFFF;
  border-radius: 8px;
`;

const ContentWrapperNull = styled.div`
  height: 685px;
  padding: 20px;
  background: #FFFFFF;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const ConnectBtn = styled.div`
  margin-top: 20px;
  width: 236px;
  height: 56px;
  background: linear-gradient(187deg, #76B96D 0%, #4BA871 100%);
  border-radius: 8px;
  line-height: 56px;
  text-align: center;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
`;

const TableWrapper = styled.table`
  width: 100%;
`;

const TableHeader = styled.tr`
  height: 50px;
  background: #F5F5F5;
`;

const ThWrapper = styled.th`
  color: rgba(0, 24, 49, 0.5);
  font-size: 16px;
  font-weight: bold;
`;

const TableTrWrapper = styled.tr`
  line-height: 55px;
  vertical-align: top;
  border-bottom: 1px solid #E8EAEE;
`;

const TransferBtn = styled.span`
  border-radius: 4px;
  border: 1px solid #4BA870;
  padding: 5px 10px;
  color: #4BA870;
  font-size: 14px;
  cursor: pointer;
`;

const ModalWrapper = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBody = styled.div`
  width: 536px;
  height: 466px;
  padding: 20px;
  background: #FFFFFF;
  border-radius: 16px;
`;

const ModalContent = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const ModalFooter = styled.div`
  width: 496px;
  height: 58px;
  background: linear-gradient(187deg, #76B96D 0%, #4BA871 100%);
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  line-height: 58px;
  margin-top: 20px;
  text-align: center;
  cursor: pointer;
`;

const InputLine = styled.input`
  border: none;
  border-bottom: 1px solid #9E9E9E;
  outline: none;
  margin-bottom: 10px;
  width: 363px;
`;

export default class ContractManagement extends Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            openModal: false
        }
    }

    handleOpen = () => {
        this.setState({openModal: true});
    };

    handleClose = () => {
        this.setState({openModal: false});
    };

    render() {
        const { openModal } = this.state;
        const contractList = [
            {
               address: '123456'
            }
        ];
        const contractTableList = [
            {
                address: '0x0e1c7dfdsf230f543…',
                contractName: 'StakingRewardsFactory',
                compiler: 'Solidity',
                version: '0.5.17',
                balance: '0 Ether',
                txns: '2',
                verified: '12/22/2020',
            },
            {
                address: '0x0e1c7dfdsf230f543…',
                contractName: 'StakingRewardsFactory',
                compiler: 'Solidity',
                version: '0.5.17',
                balance: '0 Ether',
                txns: '2',
                verified: '12/22/2020',
            },
            {
                address: '0x0e1c7dfdsf230f543…',
                contractName: 'StakingRewardsFactory',
                compiler: 'Solidity',
                version: '0.5.17',
                balance: '0 Ether',
                txns: '2',
                verified: '12/22/2020',
            },
            {
                address: '0x0e1c7dfdsf230f543…',
                contractName: 'StakingRewardsFactory',
                compiler: 'Solidity',
                version: '0.5.17',
                balance: '0 Ether',
                txns: '2',
                verified: '12/22/2020',
            },
            {
                address: '0x0e1c7dfdsf230f543…',
                contractName: 'StakingRewardsFactory',
                compiler: 'Solidity',
                version: '0.5.17',
                balance: '0 Ether',
                txns: '2',
                verified: '12/22/2020',
            },
            {
                address: '0x0e1c7dfdsf230f543…',
                contractName: 'StakingRewardsFactory',
                compiler: 'Solidity',
                version: '0.5.17',
                balance: '0 Ether',
                txns: '2',
                verified: '12/22/2020',
            },
            {
                address: '0x0e1c7dfdsf230f543…',
                contractName: 'StakingRewardsFactory',
                compiler: 'Solidity',
                version: '0.5.17',
                balance: '0 Ether',
                txns: '2',
                verified: '12/22/2020',
            },
            {
                address: '0x0e1c7dfdsf230f543…',
                contractName: 'StakingRewardsFactory',
                compiler: 'Solidity',
                version: '0.5.17',
                balance: '0 Ether',
                txns: '2',
                verified: '12/22/2020',
            },
            {
                address: '0x0e1c7dfdsf230f543…',
                contractName: 'StakingRewardsFactory',
                compiler: 'Solidity',
                version: '0.5.17',
                balance: '0 Ether',
                txns: '2',
                verified: '12/22/2020',
            },
            {
                address: '0x0e1c7dfdsf230f543…',
                contractName: 'StakingRewardsFactory',
                compiler: 'Solidity',
                version: '0.5.17',
                balance: '0 Ether',
                txns: '2',
                verified: '12/22/2020',
            },
        ];

        const body = (
            <ModalBody>
                <RowBetween>
                    <GrayText>Transfer Ownership</GrayText>
                    <GrayText style={{cursor: 'pointer'}} fontSize={20} onClick={this.handleClose}><IconSM className="fo-x"></IconSM></GrayText>
                </RowBetween>
                <ModalContent>
                    <div style={{border: '3px dashed #D5D5D5', borderRadius: '8px', padding: '20px'}}>
                        <Text fontSize={34}>Contract</Text>
                        <Text fontSize={16}>0x4a756fd10d8477c5c2378808bb42a420cc</Text>
                    </div>
                    <Text fontSize={20} margin={[0, 40, 0, 30]}>New Owner Address</Text>
                    <InputLine></InputLine>
                    <Text fontSize={16} color='#FFAC3D'>Caution: this action cannot be undone.</Text>
                </ModalContent>
                <ModalFooter>
                    Sign and Transfer
                </ModalFooter>
            </ModalBody>
        );
        const TransferModal = (
            <ModalWrapper
                open={openModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </ModalWrapper>
        )
        return (
            <AppBody>
                <Header icon={<img src={ContractManageIcon} width='380' height='60' alt=""/>}></Header>
                <BodyWrapper>
                    {
                        contractList.length > 0 ? (
                            <div>
                                <ContentHeader title='Owner Address' address='0x4a75610d8477c5c2377e85e2bbfc3823493109d75dc3be14c68808bb42a420cc'></ContentHeader>
                                <ContentWrapper>
                                    <Text fontSize={26} marginBottom='20px' marginLeft='10px' marginTop='10px' color='rgba(0, 24, 49, 0.8)'>Your Contracts</Text>
                                    <TableWrapper>
                                        <thead>
                                        <TableHeader>
                                            <ThWrapper style={{paddingLeft: '20px'}}>Address</ThWrapper>
                                            <ThWrapper>Contract Name</ThWrapper>
                                            <ThWrapper>Compiler</ThWrapper>
                                            <ThWrapper>Version</ThWrapper>
                                            <ThWrapper>Balance</ThWrapper>
                                            <ThWrapper>Txns</ThWrapper>
                                            <ThWrapper>Setting</ThWrapper>
                                            <ThWrapper>Verified</ThWrapper>
                                            <ThWrapper>Action</ThWrapper>
                                        </TableHeader>
                                        </thead>
                                        <tbody>
                                        {contractTableList.map((item: any, index: number) => (
                                            <TableTrWrapper key={`${item.address}_${index}`}>
                                                <td><GreenText>{item.address}</GreenText></td>
                                                <td>{item.contractName}</td>
                                                <td>{item.compiler}</td>
                                                <td><IconSM className="fo-alert-triangle" style={{color: '#FFAC3D'}}></IconSM> {item.version}</td>
                                                <td>{item.balance}</td>
                                                <td>{item.txns}</td>
                                                <td><IconGray className="fo-zap"></IconGray> <IconGray className="fo-settings"></IconGray></td>
                                                <td>{item.verified}</td>
                                                <td><TransferBtn onClick={this.handleOpen}>Transfer Ownership</TransferBtn></td>
                                            </TableTrWrapper>
                                        ))}
                                        </tbody>
                                    </TableWrapper>
                                    {TransferModal}
                                    <TableBottomComponent></TableBottomComponent>
                                </ContentWrapper>
                            </div>
                        ) : (
                            <ContentWrapperNull>
                                <Row>
                                    <img height={300} width={400} src={ConnectImg} alt=""/>
                                    <div style={{marginLeft: '76px'}}>
                                        <Text fontSize={40} fontWeight='bold' color='rgba(0, 24, 49, 0.9)'>Please Connect wallet</Text>
                                        <Text fontSize={18} lineHeight='30px' color='rgba(0, 24, 49, 0.6)'>To manage your contracts,</Text>
                                        <Text fontSize={18} lineHeight='30px' color='rgba(0, 24, 49, 0.6)'>Please connect to your CloverScan wallet first</Text>
                                        <ConnectBtn>Connect to a wallet</ConnectBtn>
                                    </div>
                                </Row>
                            </ContentWrapperNull>
                        )
                    }
                </BodyWrapper>
            </AppBody>
        );
    }
}
