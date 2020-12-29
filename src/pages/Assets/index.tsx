import React, {Component} from 'react'
import styled from 'styled-components'
import AppBody, { AppContentWrapper } from '../AppBody'
import { AutoColumn, ColumnCenter } from '../../components/Column'
import Row, { RowBetween, RowFit } from '../../components/Row'
import {Text} from "rebass";
import Search from "../../assets/images/search.svg";
import HeaderBackground from "../../assets/images/header_background.svg";
import ActiveValidator from "../../assets/images/active_validator.svg";
import ClvMarketCap from "../../assets/images/clv_market_cap.svg";
import ClvPrice from "../../assets/images/clv_price.svg";
import LatestBlock from "../../assets/images/latest_block.svg";

const BodyWrapper = styled.div`
  background: #F5F5F5;
`;

const ContentTopWrapper = styled.div`
  height: 379px;
  width: 100%;
  background: linear-gradient(180deg, #1E455C 0%, #153040 100%);
  padding-top: 47px;
`

const ContentTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 30px;
  width: 1240px;
  height: 384px;
  margin: 0 auto;
  background: url('${HeaderBackground}');
`;

const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: auto 50px;
  width: 754px;
  height: 52px;
  background: #FFFFFF;
  border-radius: 25px;
  border: 1px solid #D5DAE2;
  margin-top: 42px;
`;

const SearchInput = styled.input`
  text-indent: 20px;
  outline: none;
  border: none;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  color: #333333;;
  background: transparent;

  ::placeholder {
    color: #7E96AE;
  }
`;

const SearchButton = styled.span`
  display: inline-block;
  line-height: 46px;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  width: 46px;
  height: 46px;
  background: linear-gradient(187deg, #8BED7F 0%, #48C079 100%);
  border-radius: 59px;
  cursor: pointer;
  margin-top: 2px;
`;

const ContentTop = styled.div`
  width: 100%;
  height: 185px;
  background: #ffffff;
  box-shadow: 0px 2px 7px 0px #E9EDEA;
  border-radius: 8px;
  position: relative;
  top: -50px;
  padding: 24px 35px;
`;

const ContentWrapper = styled(AutoColumn)`
  width: 1240px;
  margin: 0 auto;
`;

const ContentTopLeft = styled(AutoColumn)`
  width: 788px;
  border-right: 1px solid #F1F3F8;
`;

const ContentTopRight = styled.div`
    padding-left: 50px;
`;

const ContentBottom = styled(Row)`
  margin-top: -30px;
  margin-bottom: 40px;
`;

const ContentBottomItem = styled.div`
  width: 610px;
  height: 644px;
  background: #FFFFFF;
  box-shadow: 2px 2px 9px 1px #E9EDEA;
  border-radius: 8px;
  padding: 20px;
`;

const ContentListItem = styled(RowBetween)`
  padding: 20px 0;
  border-bottom: 1px solid #EFF1F7;
  
  :last-child {
    border: none;
  }
`;

const ContentBtn = styled.div`
  width: 100%;
  height: 42px;
  background: #F1F3F5;
  border-radius: 4px;
  color: #A1ABB8;
  text-align: center;
  line-height: 42px;
  margin-top: -5px;
  cursor: pointer;
`;

