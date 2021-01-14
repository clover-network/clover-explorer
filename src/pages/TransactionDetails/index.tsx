import React, {Component} from 'react'
import styled from 'styled-components'
import AppBody from '../AppBody'
import { AutoColumn } from '../../components/Column'
import Row from '../../components/Row'
import {GreenText} from "../../components/TextColor";
import {Text} from "rebass";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import withStyles from '@material-ui/core/styles/withStyles';
import Header from '../../components/Header'
import SearchComponent from '../../components/Search'
import CloverLogo from "../../assets/images/clover_logo.svg";
import {IconSM, IconGray} from "../../components/IconSpan";

const BodyWrapper = styled.div`
  width: 1240px;
  margin: 50px auto 20px;
`;

const TopWrapper = styled.div`
  text-align: center;
  margin: 40px 0 60px;
`;

const ContentWrapper = styled.div`
  padding: 20px;
  background: #FFFFFF;
  border-radius: 8px;
`;

const ItemRow = styled(Row)`
  border-bottom: 1px solid #E6E8ED;
  padding: 20px 0;
  align-items: start;
  &:last-child {
    border-bottom: none;
  }
`;

const SuccessBtn = styled.div`
  width: 95px;
  height: 27px;
  background: #DFF5E5;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  color: #4BA870;
  line-height: 27px;
  text-align: center;
`;

const ValueText = styled.div`
  width: 67px;
  height: 27px;
  border-radius: 4px;
  border: 1px solid #FFAC3D;
  color: #FFAC3D;
  text-align: center;
  line-height: 27px;
  font-size: 16px;
`;

const BackStyleSpan = styled.span`
  display: inline-block;
  padding: 0 10px;
  margin-left: 26px;
  height: 26px;
  line-height: 26px;
  background-color: #f5f5f5;
  color: rgba(0, 24, 49, 0.6);
  position: relative;
  cursor: auto;
  &:before {
    content: " ";
    display: inline-block;
    border: 13px solid #f5f5f5;
    vertical-align: middle;
    border-left-color: transparent;
    border-top-color: transparent;
    border-bottom-color: transparent;
    position: absolute;
    left: -26px;
  }
`;

const TextArea = styled.textarea`
  width: calc(100vh - 40px);
  height: 100px;
  overflow-y: scroll;
  margin-right: 20px;
  vertical-align: top;
  margin-bottom: 10px;
  border-color: #E6E8ED;
  border-radius: 5px;
`;

const TextAreaBtn = styled.div`
  padding: 8px 16px;
  font-size: 14px;
  color: #ffffff;
  background: rgba(0, 24, 49, 0.5);
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
`

