import React, {Component} from 'react'
import styled from 'styled-components'
import AppBody from '../AppBody'
import Row, {RowBetween} from '../../components/Row'
import {Text} from "rebass";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import withStyles from '@material-ui/core/styles/withStyles';
import Header from '../../components/Header'
import SearchComponent from '../../components/Search'
import ContentHeader from "../../components/ContentHeader";
import {GrayText, GreenText} from "../../components/TextColor";
import ArrowDown from "../../assets/images/arrow_down.svg";
import MenuItem from "@material-ui/core/MenuItem";
import TokenIcon from "../../assets/images/token_icon.svg";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import TableBottomComponent from "../../components/TableBottom";
import CloverLogo from "../../assets/images/clover_logo.svg";
import {IconGray, IconSM} from "../../components/IconSpan";

const BodyWrapper = styled.div`
  width: 1240px;
  margin: 50px auto 20px;
`;

const ContentWrapper = styled.div`
  padding: 20px;
  background: #FFFFFF;
  border-radius: 8px;
`;

const ContentTop = styled.div`
  height: 265px;
  background: #FFFFFF;
  box-shadow: 0px 2px 7px 0px #E9EDEA;
  border-radius: 8px;
  padding: 20px;
`;

const ContentTopItem = styled(Row)`
  padding: 10px 20px;
  height: 50px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #E6E8ED;
`;

const TokenSelect = styled(Select)`
  width: 323px;
  height: 32px;
  padding: 4px 8px;
  font-size: 14px;
  border-radius: 2px;
  border: 1px solid #E6E8ED;
`;

const SelectItemBtn = styled.span`
  display: inline-block;
  width: 52px;
  height: 27px;
  background: #FFAC3D;
  border-radius: 4px;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  line-height: 27px;
  margin-left: 5px;
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

const ThFilterWrapper = styled.th`
  color: rgba(0, 24, 49, 0.5);
  font-size: 16px;
  font-weight: bold;
  position: relative;
  cursor: pointer;
`;

const TableTrWrapper = styled.tr`
  line-height: 55px;
  vertical-align: top;
  border-bottom: 1px solid #E8EAEE;
  &:last-child {
    border-bottom: none;
  }
