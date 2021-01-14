import React, { Suspense, Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'

import FirstPage from './FirstPage'
import Contract from './Contract'
import OwnershipHistory from './OwnershipHistory'
import TransactionDetails from './TransactionDetails'
import OwnerAddress from './OwnerAddress'
import ContractManagement from './ContractManage'
import ErrorPage from './ErrorPage'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: stretch;
  min-height: 350px;
  overflow: auto;
  background-color: #f5f5f5;
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
  }

  render() {
    return (
        <Suspense fallback={null}>
          <HashRouter>
            <AppWrapper>
              <BodyWrapper>
                <Switch>
                  <Route exact strict path="/" component={FirstPage} />
                  <Route exact strict path="/contract" component={Contract} />
                  <Route exact strict path="/ownershipHistory" component={OwnershipHistory} />
                  <Route exact strict path="/ownerAddress" component={OwnerAddress} />
                  <Route exact strict path="/transactionDetails" component={TransactionDetails} />
                  <Route exact strict path="/contractManage" component={ContractManagement} />
                  <Route exact strict path="/errorPage" component={ErrorPage} />
                </Switch>
              </BodyWrapper>
              <Footer></Footer>
            </AppWrapper>
          </HashRouter>
        </Suspense>
    );
  }
}
