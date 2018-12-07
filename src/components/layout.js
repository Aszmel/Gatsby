import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { colors } from '../utils/colors'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    color: ghostwhite;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: ${colors.dark};
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

  ::before {
    content: '';
    width: 100px;
    height: 100px;
    display: block;
    background: yellow;
  }
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <StyledWrapper>{children}</StyledWrapper>
  </>
)

export default Layout
