import React, {Component} from 'react'
import styled from 'styled-components'
import AppBody from '../AppBody'
import { AutoColumn } from '../../components/Column'
import Row, { RowBetween } from '../../components/Row'
import { IconSM, IconGray } from '../../components/IconSpan'
import {GreenText, GreenTextInline, OrangeText, PinkText, GrayText} from '../../components/TextColor'
import {Text} from "rebass";
import ArrowDown from "../../assets/images/arrow_down.svg";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import withStyles from '@material-ui/core/styles/withStyles';
import InputBase from '@material-ui/core/InputBase';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Header from '../../components/Header'
import SearchComponent from '../../components/Search'
import ContentHeader from '../../components/ContentHeader'
import TableBottomComponent from '../../components/TableBottom'
import CloverLogo from "../../assets/images/clover_logo.svg";

const BodyWrapper = styled.div`
  width: 1240px;
  margin: 50px auto 20px;
`;

const ContentTop = styled.div`
  height: 265px;
  background: #FFFFFF;
  box-shadow: 0px 2px 7px 0px #E9EDEA;
  border-radius: 8px;
  padding: 30px;
`;

const ContentTopItem = styled(Row)`
  padding: 10px 20px;
  height: 50px;
  width: 540px;
  border-bottom: 1px solid #E6E8ED;
  &:last-child {
    border-bottom: none;
  }
`;

const ContentWrapper = styled.div`
  padding: 20px;
  background: #FFFFFF;
  border-radius: 8px;
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

const TokenSelect = styled(Select)`
  width: 323px;
  height: 32px;
  padding: 4px 8px;
  font-size: 14px;
  border-radius: 2px;
  border: 1px solid #E6E8ED;
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

const OwnershipBtn = styled.div`
  width: 232px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  color: #ffffff;
  font-size: 16px;
  background: linear-gradient(187deg, #76B96D 0%, #4BA871 100%);
  border-radius: 6px;
  cursor: pointer;
`;

const HashTime = styled.div`
  width: 93px;
  height: 20px;
  line-height: 20px;
  background: #F5F5F5;
  border-radius: 4px;
  font-size: 14px;
  color: rgba(0, 24, 49, 0.5);
  text-align: center;
`;

const HistoryBtn = styled(Row)`
  cursor: pointer;
  color: #7F8B98;
`;

const CodeWrapper = styled.div`
  width: 100%;
  overflow-y: scroll;
  vertical-align: top;
  border-color: #E6E8ED;
  background-color: #F9F9F9;
  border-radius: 5px;
  margin-top: 20px;
  padding: 20px;
  font-size: 14px;
`;

