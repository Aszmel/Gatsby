import React from 'react'
import { Link } from 'gatsby'
import { H1 } from '../components/H1'
import { Button } from '../components/Button'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <H1>Hi people</H1>
    <Button width="300px" as={Link} to="/about">
      About Page
    </Button>
  </Layout>
)

export default IndexPage
