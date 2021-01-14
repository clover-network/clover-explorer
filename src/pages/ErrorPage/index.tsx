import React, {Component} from 'react'
import styled from 'styled-components'
import AppBody from '../AppBody'
import Row from '../../components/Row'
import {Text} from "rebass";
import Header from '../../components/Header'
import ErrorImg from "../../assets/images/error_img.svg";
import CloverLogo from "../../assets/images/clover_logo.svg";
import SearchComponent from "../../components/Search";

const BodyWrapper = styled.div`
  width: 1240px;
  margin: 30px auto 50px;
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
`;

const ConnectBtn = styled.div`
  margin-top: 20px;
  width: 148px;
  height: 56px;
  background: linear-gradient(187deg, #76B96D 0%, #4BA871 100%);
  border-radius: 8px;
  line-height: 56px;
  text-align: center;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
`;

export default class ErrorPage extends Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
    }

    render() {
        return (
            <AppBody>
                <Header icon={<img src={CloverLogo} width='151' height='38' alt=""/>} headerRight={<SearchComponent></SearchComponent>}></Header>
                <BodyWrapper>
                    <ContentWrapperNull>
                        <Row>
                            <img height={300} width={400} src={ErrorImg} alt=""/>
                            <div style={{marginLeft: '76px'}}>
                                <Text fontSize={40} fontWeight='bold' color='rgba(0, 24, 49, 0.9)'>Oops!</Text>
                                <Text fontSize={18} lineHeight='30px' color='rgba(0, 24, 49, 0.6)'>We can’t seem to find the page you’re looking for.</Text>
                                <ConnectBtn>Go Home</ConnectBtn>
                            </div>
                        </Row>
                    </ContentWrapperNull>
                </BodyWrapper>
            </AppBody>
        );
    }
}
