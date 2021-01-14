import React, {Component, ReactElement} from 'react'
import styled  from 'styled-components'
import Row, { RowBetween, RowFit } from '../Row'

const HeaderWrapper = styled.div`
  background-color: #ffffff;
  box-shadow: 2px 2px 9px 1px #E9EDEA;
`
const HeaderContainer = styled(RowBetween)`
  height: 70px;
  width: 1240px;
  margin: 0 auto;
`
export default class Header extends Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            currentNav: 'Home'
        }
    }

    render() {
        return (
            <HeaderWrapper>
                <HeaderContainer>
                    <RowFit>
                        {this.props.icon}
                    </RowFit>

                    <RowFit>
                        {this.props.headerRight}
                    </RowFit>
                </HeaderContainer>
            </HeaderWrapper>
        )
    }
}
