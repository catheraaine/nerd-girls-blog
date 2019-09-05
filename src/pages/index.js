/* eslint-disable */
import React from 'react';
import { Link, graphql } from 'gatsby';

// import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import("../scss/base.scss");

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts | Nerd Girls Book Club" />
        {/* <Bio /> */}
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          const authorClasses = node.frontmatter.authorClass ?
          `listing__author listing__author--${node.frontmatter.authorClass}`
          :
          'listing__author';

          return (
            <div key={node.fields.slug}>
              <h3 className="listing__title">
                <Link 
                  to={node.fields.slug}
                >
                  {title}
                </Link>
              </h3>
              <div className="listing__meta">
                <p className="listing__date">
                  {node.frontmatter.date}
                </p>
                <p className={authorClasses}>
                  By {node.frontmatter.authorName}
                </p>
              </div>
              <p className="listing__description"
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            authorName
            authorClass
          }
        }
      }
    }
  }
`;
