import React, {Component, ReactElement} from 'react'
import styled  from 'styled-components'
import Row, { RowBetween, RowFit } from '../Row'
import { Text } from 'rebass'
import CloverLogo from '../../assets/images/clover_logo.svg';

const HeaderWrapper = styled.div`
  background-color: #ffffff;
`
const HeaderContainer = styled(RowBetween)`
  height: 54px;
  width: 1240px;
  margin: 0 auto;
`

const SelectNav = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: #27C96E;
  padding-left: 48px;
  cursor: pointer;
`;

const NavItem = styled(Text)`
  font-size: 16px;
  color: #7E96AE;
  padding-left: 48px;
  cursor: pointer;
`;

export default class Header extends Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            currentNav: 'Home'
        }
    }
    selectNav = (nav: string) => {
        this.setState({
            currentNav: nav
        })
    }

    render() {
        const { currentNav } = this.state;
        const navs = ['Home', 'Blockchain', 'Tokens', 'Resources'];
        return (
            <HeaderWrapper>
                <HeaderContainer>
                    <RowFit>
                        <img src={CloverLogo} width='151' height='38' alt=""/>
                    </RowFit>

                    <RowFit>
                        <Row>
                            {
                                navs.map((nav) => (
                                    nav === currentNav ? <SelectNav>{nav}</SelectNav> :
                                    <NavItem onClick={() => { this.selectNav(nav); }}>{nav}</NavItem>
                                ))
                            }
                        </Row>
                    </RowFit>
                </HeaderContainer>
            </HeaderWrapper>
        )
    }

}