export default class Contract extends Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            tabList: [
                {tabName: "Transactions", id: 1},
                {tabName: "Internal Txns", id: 2},
                {tabName: "Contract", id: 3},
                {tabName: "Events", id: 4}
            ],
            currencyToken: '1',
            currentTabIndex: 0,
            openFromFilter: false,
            openToFilter: false,
            fromSearchStr: '',
            toSearchStr: '',
            activeIndex: null,
            showAddresses: false
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

    handleShowAddress = (index: number) => {
        const { activeIndex, showAddresses } = this.state;
        this.setState({
            activeIndex: index,
            showAddresses: !showAddresses
        })
    }

    handleToHistory = () => {
        this.props.history.push('/ownershipHistory');
    }

    handleToTransaction = () => {
        this.props.history.push('/transactionDetails');
    }

    handleToOwner = () => {
        this.props.history.push('/ownerAddress');
    }

    render() {
        const { tabList, currentTabIndex, currencyToken, openFromFilter, openToFilter, activeIndex, showAddresses } = this.state;
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
        const AddressDetail = (
            <div>
                <Text fontSize={16} lineHeight={'30px'} color="#001831">0.00012 CLV to <GreenTextInline>0xad945745...</GreenTextInline></Text>
                <Text fontSize={16} lineHeight={'30px'} color="#001831">0.00012 CLV to <GreenTextInline>0xad945745...</GreenTextInline></Text>
            </div>
        );

        const tableList = [
            {
                txnHash: '0x0e1c7dfdsf230f543…',
                block: '11456677',
                age: '1 sec ago',
                from: '0x0e1c7dfdsf230f543…',
                to: 'Uniswap V2: Router 2',
                value: '0 Ether',
                txnFee: '0.8475655847',
                dustrubution: 'to 2 addresses',
            },
            {
                txnHash: '0x0e1c7dfdsf230f543…',
                block: '11456677',
                age: '1 sec ago',
                from: '0x0e1c7dfdsf230f543…',
                to: 'Uniswap V2: Router 2',
                value: '0 Ether',
                txnFee: '0.8475655847',
                dustrubution: 'to 2 addresses',
            },
            {
                txnHash: '0x0e1c7dfdsf230f543…',
                block: '11456677',
                age: '1 sec ago',
                from: '0x0e1c7dfdsf230f543…',
                to: 'Uniswap V2: Router 2',
                value: '0 Ether',
                txnFee: '0.8475655847',
                dustrubution: 'to 2 addresses',
            },
            {
                txnHash: '0x0e1c7dfdsf230f543…',
                block: '11456677',
                age: '1 sec ago',
                from: '0x0e1c7dfdsf230f543…',
                to: 'Uniswap V2: Router 2',
                value: '0 Ether',
                txnFee: '0.8475655847',
                dustrubution: 'to 2 addresses',
            },
            {
                txnHash: '0x0e1c7dfdsf230f543…',
                block: '11456677',
                age: '1 sec ago',
                from: '0x0e1c7dfdsf230f543…',
                to: 'Uniswap V2: Router 2',
                value: '0 Ether',
                txnFee: '0.8475655847',
                dustrubution: 'to 2 addresses',
            },
            {
                txnHash: '0x0e1c7dfdsf230f543…',
                block: '11456677',
                age: '1 sec ago',
                from: '0x0e1c7dfdsf230f543…',
                to: 'Uniswap V2: Router 2',
                value: '0 Ether',
                txnFee: '0.8475655847',
                dustrubution: 'to 2 addresses',
            },
            {
                txnHash: '0x0e1c7dfdsf230f543…',
                block: '11456677',
                age: '1 sec ago',
                from: '0x0e1c7dfdsf230f543…',
                to: 'Uniswap V2: Router 2',
                value: '0 Ether',
                txnFee: '0.8475655847',
                dustrubution: 'to 2 addresses',
            },
            {
                txnHash: '0x0e1c7dfdsf230f543…',
                block: '11456677',
                age: '1 sec ago',
                from: '0x0e1c7dfdsf230f543…',
                to: 'Uniswap V2: Router 2',
                value: '0 Ether',
                txnFee: '0.8475655847',
                dustrubution: 'to 2 addresses',
            },
            {
                txnHash: '0x0e1c7dfdsf230f543…',
                block: '11456677',
                age: '1 sec ago',
                from: '0x0e1c7dfdsf230f543…',
                to: 'Uniswap V2: Router 2',
                value: '0 Ether',
                txnFee: '0.8475655847',
                dustrubution: 'to 2 addresses',
            },
            {
                txnHash: '0x0e1c7dfdsf230f543…',
                block: '11456677',
                age: '1 sec ago',
                from: '0x0e1c7dfdsf230f543…',
                to: 'Uniswap V2: Router 2',
                value: '0 Ether',
                txnFee: '0.8475655847',
                dustrubution: 'to 2 addresses',
            },
            {
                txnHash: '0x0e1c7dfdsf230f543…',
                block: '11456677',
                age: '1 sec ago',
                from: '0x0e1c7dfdsf230f543…',
                to: 'Uniswap V2: Router 2',
                value: '0 Ether',
                txnFee: '0.8475655847',
                dustrubution: 'to 2 addresses',
            },
        ];

        const EventsAddress = (
            <div style={{lineHeight: '25px', marginBottom: '20px', marginLeft: '20px'}}>
                <Text fontSize={14}><GrayText>address</GrayText> previousOwner</Text>
                <GreenTextInline fontSize={14}>0x000000000000000000000000000000000000000000000000</GreenTextInline>
                <Text fontSize={14}><GrayText>address</GrayText> previousOwner</Text>
                <GreenTextInline fontSize={14}>0x000000000000000000000000000000000000000000000000</GreenTextInline>
            </div>
        );

        const CodeContent = (
            <div>
                <Text>
                    * Emits a `{'{'}`Transfer`{'}'}` event.<br/>
                    */<br/>
                    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);<br/><br/>

                    /**<br/>
                    * @dev Emitted when `value` tokens are moved from one account (`from`) to<br/>
                    * another (`to`).<br/>
                    *<br/>
                    * Note that `value` may be zero.<br/>
                    */<br/>
                    event Transfer(address indexed from, address indexed to, uint256 value);<br/><br/>

                    /**<br/>
                    * @dev Emitted when the allowance of a `spender` for an `owner` is set by<br/>
                    * a call to `{'{'}`approve`{'}'}`. `value` is the new allowance.<br/>
                    */<br/>
                    event Approval(address indexed owner, address indexed spender, uint256 value);<br/>
                </Text>
            </div>
        )

        return (
            <AppBody>
                <Header icon={<img src={CloverLogo} width='151' height='38' alt=""/>} headerRight={<SearchComponent></SearchComponent>}></Header>
                <BodyWrapper>
                    <ContentHeader title='Contract' address='0x4a75610d8477c5c2377e85e2bbfc3823493109d75dc3be14c68808bb42a420cc'></ContentHeader>
                    <ContentTop>
                        <RowBetween style={{marginBottom: '20px'}}>
                            <Text fontSize={26} color='#001831'>Overview</Text>
                            <Text fontSize={16} color='#001831' verticalAlign='middle' style={{lineHeight: '30px'}}>Uniswap V2: Router 2 <IconSM className="fo-share"></IconSM></Text>
                        </RowBetween>
                        <RowBetween>
                           <AutoColumn>
                               <ContentTopItem>
                                   <GrayText style={{width: '150px'}}>Balance</GrayText>
                                   <Text color='#001831' fontSize={16}>0 Ether</Text>
                               </ContentTopItem>
                               <ContentTopItem>
                                   <GrayText style={{width: '150px'}}>Ether Value</GrayText>
                                   <Text color='#001831' fontSize={16}>$0.00</Text>
                               </ContentTopItem>
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
                                   <IconGray className="fo-maximize"></IconGray>
                                   {/*<img src={TokenIcon} height={32} width={32} style={{marginLeft: '8px'}} alt=""/>*/}
                               </ContentTopItem>
                           </AutoColumn>
                           <AutoColumn>
                               <ContentTopItem>
                                   <GrayText style={{width: '150px'}}>Total Revenue</GrayText>
                                   <Text color='#001831' fontSize={16}>52.0612 CLV</Text>
                               </ContentTopItem>
                               <ContentTopItem>
                                   <GrayText style={{width: '150px'}}>Contract Creator</GrayText>
                                   <Row>
                                       <GreenText onClick={this.handleToOwner}>0x9ckfdf97774jjd… </GreenText>
                                       <Text color='#001831' fontSize={16} margin={[0, '5px', 0, '5px']}>at txn </Text>
                                       <GreenText onClick={this.handleToTransaction}>0x9ckfdf97774jjd… </GreenText>
                                   </Row>
                               </ContentTopItem>
                               <ContentTopItem>
                                   <GrayText style={{width: '150px'}}>Owner</GrayText>
                                   <GreenText style={{width: '270px'}} onClick={this.handleToOwner}>0x9ckfdf97774jjd… </GreenText>
                                   <HistoryBtn onClick={this.handleToHistory}>
                                       <IconSM className="fo-clock"></IconSM>
                                       <Text marginLeft="5px">History</Text>
                                   </HistoryBtn>
                               </ContentTopItem>
                           </AutoColumn>
                       </RowBetween>
                    </ContentTop>
                    <StyledTabs>
                        {tabList.map((res: any) => (
                            <AntTab key={res.tabName} label={res.tabName} />
                        ))}
                    </StyledTabs>
                    {
                        currentTabIndex === 0  || currentTabIndex === 1 ? (
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
                                            <ThFilterWrapper>
                                                <Text onClick={this.handleToClick}>To {currentTabIndex === 0 ? <IconSM className="fo-filter"></IconSM> : null}</Text>
                                                {openToFilter && (currentTabIndex === 0) ? FilterModal('to') : null}
                                            </ThFilterWrapper>
                                            <ThWrapper>Value</ThWrapper>
                                            <ThWrapper>Txn Fee</ThWrapper>
                                            <ThWrapper>Txn Fee dustrubution</ThWrapper>
                                        </TableHeader>
                                    </thead>
                                    <tbody>
                                        {tableList.map((item: any, index: number) => (
                                            <TableTrWrapper key={`${item.txnHash}_${index}`}>
                                                <td style={{cursor: 'pointer'}} onClick={this.handleToTransaction}><GreenText><IconGray className="fo-eye"></IconGray> {item.txnHash}</GreenText></td>
                                                <td><GreenText>{item.block}</GreenText></td>
                                                <td>{item.age}</td>
                                                <td><GreenText>{item.from}</GreenText></td>
                                                <td><GreenText>{item.to}</GreenText></td>
                                                <td>{item.value}</td>
                                                <td>{item.txnFee}</td>
                                                <td style={{ width: '250px' }}>
                                                    <Text style={{cursor: 'pointer'}} onClick={() => { this.handleShowAddress(index) }}>{item.dustrubution} <IconSM className={showAddresses && (activeIndex === index) ? "fo-chevron-up" : "fo-chevron-down"}></IconSM></Text>
                                                    {showAddresses && (activeIndex === index) ? AddressDetail : null}
                                                </td>
                                            </TableTrWrapper>
                                        ))}
                                    </tbody>
                                </TableWrapper>
                                <TableBottomComponent></TableBottomComponent>
                            </ContentWrapper>
                        ) : currentTabIndex === 2 ? (
                            <ContentWrapper>
                                <OwnershipBtn>Transfer Ownership inDApp</OwnershipBtn>
                                <CodeWrapper>{CodeContent}</CodeWrapper>
                            </ContentWrapper>
                        ) : (
                            <ContentWrapper>
                                <TableWrapper>
                                    <thead>
                                        <TableHeader>
                                            <ThWrapper style={{paddingLeft: '10px'}}>Txn Hash</ThWrapper>
                                            <ThWrapper>Method</ThWrapper>
                                            <ThWrapper>Logs</ThWrapper>
                                        </TableHeader>
                                    </thead>
                                    <tbody>
                                        <TableTrWrapper>
                                            <td style={{width: '250px'}}>
                                                <GreenText>0x0e1c7dfdsf230f543…</GreenText>
                                                <Text lineHeight='30px'># <GreenTextInline>11502111</GreenTextInline></Text>
                                                <HashTime>23 mins age</HashTime>
                                            </td>
                                            <td style={{width: '200px'}}><Text>0x60806040</Text></td>
                                            <td>
                                                <div style={{cursor: 'pointer'}} onClick={() => { this.handleShowAddress(0) }}>
                                                    <IconSM className={showAddresses && (activeIndex === 0) ? "fo-chevron-down" : "fo-chevron-right"} style={{marginRight: '10px'}}></IconSM>
                                                    <Text style={{display: 'inline-block', marginRight: '5px'}}>
                                                        OwnershipTransferred (index_topic_1
                                                    </Text>
                                                    <PinkText>address</PinkText> <OrangeText>previousOwner</OrangeText>
                                                    <Text style={{display: 'inline-block', marginRight: '5px'}}>, index_topic_2</Text>
                                                    <PinkText>address</PinkText> <OrangeText>newOwner)</OrangeText>
                                                </div>
                                                {showAddresses && (activeIndex === 0) ? EventsAddress : null}
                                                <div style={{marginBottom: '20px'}}>
                                                    <Text lineHeight='25px' fontSize={14}>[topic0] 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef</Text>
                                                    <Text lineHeight='25px' fontSize={14}>[topic1] 0x0000000000000000000000000000000000000000000000000000000000000000</Text>
                                                    <Text lineHeight='25px' fontSize={14}>[topic2] 0x00000000000000000000000065892f21a1d6ce485f21e6643d5789962b401321</Text>
                                                </div>
                                            </td>
                                        </TableTrWrapper>
                                        <TableTrWrapper>
                                            <td style={{width: '250px'}}>
                                                <GreenText>0x0e1c7dfdsf230f543…</GreenText>
                                                <Text lineHeight='30px'># <GreenTextInline>11502111</GreenTextInline></Text>
                                                <HashTime>23 mins age</HashTime>
                                            </td>
                                            <td style={{width: '200px'}}><Text>0x60806040</Text></td>
                                            <td>
                                                <div style={{cursor: 'pointer'}} onClick={() => { this.handleShowAddress(1) }}>
                                                    <IconSM className={showAddresses && (activeIndex === 1) ? "fo-chevron-down" : "fo-chevron-right"} style={{marginRight: '10px'}}></IconSM>
                                                    <Text style={{display: 'inline-block', marginRight: '5px'}}>
                                                        OwnershipTransferred (index_topic_1
                                                    </Text>
                                                    <PinkText>address</PinkText> <OrangeText>previousOwner</OrangeText>
                                                    <Text style={{display: 'inline-block', marginRight: '5px'}}>, index_topic_2</Text>
                                                    <PinkText>address</PinkText> <OrangeText>newOwner)</OrangeText>
                                                </div>
                                                {showAddresses && (activeIndex === 1) ? EventsAddress : null}
                                                <div style={{marginBottom: '20px'}}>
                                                    <Text lineHeight='25px' fontSize={14}>[topic0] 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef</Text>
                                                    <Text lineHeight='25px' fontSize={14}>[topic1] 0x0000000000000000000000000000000000000000000000000000000000000000</Text>
                                                    <Text lineHeight='25px' fontSize={14}>[topic2] 0x00000000000000000000000065892f21a1d6ce485f21e6643d5789962b401321</Text>
                                                </div>
                                            </td>
                                        </TableTrWrapper>
                                        <TableTrWrapper>
                                            <td style={{width: '250px'}}>
                                                <GreenText>0x0e1c7dfdsf230f543…</GreenText>
                                                <Text lineHeight='30px'># <GreenTextInline>11502111</GreenTextInline></Text>
                                                <HashTime>23 mins age</HashTime>
                                            </td>
                                            <td style={{width: '200px'}}><Text>0x60806040</Text></td>
                                            <td>
                                                <div style={{cursor: 'pointer'}} onClick={() => { this.handleShowAddress(2) }}>
                                                    <IconSM className={showAddresses && (activeIndex === 2) ? "fo-chevron-down" : "fo-chevron-right"} style={{marginRight: '10px'}}></IconSM>
                                                    <Text style={{display: 'inline-block', marginRight: '5px'}}>
                                                        OwnershipTransferred (index_topic_1
                                                    </Text>
                                                    <PinkText>address</PinkText> <OrangeText>previousOwner</OrangeText>
                                                    <Text style={{display: 'inline-block', marginRight: '5px'}}>, index_topic_2</Text>
                                                    <PinkText>address</PinkText> <OrangeText>newOwner)</OrangeText>
                                                </div>
                                                {showAddresses && (activeIndex === 2) ? EventsAddress : null}
                                                <div style={{marginBottom: '20px'}}>
                                                    <Text lineHeight='25px' fontSize={14}>[topic0] 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef</Text>
                                                    <Text lineHeight='25px' fontSize={14}>[topic1] 0x0000000000000000000000000000000000000000000000000000000000000000</Text>
                                                    <Text lineHeight='25px' fontSize={14}>[topic2] 0x00000000000000000000000065892f21a1d6ce485f21e6643d5789962b401321</Text>
                                                </div>
                                            </td>
                                        </TableTrWrapper>
                                        <TableTrWrapper>
                                            <td style={{width: '250px'}}>
                                                <GreenText>0x0e1c7dfdsf230f543…</GreenText>
                                                <Text lineHeight='30px'># <GreenTextInline>11502111</GreenTextInline></Text>
                                                <HashTime>23 mins age</HashTime>
                                            </td>
                                            <td style={{width: '200px'}}><Text>0x60806040</Text></td>
                                            <td>
                                                <div style={{cursor: 'pointer'}} onClick={() => { this.handleShowAddress(3) }}>
                                                    <IconSM className={showAddresses && (activeIndex === 3) ? "fo-chevron-down" : "fo-chevron-right"} style={{marginRight: '10px'}}></IconSM>
                                                    <Text style={{display: 'inline-block', marginRight: '5px'}}>
                                                        OwnershipTransferred (index_topic_1
                                                    </Text>
                                                    <PinkText>address</PinkText> <OrangeText>previousOwner</OrangeText>
                                                    <Text style={{display: 'inline-block', marginRight: '5px'}}>, index_topic_2</Text>
                                                    <PinkText>address</PinkText> <OrangeText>newOwner)</OrangeText>
                                                </div>
                                                {showAddresses && (activeIndex === 3) ? EventsAddress : null}
                                                <div style={{marginBottom: '20px'}}>
                                                    <Text lineHeight='25px' fontSize={14}>[topic0] 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef</Text>
                                                    <Text lineHeight='25px' fontSize={14}>[topic1] 0x0000000000000000000000000000000000000000000000000000000000000000</Text>
                                                    <Text lineHeight='25px' fontSize={14}>[topic2] 0x00000000000000000000000065892f21a1d6ce485f21e6643d5789962b401321</Text>
                                                </div>
                                            </td>
                                        </TableTrWrapper>
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
