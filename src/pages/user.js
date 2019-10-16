import React from 'react';
import {graphql} from 'gatsby';
import Layout from './layout';

export default ({data}) => {
    return(
        <Layout>
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <p>{data.markdownRemark.excerpt}</p>
        </Layout>
    )
}

export const query = graphql`
query MyQuery {
    markdownRemark {
      frontmatter {
        title
      }
      excerpt
    }
  }
  
`