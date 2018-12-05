import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

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
  background: palevioletred;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

  ::before {
    content: '';
    width: 50px;
    height: 50px;
    display: block;
    background: yellow;
  }
`

const H1 = styled.h1`
  font-size: ${({ isBig }) => (isBig ? '5em' : '3em')};
`

const IndexPage = () => (
  <>
    <GlobalStyle />
    <StyledWrapper>
      <H1 isBig>Hi people</H1>
      <H1>This is cool page made with Gatsby!</H1>
    </StyledWrapper>
  </>
)

export default IndexPage
