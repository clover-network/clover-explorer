import React from 'react'
import styled from 'styled-components'

export const AppBodyWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const AppContentWrapper = styled.div`
  position: relative;

  padding: 20px 200px;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding-left: 16px;
    padding-right: 16px;
  `};
`;

export default function AppBody({ children }: { children: React.ReactNode }) {
  return <AppBodyWrapper>{children}</AppBodyWrapper>
}