export default class Assets extends Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      searchStr: ''
    }
  }
  searchDapps = () => {
    console.log(this.state.searchStr);
  }

  changeSearchStr = (event: any) => {
    this.setState({
      searchStr: event.target.value
    })
  }
  render() {
    return (
        <AppBody>
          <BodyWrapper>
            <ContentTopWrapper>
              <ContentTopContainer>
                <Text fontSize={44} fontWeight='bold' color='#ffffff' textAlign='center'>The Clover Blockchain Explorer</Text>
                <Text fontSize={23} fontWeight='lighter' color='#ffffff' textAlign='center' marginTop={10}>CloverScan is lightning fast, secure and powerful</Text>
                <SearchContainer>
                  <SearchInput placeholder='Search by Address / Txn Hash /Token' onChange={this.changeSearchStr} />
                  <SearchButton onClick={this.searchDapps}><img width={15} height={15} src={Search} alt=""/></SearchButton>
                </SearchContainer>
              </ContentTopContainer>
            </ContentTopWrapper>
            <ContentWrapper gap={'0'}>
              <ContentTop>
                <Row>
                  <ContentTopLeft>
                    <Row style={{marginBottom: '20px'}}>
                      <Row style={{width: '320px'}}>
                        <img width={25} height={25} src={ClvPrice} alt="" style={{marginRight: '10px'}}/>
                        <div>
                          <Text color='#111A34' fontSize={16} fontWeight='bold' marginBottom={10}>CLV PRICE</Text>
                          <Text color='#7e96ae' fontSize={16}>$31.27 @ 0.001357 BTC <span style={{color: '#F24868'}}>(-6.46%)</span></Text>
                        </div>
                      </Row>
                      <Row style={{width: '250px'}}>
                        <img width={25} height={25} src={LatestBlock} alt="" style={{marginRight: '10px'}}/>
                        <div>
                          <Text color='#111A34' fontSize={16} fontWeight='bold' marginBottom={10}>LATEST BLOCK</Text>
                          <Text color='#7e96ae' fontSize={16}>3370053(3.0s)</Text>
                        </div>
                      </Row>
                      <div>
                        <Text color='#111A34' fontSize={16} fontWeight='bold' marginBottom={10}>TRANSACTIONS</Text>
                        <Text color='#7e96ae' fontSize={16}>17.51 M(5.6 TPS)</Text>
                      </div>
                    </Row>
                    <Row>
                      <Row style={{width: '320px'}}>
                        <img width={25} height={25} src={ClvMarketCap} alt="" style={{marginRight: '10px'}}/>
                        <div>
                          <Text color='#111A34' fontSize={16} fontWeight='bold' marginBottom={10}>CLV MARKET CAP</Text>
                          <Text color='#7e96ae' fontSize={16}>$213,182,116(6,817,330 BNB)</Text>
                        </div>
                      </Row>
                      <Row style={{width: '250px'}}>
                        <img width={25} height={25} src={ActiveValidator} alt="" style={{marginRight: '10px'}}/>
                        <div>
                          <Text color='#111A34' fontSize={16} fontWeight='bold' marginBottom={10}>ACTIVE VALIDATOR</Text>
                          <Text color='#7e96ae' fontSize={16}>21</Text>
                        </div>
                      </Row>
                      <div>
                        <Text color='#111A34' fontSize={16} fontWeight='bold' marginBottom={10}>SMART CONTRACT</Text>
                        <Text color='#7e96ae' fontSize={16}>3,300,494,48 BNB</Text>
                      </div>
                    </Row>
                  </ContentTopLeft>
                  <ContentTopRight>
                    <Text fontSize={14} color='#7E96AE'>
                      ETHEREUM TRANSACTION HISTORY IN 14 DAYS
                    </Text>
                  </ContentTopRight>
                </Row>
              </ContentTop>
              <ContentBottom>
                <ContentBottomItem style={{marginRight: '20px'}}>
                  <Text fontSize={16} fontWeight='bold'>Latest Blocks</Text>
                  <ContentListItem>
                    <div>
                      <Text color='#111933' fontSize={18} fontWeight='bold'>11520193</Text>
                      <Text color='#7D95AD' fontSize={16}>4 secs ago</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>Validator</Text>
                      <Text color='#111933' fontSize={16}>Nanopool</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>Transactions</Text>
                      <Text color='#111933' fontSize={16}>163 txns <span style={{color: '#7D95AD'}}>in 3 secs</span></Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>Rewards</Text>
                      <Text color='#32CB75' fontSize={16}>2.68244 Eth</Text>
                    </div>
                  </ContentListItem>
                  <ContentListItem>
                    <div>
                      <Text color='#111933' fontSize={18} fontWeight='bold'>11520193</Text>
                      <Text color='#7D95AD' fontSize={16}>4 secs ago</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>Validator</Text>
                      <Text color='#111933' fontSize={16}>Nanopool</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>Transactions</Text>
                      <Text color='#111933' fontSize={16}>163 txns <span style={{color: '#7D95AD'}}>in 3 secs</span></Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>Rewards</Text>
                      <Text color='#32CB75' fontSize={16}>2.68244 Eth</Text>
                    </div>
                  </ContentListItem>
                  <ContentListItem>
                    <div>
                      <Text color='#111933' fontSize={18} fontWeight='bold'>11520193</Text>
                      <Text color='#7D95AD' fontSize={16}>4 secs ago</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>Validator</Text>
                      <Text color='#111933' fontSize={16}>Nanopool</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>Transactions</Text>
                      <Text color='#111933' fontSize={16}>163 txns <span style={{color: '#7D95AD'}}>in 3 secs</span></Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>Rewards</Text>
                      <Text color='#32CB75' fontSize={16}>2.68244 Eth</Text>
                    </div>
                  </ContentListItem>
                  <ContentListItem>
                    <div>
                      <Text color='#111933' fontSize={18} fontWeight='bold'>11520193</Text>
                      <Text color='#7D95AD' fontSize={16}>4 secs ago</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>Validator</Text>
                      <Text color='#111933' fontSize={16}>Nanopool</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>Transactions</Text>
                      <Text color='#111933' fontSize={16}>163 txns <span style={{color: '#7D95AD'}}>in 3 secs</span></Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>Rewards</Text>
                      <Text color='#32CB75' fontSize={16}>2.68244 Eth</Text>
                    </div>
                  </ContentListItem>
                  <ContentListItem>
                    <div>
                      <Text color='#111933' fontSize={18} fontWeight='bold'>11520193</Text>
                      <Text color='#7D95AD' fontSize={16}>4 secs ago</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>Validator</Text>
                      <Text color='#111933' fontSize={16}>Nanopool</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>Transactions</Text>
                      <Text color='#111933' fontSize={16}>163 txns <span style={{color: '#7D95AD'}}>in 3 secs</span></Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>Rewards</Text>
                      <Text color='#32CB75' fontSize={16}>2.68244 Eth</Text>
                    </div>
                  </ContentListItem>
                  <ContentListItem style={{border: 'none'}}>
                    <div>
                      <Text color='#111933' fontSize={18} fontWeight='bold'>11520193</Text>
                      <Text color='#7D95AD' fontSize={16}>4 secs ago</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>Validator</Text>
                      <Text color='#111933' fontSize={16}>Nanopool</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>Transactions</Text>
                      <Text color='#111933' fontSize={16}>163 txns <span style={{color: '#7D95AD'}}>in 3 secs</span></Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>Rewards</Text>
                      <Text color='#32CB75' fontSize={16}>2.68244 Eth</Text>
                    </div>
                  </ContentListItem>
                  <ContentBtn>View all blocks</ContentBtn>
                </ContentBottomItem>
                <ContentBottomItem>
                  <Text fontSize={16} fontWeight='bold'>Latest Transactions</Text>
                  <ContentListItem>
                    <div>
                      <Text color='#111933' fontSize={18} fontWeight='bold'>0x17cc3d…</Text>
                      <Text color='#7D95AD' fontSize={16}>34 secs ago</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>From</Text>
                      <Text color='#111933' fontSize={16}>0x0e1c70f543...</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>To</Text>
                      <Text color='#111933' fontSize={16}>0x0e1c70f543…</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>Amount</Text>
                      <Text color='#32CB75' fontSize={16}>0.0046 Eth</Text>
                    </div>
                  </ContentListItem>
                  <ContentListItem>
                    <div>
                      <Text color='#111933' fontSize={18} fontWeight='bold'>0x17cc3d…</Text>
                      <Text color='#7D95AD' fontSize={16}>34 secs ago</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>From</Text>
                      <Text color='#111933' fontSize={16}>0x0e1c70f543...</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>To</Text>
                      <Text color='#111933' fontSize={16}>0x0e1c70f543…</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>Amount</Text>
                      <Text color='#32CB75' fontSize={16}>0.0046 Eth</Text>
                    </div>
                  </ContentListItem>
                  <ContentListItem>
                    <div>
                      <Text color='#111933' fontSize={18} fontWeight='bold'>0x17cc3d…</Text>
                      <Text color='#7D95AD' fontSize={16}>34 secs ago</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>From</Text>
                      <Text color='#111933' fontSize={16}>0x0e1c70f543...</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>To</Text>
                      <Text color='#111933' fontSize={16}>0x0e1c70f543…</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>Amount</Text>
                      <Text color='#32CB75' fontSize={16}>0.0046 Eth</Text>
                    </div>
                  </ContentListItem>
                  <ContentListItem>
                    <div>
                      <Text color='#111933' fontSize={18} fontWeight='bold'>0x17cc3d…</Text>
                      <Text color='#7D95AD' fontSize={16}>34 secs ago</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>From</Text>
                      <Text color='#111933' fontSize={16}>0x0e1c70f543...</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>To</Text>
                      <Text color='#111933' fontSize={16}>0x0e1c70f543…</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>Amount</Text>
                      <Text color='#32CB75' fontSize={16}>0.0046 Eth</Text>
                    </div>
                  </ContentListItem>
                  <ContentListItem>
                    <div>
                      <Text color='#111933' fontSize={18} fontWeight='bold'>0x17cc3d…</Text>
                      <Text color='#7D95AD' fontSize={16}>34 secs ago</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>From</Text>
                      <Text color='#111933' fontSize={16}>0x0e1c70f543...</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>To</Text>
                      <Text color='#111933' fontSize={16}>0x0e1c70f543…</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>Amount</Text>
                      <Text color='#32CB75' fontSize={16}>0.0046 Eth</Text>
                    </div>
                  </ContentListItem>
                  <ContentListItem style={{border: 'none'}}>
                    <div>
                      <Text color='#111933' fontSize={18} fontWeight='bold'>0x17cc3d…</Text>
                      <Text color='#7D95AD' fontSize={16}>34 secs ago</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>From</Text>
                      <Text color='#111933' fontSize={16}>0x0e1c70f543...</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>To</Text>
                      <Text color='#111933' fontSize={16}>0x0e1c70f543…</Text>
                    </div>
                    <div>
                      <Text color='#7D95AD' fontSize={18}>Amount</Text>
                      <Text color='#32CB75' fontSize={16}>0.0046 Eth</Text>
                    </div>
                  </ContentListItem>
                  <ContentBtn>View all transactions</ContentBtn>
                </ContentBottomItem>
              </ContentBottom>
            </ContentWrapper>
          </BodyWrapper>
        </AppBody>
    );
  }
}