export default class TransactionDetails extends Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            tabList: [
                {tabName: "Overview", id: 1}
            ],
            currentTabIndex: 0
        }
    }

    handleChange = (event: any, value: any) => {
        this.setState({
            currentTabIndex: value
        });
    };

    render() {
        const { tabList, currentTabIndex } = this.state;
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

        return (
            <AppBody>
                <Header icon={<img src={CloverLogo} width='151' height='38' alt=""/>} headerRight={<SearchComponent></SearchComponent>}></Header>
                <BodyWrapper>
                    <TopWrapper>
                        <Text color="#001831" fontSize={40} fontWeight={500} marginBottom='5px'>Transaction Details</Text>
                    </TopWrapper>
                    <StyledTabs>
                        {tabList.map((res: any) => (
                            <AntTab key={res.tabName} label={res.tabName} />
                        ))}
                    </StyledTabs>
                    <ContentWrapper>
                        <ItemRow>
                            <Text width='250px' color='rgba(0, 24, 49, 0.5)' fontSize={16}><IconSM className="fo-question"></IconSM> Transaction Hash</Text>
                            <Text>0xbd242440a82c5cf4b059e3d24a0b5fd9a55db54bd6deef2ce15ab537bb413f07 <IconGray className="fo-copy"></IconGray></Text>
                        </ItemRow>
                        <ItemRow>
                            <Text width='250px' color='rgba(0, 24, 49, 0.5)' fontSize={16}><IconSM className="fo-question"></IconSM> Status</Text>
                            <SuccessBtn>Success</SuccessBtn>
                        </ItemRow>
                        <ItemRow>
                            <Text width='250px' color='rgba(0, 24, 49, 0.5)' fontSize={16}><IconSM className="fo-question"></IconSM> Block</Text>
                            <GreenText>11585220 <BackStyleSpan>908 Block Confirmations</BackStyleSpan></GreenText>
                        </ItemRow>
                        <ItemRow>
                            <Text width='250px' color='rgba(0, 24, 49, 0.5)' fontSize={16}><IconSM className="fo-question"></IconSM> Timestamp</Text>
                            <Text><IconSM className="fo-clock" style={{color: 'rgba(0, 24, 49, 0.5)'}}></IconSM> 2 hrs 42 mins ago (Jan-04-2021 02:12:46 AM +UTC)</Text>
                        </ItemRow>
                        <ItemRow>
                            <Text width='250px' color='rgba(0, 24, 49, 0.5)' fontSize={16}><IconSM className="fo-question"></IconSM> From</Text>
                            <GreenText>0xfd54d74d9d82cdf73d660eaac0a86a6f9854fc23</GreenText>
                        </ItemRow>
                        <ItemRow>
                            <Text width='250px' color='rgba(0, 24, 49, 0.5)' fontSize={16}><IconSM className="fo-question"></IconSM> To</Text>
                            <Text>[Contract <GreenText style={{display: 'inline-block'}}>0x328bebc904e26a7c5053c406e72960960e53ebd3</GreenText> Created]</Text>
                        </ItemRow>
                        <ItemRow>
                            <Text width='250px' color='rgba(0, 24, 49, 0.5)' fontSize={16}><IconSM className="fo-question"></IconSM> Value</Text>
                            <ValueText>0 Ether</ValueText>
                        </ItemRow>
                        <ItemRow>
                            <Text width='250px' color='rgba(0, 24, 49, 0.5)' fontSize={16}><IconSM className="fo-question"></IconSM> Transaction Fee</Text>
                            <Text>0.079473735 Ether ($81.52)</Text>
                        </ItemRow>
                        <ItemRow>
                            <Text width='250px' color='rgba(0, 24, 49, 0.5)' fontSize={16}><IconSM className="fo-question"></IconSM> Gas Price</Text>
                            <Text>0.000000099 Ether (99 Gwei)</Text>
                        </ItemRow>
                        <ItemRow>
                            <Text width='250px' color='rgba(0, 24, 49, 0.5)' fontSize={16}><IconSM className="fo-question"></IconSM> Gas Limit</Text>
                            <Text>802,765</Text>
                        </ItemRow>
                        <ItemRow>
                            <Text width='250px' color='rgba(0, 24, 49, 0.5)' fontSize={16}><IconSM className="fo-question"></IconSM> Gas Used by Transaction</Text>
                            <Text>802,765 (100%)</Text>
                        </ItemRow>
                        <ItemRow>
                            <Text width='250px' color='rgba(0, 24, 49, 0.5)' fontSize={16}><IconSM className="fo-question"></IconSM> Nonce</Text>
                            <Text>168 <BackStyleSpan>131</BackStyleSpan></Text>
                        </ItemRow>
                        <ItemRow>
                            <Text width='250px' color='rgba(0, 24, 49, 0.5)' fontSize={16}><IconSM className="fo-question"></IconSM> Input Data</Text>
                            <AutoColumn>
                                <TextArea></TextArea>
                                <Row>
                                    <TextAreaBtn>View Input As <IconSM className="fo-chevron-down"></IconSM></TextAreaBtn>
                                    <TextAreaBtn>Decode Input Data</TextAreaBtn>
                                </Row>
                            </AutoColumn>
                        </ItemRow>
                    </ContentWrapper>
                </BodyWrapper>
            </AppBody>
        );
    }
}
