import React, { Suspense, Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { isMobile } from 'react-device-detect'

import Header from '../components/Header'
import Footer from '../components/Footer'

import Assets from './Assets'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: stretch;
  min-height: 350px;
  overflow: auto;
`;

const HeaderWrapper = styled.div`
  width: 1240px;
  margin: 0 auto;
  padding: 20px 0 0 0;
  background-color: red;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;

  z-index: 1;
`;

export default class App extends Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      showMobile: isMobile
    }
  }

  componentDidMount() {
    const that = this;
    window.onresize = function () {
      if (window.innerWidth < 750) {
        that.setState({showMobile: true})
      } else {
        that.setState({showMobile: false})
      }
    }
  }

  render() {
    // const { showMobile } = this.state;
    return (
        <Suspense fallback={null}>
          <HashRouter>
            <AppWrapper>
              {/*{(!isMobile && !showMobile) &&*/}
              {/*    <HeaderWrapper>*/}
              {/*      <img src={CloverLogo} width='182' height='54' alt=""/>*/}
              {/*    </HeaderWrapper>*/}
              {/*}*/}
              <Header></Header>
              <BodyWrapper>
                <Switch>
                  <Route exact strict path="/" component={Assets} />
                  {/*<Route exact strict path="/assets" component={Assets} />*/}
                </Switch>
              </BodyWrapper>
              <Footer></Footer>
            </AppWrapper>
          </HashRouter>
        </Suspense>
    );
  }
}
