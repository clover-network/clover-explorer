import React, {Component} from 'react'
import styled  from 'styled-components'
import {IconMD} from "../IconSpan";

const SearchContainer = styled.div`
  height: 52px;
  position: relative;
`;

const SearchInput = styled.input`
  text-indent: 20px;
  width: 536px;
  height: 45px;
  outline: none;
  border: 1px solid #D5DAE2;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  color: #333333;;
  background: #FFFFFF;
  border-radius: 25px;
  padding-right: 50px;
  ::placeholder {
    color: #7E96AE;
  }
  :focus {
    border: 3px solid #4BA870;
  }
`;

const SearchButton = styled.span`
  position: absolute;
  right: 5px;
  top: 3px;
  display: inline-block;
  line-height: 35px;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  width: 35px;
  height: 35px;
  background: linear-gradient(187deg, #76B96D 0%, #4BA871 100%);
  border-radius: 59px;
  cursor: pointer;
  margin-top: 2px;
  &:hover {
    background: linear-gradient(187deg, #8BED7F 0%, #48C079 100%);
    box-shadow: 0px 1px 8px 1px #6DB480;
  }
`;

export default class SearchComponent extends Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
    }

    render() {
        return (
            <SearchContainer>
                <SearchInput placeholder='Search by Address / Txn Hash /Token' />
                <SearchButton><IconMD className="fo-search"></IconMD></SearchButton>
            </SearchContainer>
        )
    }
}
