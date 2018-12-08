import React, { Component } from 'react'
import Layout from '../components/Layout'
import Button from '../components/Button'
import { Link } from 'gatsby'
import H1 from '../components/H1'
import styled from 'styled-components'
import posed from 'react-pose'

const data = [
  {
    title: 'Hello Arek',
  },
  {
    title: 'Hello Kasia',
    ad: 'Lorem ipsum dolor sit amet',
  },
  {
    title: 'Hello Lena',
  },
  {
    title: 'Hello Pola',
    ad: 'Lorem ipsum dolor sit amet',
  },
]

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const PosedH2 = posed.h2({
  visible: {
    x: 0,
    opacity: 1,
  },
  hidden: {
    x: '-150%',
    opacity: 0,
  },
})

const StyledH2 = styled(PosedH2)`
  font-size: 1em;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  text-align: center;
  color: white;
  grid-column-start: ${({ order }) => (order % 2 === 0 ? '2' : '1')};
`
const StyledAd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: aqua;
  border-radius: 10px;
  height: 90%;
`

class About extends React.Component {
  state = {
    visible: false,
  }

  toggleHeaders = () => {
    this.setState(prevState => ({ visible: !prevState.visible }))
  }

  render() {
    return (
      <Layout>
        <H1>{this.state.visible ? 'visible' : 'hidden'}</H1>
        <Button onClick={this.toggleHeaders}>Main Page</Button>
        <StyledWrapper>
          {data.map((item, i) => (
            <React.Fragment key={item.title}>
              <StyledH2
                order={i}
                pose={this.state.visible ? 'visible' : 'hidden'}
              >
                {item.title}
              </StyledH2>
              {item.ad && <StyledAd>{item.add}</StyledAd>}
            </React.Fragment>
          ))}
        </StyledWrapper>
      </Layout>
    )
  }
}

export default About
