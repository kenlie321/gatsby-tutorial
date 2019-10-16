import React from "react"
import Layout from "./layout"
import {graphql} from 'gatsby';

export default ({data}) => (
  <Layout>
    <h1>About Pandas Eating Lots</h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </Layout>
)

export const query = graphql`
  query{
    site{
      siteMetadata{
        title
      }
    }
  }
`