import React, {Component, ReactElement} from 'react'
import styled  from 'styled-components'
import { RowCenter } from '../Row'
import { IconMD } from '../IconSpan'
import { Text } from 'rebass'
import Menu from "../../assets/images/menu.svg";

const TopWrapper = styled.div`
  text-align: center;
  margin: 40px 0;
`;

export default class ContentHeader extends Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
    }

    render() {
        return (
            <TopWrapper>
                <Text color="#001831" fontSize={40} fontWeight={500} marginBottom='5px'>{this.props.title}</Text>
                <RowCenter>
                    <Text fontSize={20}
                          color='#001831'>{this.props.address}</Text>
                    <IconMD className="fo-copy" style={{margin: '0 8px'}}></IconMD>
                    <img width={24} height={24} src={Menu} alt=""/>
                </RowCenter>
            </TopWrapper>
        )
    }
}
