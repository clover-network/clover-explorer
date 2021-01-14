import React, {Component, ReactElement} from 'react'
import styled  from 'styled-components'

const FooterWrapper = styled.div`
  background: linear-gradient(186deg, #3E738A 0%, #1D3F52 100%);
`
const FooterContainer = styled.div`
  height: 80px;
  line-height: 80px;
  width: 1240px;
  margin: 0 auto;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: #B0BECD;
`

export default class Footer extends Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
    }

    render() {
        return (
            <FooterWrapper>
                <FooterContainer>
                    ©2020 CloverFinance. All Rights Reserved
                </FooterContainer>
            </FooterWrapper>
        )
    }
}
