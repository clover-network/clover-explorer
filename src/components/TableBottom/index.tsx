import React, {Component, ReactElement} from 'react'
import styled  from 'styled-components'
import Row, {RowBetween, RowCenter} from '../Row'
import { Text } from 'rebass'
import RecordsIcon from "../../assets/images/records_icon.svg";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import InputBase from "@material-ui/core/InputBase";
import {IconSM} from "../IconSpan";

const TableBottom = styled(RowBetween)`
  margin-top: 20px;
`;

const ButtonWrapper = styled.div`
  border-radius: 4px;
  border: 1px solid #E8EAEE;
  padding: 4px 8px;
  font-size: 14px;
  color: rgba(0, 24, 49, 0.7);
  margin-left: 8px;
  cursor: pointer;
  :hover {
    background: #61B16F;
    border-radius: 4px;
    color: #ffffff;
  }
`;

const RecordsSelect = styled(Select)`
  margin: 0 8px;
  border-radius: 2px;
  border: 1px solid #E6E8ED;
  padding: 0 10px;
`;

export default class TableBottomComponent extends Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            currencyRecord: '1',
            isLeftHover: false,
            isRightHover: false,
        }
    }
    handleChangeRecords = (event: any) => {
        this.setState({
            currencyRecord: event.target.value
        });
    }

    render() {
        const { currencyRecord, isLeftHover, isRightHover} = this.state;
        const MenuItemStyle = withStyles((theme) => ({
            root: {
                width: '100%',
                fontSize: '15px',
            },
            selected: {
                backgroundColor: "#61B16F!important",
                color: "white",
            },
        }))(MenuItem);
        const BootstrapInput2 = withStyles((theme) => ({
            input: {
                position: 'relative',
                border: 'none',
                fontSize: '14px',
                color: 'rgba(0, 24, 49, 0.7)',
                width: 'fit-content',
                paddingRight: '5px!important',
                '&:focus': {
                    backgroundColor: 'transparent'
                },
            },
        }))(InputBase);
        return (
            <TableBottom>
                <Row>
                    <Text color='rgba(0, 24, 49, 0.7)' fontSize={14}>Show</Text>
                    <RecordsSelect
                        value={currencyRecord}
                        onChange={this.handleChangeRecords}
                        input={<BootstrapInput2 />}
                        IconComponent={() => (<img src={RecordsIcon} width='10px' height='10px' />)}
                    >
                        <MenuItemStyle value='1'>25</MenuItemStyle>
                        <MenuItemStyle value='2'>50</MenuItemStyle>
                        <MenuItemStyle value='3'>75</MenuItemStyle>
                    </RecordsSelect>
                    <Text color='rgba(0, 24, 49, 0.7)' fontSize={14}>Records</Text>
                </Row>
                <Row>
                    <ButtonWrapper>First</ButtonWrapper>
                    <ButtonWrapper onMouseEnter={() => { this.setState({isLeftHover: true}) }} onMouseLeave={() => { this.setState({isLeftHover: false}) }}><IconSM className="fo-chevron-left"></IconSM></ButtonWrapper>
                    <ButtonWrapper>1/4000</ButtonWrapper>
                    <ButtonWrapper onMouseEnter={() => { this.setState({isRightHover: true}) }} onMouseLeave={() => { this.setState({isRightHover: false}) }}><IconSM className="fo-chevron-right"></IconSM></ButtonWrapper>
                    <ButtonWrapper>Last</ButtonWrapper>
                </Row>
            </TableBottom>
        )
    }
}