`;

const OwnershipBtn = styled.div`
  width: 232px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  color: #ffffff;
  font-size: 16px;
  background: linear-gradient(180deg, #76B96D 0%, #4BA871 100%);
  border-radius: 6px;
`;

const FilterModalWrapper = styled.div`
  position: absolute;
  top: 40px;
  width: 218px;
  height: 103px;
  background: #FFFFFF;
  box-shadow: 0px 2px 7px 0px #E9EDEA;
  border-radius: 4px;
  padding: 15px 10px;
`;

const FilterSearchInput = styled.input`
  text-overflow: ellipsis;
  font-size: 14px;
  background: transparent;
  color: #333333;
  width: 100%;
  height: 31px;
  border-radius: 2px;
  border: 1px solid #E6E8ED;
  text-indent: 10px;
  margin-bottom: 10px;

  ::placeholder {
    color: rgba(0, 24, 49, 0.5);
  }
`;

const FilterButton = styled.div`
  width: 94px;
  height: 30px;
  background: linear-gradient(180deg, #76B96D 0%, #4BA871 100%);
  border-radius: 4px;
  cursor: pointer;
  color: #ffffff;
  line-height: 30px;
  text-align: center;
  &:hover {
    background: #368949;
  }
`;

const ClearButton = styled.div`
  width: 94px;
  height: 30px;
  background: #FFAC3D;
  color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  line-height: 30px;
  text-align: center;
  &:hover {
    background-color: #CE8729;
  }
`;

const StatusOutBtn = styled.div`
  display: inline-block;
  width: 41px;
  height: 24px;
  background: #FFF0D8;
  border-radius: 4px;
  text-align: center;
  line-height: 24px;
  color: #FFAC3D;
  font-size: 16px;
`;

const StatusInBtn = styled.div`
  display: inline-block;
  width: 41px;
  height: 24px;
  background: #DAE1FD;
  border-radius: 4px;
  text-align: center;
  line-height: 24px;
  color: #5B7AE4;
  font-size: 16px;
`;

export default class OwnerAddress extends Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            tabList: [
                {tabName: "Transactions", id: 1},
                {tabName: "Owner Contract", id: 2},
            ],
            currencyToken: '1',
            currentTabIndex: 0,
            openFromFilter: false,
            openToFilter: false,
            fromSearchStr: '',
            toSearchStr: '',
        }
    }

    handleChange = (event: any, value: any) => {
        this.setState({
            currentTabIndex: value
        });
    };

    handleChangeToken = (event: any) => {
        this.setState({
            currencyToken: event.target.value
        });
    };

    handleFromClick = (event: any) => {
        event.stopPropagation();
        event.preventDefault();
        const { openFromFilter } = this.state;
        this.setState({
            openFromFilter: !openFromFilter
        })
    };

    handleToClick = (event: any) => {
        event.stopPropagation();
        event.preventDefault();
        const { openToFilter } = this.state;
        this.setState({
            openToFilter: !openToFilter
        })
    };

    changeFromSearchStr = (event: any) => {
        this.setState({
            fromSearchStr: event.target.value
        })
    }

    changeToSearchStr = (event: any) => {
        this.setState({
            toSearchStr: event.target.value
        })
    }

    filterSearch = () => {
        console.log(this.state);
    }

    render() {
        const { tabList, currentTabIndex, currencyToken, openFromFilter, openToFilter } = this.state;
        const AntTab = withStyles((theme) => ({
            root: {
                textTransform: 'none',
                fontSize: '15px',
                color: 'rgba(0, 24, 49, 0.4)',
                fontWeight: 'bold',
                '&$selected': {
                    color: '#4BA870',
                },
            },
            selected: {},
        }))(Tab);
        const StyledTabs = withStyles({
            indicator: {
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#4BA870',
                position: 'absolute',
                bottom: '-2px',
                left: '0',
            },
            root: {
                overflow: 'visible',
                margin: '20px 0',
                borderBottom: '2px solid #E6E8ED',
                '& > div': {
                    overflow: 'visible!important'
                },
            }
        })((props) => <Tabs {...props} value={currentTabIndex} onChange={this.handleChange}/>);
        const BootstrapInput = withStyles((theme) => ({
            input: {
                position: 'relative',
                border: 'none',
                fontSize: '16px',
                color: '#001831',
                width: '100%',
                '&:focus': {
                    backgroundColor: 'transparent'
                },
            },
        }))(InputBase);
        const transactionTableList = [
            {
                txnHash: '0x0e1c7dfdsf230f543…',
                block: '11456677',
                age: '1 sec ago',
                from: '0x0e1c7dfdsf230f543…',
                status: 'Out',
                to: 'Uniswap V2: Router 2',
                value: '0 Ether',
                txnFee: '0.8475655847',
            },
            {
                txnHash: '0x0e1c7dfdsf230f543…',
                block: '11456677',
                age: '1 sec ago',
                from: '0x0e1c7dfdsf230f543…',
                status: 'Out',
                to: 'Uniswap V2: Router 2',
                value: '0 Ether',
                txnFee: '0.8475655847',
            },
            {
                txnHash: '0x0e1c7dfdsf230f543…',
                block: '11456677',
                age: '1 sec ago',
                from: '0x0e1c7dfdsf230f543…',
                status: 'Out',
                to: 'Uniswap V2: Router 2',
                value: '0 Ether',
                txnFee: '0.8475655847',
            },
            {
                txnHash: '0x0e1c7dfdsf230f543…',
                block: '11456677',
                age: '1 sec ago',
                from: '0x0e1c7dfdsf230f543…',
                status: 'Out',
                to: 'Uniswap V2: Router 2',
                value: '0 Ether',
                txnFee: '0.8475655847',
            },
            {
                txnHash: '0x0e1c7dfdsf230f543…',
                block: '11456677',
                age: '1 sec ago',
                from: '0x0e1c7dfdsf230f543…',
                status: 'In',
                to: 'Uniswap V2: Router 2',
                value: '0 Ether',
                txnFee: '0.8475655847',
            },
            {
                txnHash: '0x0e1c7dfdsf230f543…',
                block: '11456677',
                age: '1 sec ago',
                from: '0x0e1c7dfdsf230f543…',
                status: 'Out',
                to: 'Uniswap V2: Router 2',
                value: '0 Ether',
                txnFee: '0.8475655847',
            },
            {
                txnHash: '0x0e1c7dfdsf230f543…',
                block: '11456677',
                age: '1 sec ago',
                from: '0x0e1c7dfdsf230f543…',
                status: 'Out',
                to: 'Uniswap V2: Router 2',
                value: '0 Ether',
                txnFee: '0.8475655847',
            },
            {
                txnHash: '0x0e1c7dfdsf230f543…',
                block: '11456677',
                age: '1 sec ago',
                from: '0x0e1c7dfdsf230f543…',
                status: 'Out',
                to: 'Uniswap V2: Router 2',
                value: '0 Ether',
                txnFee: '0.8475655847',
            },
            {
                txnHash: '0x0e1c7dfdsf230f543…',
                block: '11456677',
                age: '1 sec ago',
                from: '0x0e1c7dfdsf230f543…',
                status: 'Out',
                to: 'Uniswap V2: Router 2',
                value: '0 Ether',
                txnFee: '0.8475655847',
            },
            {
                txnHash: '0x0e1c7dfdsf230f543…',
                block: '11456677',
                age: '1 sec ago',
                from: '0x0e1c7dfdsf230f543…',
                status: 'In',
                to: 'Uniswap V2: Router 2',
                value: '0 Ether',
                txnFee: '0.8475655847',
            },
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
                audited: '_',
                license: 'None',
            },
            {
                address: '0x0e1c7dfdsf230f543…',
                contractName: 'StakingRewardsFactory',
                compiler: 'Solidity',
                version: '0.5.17',
                balance: '0 Ether',
                txns: '2',
                verified: '12/22/2020',
                audited: '_',
                license: 'None',
            },
            {
                address: '0x0e1c7dfdsf230f543…',
                contractName: 'StakingRewardsFactory',
                compiler: 'Solidity',
                version: '0.5.17',
                balance: '0 Ether',
                txns: '2',
                verified: '12/22/2020',
                audited: '_',
                license: 'None',
            },
            {
                address: '0x0e1c7dfdsf230f543…',
                contractName: 'StakingRewardsFactory',
                compiler: 'Solidity',
                version: '0.5.17',
                balance: '0 Ether',
                txns: '2',
                verified: '12/22/2020',
                audited: '_',
                license: 'None',
            },
            {
                address: '0x0e1c7dfdsf230f543…',
                contractName: 'StakingRewardsFactory',
                compiler: 'Solidity',
                version: '0.5.17',
                balance: '0 Ether',
                txns: '2',
                verified: '12/22/2020',
                audited: '_',
                license: 'None',
            },
            {
                address: '0x0e1c7dfdsf230f543…',
                contractName: 'StakingRewardsFactory',
                compiler: 'Solidity',
                version: '0.5.17',
                balance: '0 Ether',
                txns: '2',
                verified: '12/22/2020',
                audited: '_',
                license: 'None',
            },
            {
                address: '0x0e1c7dfdsf230f543…',
                contractName: 'StakingRewardsFactory',
                compiler: 'Solidity',
                version: '0.5.17',
                balance: '0 Ether',
                txns: '2',
                verified: '12/22/2020',
                audited: '_',
                license: 'None',
            },
            {
                address: '0x0e1c7dfdsf230f543…',
                contractName: 'StakingRewardsFactory',
                compiler: 'Solidity',
                version: '0.5.17',
                balance: '0 Ether',
                txns: '2',
                verified: '12/22/2020',
                audited: '_',
                license: 'None',
            },
            {
                address: '0x0e1c7dfdsf230f543…',
                contractName: 'StakingRewardsFactory',
                compiler: 'Solidity',
                version: '0.5.17',
                balance: '0 Ether',
                txns: '2',
                verified: '12/22/2020',
                audited: '_',
                license: 'None',
            },
            {
                address: '0x0e1c7dfdsf230f543…',
                contractName: 'StakingRewardsFactory',
                compiler: 'Solidity',
                version: '0.5.17',
                balance: '0 Ether',
                txns: '2',
                verified: '12/22/2020',
                audited: '_',
                license: 'None',
            },
        ];
        const FilterModal = (str: string) => {
            return (
                <FilterModalWrapper style={{left: str === 'from' ? '40px' : '20px'}}>
                    <FilterSearchInput placeholder='Search by address e.g. 0x..' onChange={str === 'from' ? this.changeFromSearchStr : this.changeToSearchStr}/>
                    <RowBetween>
                        <FilterButton onClick={this.filterSearch}><IconSM className="fo-filter"></IconSM> Filter</FilterButton>
                        <ClearButton>Clear</ClearButton>
                    </RowBetween>
                </FilterModalWrapper>
            );
        }
        return (
            <AppBody>
                <Header icon={<img src={CloverLogo} width='151' height='38' alt=""/>} headerRight={<SearchComponent></SearchComponent>}></Header>
                <BodyWrapper>
                    <ContentHeader title='Owner Address' address='0x4a75610d8477c5c2377e85e2bbfc3823493109d75dc3be14c68808bb42a420cc'></ContentHeader>
                    <ContentTop>
                        <Text fontSize={26} color='#001831' marginBottom='30px'>Overview</Text>
                        <ContentTopItem>
                            <GrayText style={{width: '150px'}}>Balance</GrayText>
                            <Text color='#001831' fontSize={16}>0 Ether</Text>
                        </ContentTopItem>
                        <Line></Line>
                        <ContentTopItem>
                            <GrayText style={{width: '150px'}}>Ether Value</GrayText>
                            <Text color='#001831' fontSize={16}>$0.00</Text>
                        </ContentTopItem>
                        <Line></Line>
                        <ContentTopItem>
                            <GrayText style={{width: '150px'}}>Token</GrayText>
                            <TokenSelect
                                value={currencyToken}
                                onChange={this.handleChangeToken}
                                input={<BootstrapInput />}
                                IconComponent={() => (<img src={ArrowDown} width='10px' height='6px' style={{position: 'absolute', right: '10px'}} />)}
                            >
                                <MenuItem style={{width: '100%'}} value='1'>$21.92 <SelectItemBtn> &gt;100 </SelectItemBtn></MenuItem>
                                <MenuItem style={{width: '100%'}} value='2'>$1111 <SelectItemBtn> &gt;100 </SelectItemBtn></MenuItem>
                                <MenuItem style={{width: '100%'}} value='3'>$2222 <SelectItemBtn> &gt;100 </SelectItemBtn></MenuItem>
                            </TokenSelect>
                            <img src={TokenIcon} height={32} width={32} style={{marginLeft: '8px'}} alt=""/>
                        </ContentTopItem>
                    </ContentTop>
                    <StyledTabs>
                        {tabList.map((res: any) => (
                            <AntTab key={res.tabName} label={res.tabName} />
                        ))}
                    </StyledTabs>
                    {
                        currentTabIndex === 0 ? (
                            <ContentWrapper>
                                <TableWrapper>
                                    <thead>
                                    <TableHeader>
                                        <ThWrapper style={{paddingLeft: '20px'}}>Txn Hash</ThWrapper>
                                        <ThWrapper>Block</ThWrapper>
                                        <ThWrapper>Age</ThWrapper>
                                        <ThFilterWrapper>
                                            <Text onClick={this.handleFromClick}>From {currentTabIndex === 0 ? <IconSM className="fo-filter"></IconSM> : null}</Text>
                                            {openFromFilter && (currentTabIndex === 0) ? FilterModal('from') : null}
                                        </ThFilterWrapper>
                                        <ThWrapper></ThWrapper>
                                        <ThFilterWrapper>
                                            <Text onClick={this.handleToClick}>To {currentTabIndex === 0 ? <IconSM className="fo-filter"></IconSM> : null}</Text>
                                            {openToFilter && (currentTabIndex === 0) ? FilterModal('to') : null}
                                        </ThFilterWrapper>
                                        <ThWrapper>Value</ThWrapper>
                                        <ThWrapper>Txn Fee</ThWrapper>
                                    </TableHeader>
                                    </thead>
                                    <tbody>
                                    {transactionTableList.map((item: any, index: number) => (
                                        <TableTrWrapper key={`${item.txnHash}_${index}`}>
                                            <td><GreenText><IconGray className="fo-eye"></IconGray> {item.txnHash}</GreenText></td>
                                            <td><GreenText>{item.block}</GreenText></td>
                                            <td>{item.age}</td>
                                            <td><GreenText>{item.from}</GreenText></td>
                                            <td>{item.status === 'Out' ? <StatusOutBtn>{item.status}</StatusOutBtn> : <StatusInBtn>{item.status}</StatusInBtn>}</td>
                                            <td><GreenText>{item.to}</GreenText></td>
                                            <td>{item.value}</td>
                                            <td>{item.txnFee}</td>
                                        </TableTrWrapper>
                                    ))}
                                    </tbody>
                                </TableWrapper>
                                <TableBottomComponent></TableBottomComponent>
                            </ContentWrapper>
                        ) : (
                            <ContentWrapper>
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
                                        <ThWrapper>Audited <IconSM className="fo-info"></IconSM></ThWrapper>
                                        <ThWrapper>License <IconSM className="fo-info"></IconSM></ThWrapper>
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
                                            <td>{item.audited}</td>
                                            <td>{item.license}</td>
                                        </TableTrWrapper>
                                    ))}
                                    </tbody>
                                </TableWrapper>
                                <TableBottomComponent></TableBottomComponent>
                            </ContentWrapper>
                        )
                    }
                </BodyWrapper>
            </AppBody>
        );
    }
}
