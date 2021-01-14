import React, {Component} from 'react'
import styled from 'styled-components'
import AppBody from '../AppBody'
import {GreenText} from '../../components/TextColor'
import Header from '../../components/Header'
import SearchComponent from '../../components/Search'
import ContentHeader from '../../components/ContentHeader'
import TableBottomComponent from '../../components/TableBottom'
import CloverLogo from "../../assets/images/clover_logo.svg";

const BodyWrapper = styled.div`
  width: 1240px;
  margin: 50px auto 20px;
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

const TableTrWrapper = styled.tr`
  line-height: 55px;
  vertical-align: top;
  border-bottom: 1px solid #E8EAEE;
`;

export default class OwnershipHistory extends Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
    }

    render() {
        const tableList = [
            {
                ownerAddress: '0x0e1c7dfdsf230f543…',
                startBlock: '11456677',
                startTime: '1 sec ago',
            }, {
                ownerAddress: '0x0e1c7dfdsf230f543…',
                startBlock: '11456677',
                startTime: '1 sec ago',
            }, {
                ownerAddress: '0x0e1c7dfdsf230f543…',
                startBlock: '11456677',
                startTime: '1 sec ago',
            }, {
                ownerAddress: '0x0e1c7dfdsf230f543…',
                startBlock: '11456677',
                startTime: '1 sec ago',
            }, {
                ownerAddress: '0x0e1c7dfdsf230f543…',
                startBlock: '11456677',
                startTime: '1 sec ago',
            }, {
                ownerAddress: '0x0e1c7dfdsf230f543…',
                startBlock: '11456677',
                startTime: '1 sec ago',
            }, {
                ownerAddress: '0x0e1c7dfdsf230f543…',
                startBlock: '11456677',
                startTime: '1 sec ago',
            }, {
                ownerAddress: '0x0e1c7dfdsf230f543…',
                startBlock: '11456677',
                startTime: '1 sec ago',
            }, {
                ownerAddress: '0x0e1c7dfdsf230f543…',
                startBlock: '11456677',
                startTime: '1 sec ago',
            }, {
                ownerAddress: '0x0e1c7dfdsf230f543…',
                startBlock: '11456677',
                startTime: '1 sec ago',
            }
        ];

        return (
            <AppBody>
                <Header icon={<img src={CloverLogo} width='151' height='38' alt=""/>} headerRight={<SearchComponent></SearchComponent>}></Header>
                <BodyWrapper>
                    <ContentHeader title='Ownership History' address='Contract: 0x4a75610d8477c5c2377e85e2bb9d75dc3be14c68808bb42a420cc'></ContentHeader>
                    <ContentWrapper>
                        <TableWrapper>
                            <thead>
                            <TableHeader>
                                <ThWrapper style={{paddingLeft: '40px'}}>Owner address</ThWrapper>
                                <ThWrapper>Start block</ThWrapper>
                                <ThWrapper>Start time</ThWrapper>
                            </TableHeader>
                            </thead>
                            <tbody>
                            {tableList.map((item: any, index: number) => (
                                <TableTrWrapper key={`${item.ownerAddress}_${index}`}>
                                    <td><GreenText marginLeft='40px'>{item.ownerAddress}</GreenText></td>
                                    <td><GreenText>{item.startBlock}</GreenText></td>
                                    <td>{item.startTime}</td>
                                </TableTrWrapper>
                            ))}
                            </tbody>
                        </TableWrapper>
                        <TableBottomComponent></TableBottomComponent>
                    </ContentWrapper>
                </BodyWrapper>
            </AppBody>
        );
    }
}
