/* eslint-disable */
import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;
    const authorClasses = post.frontmatter.authorClass ?
    `post__author post__author--${post.frontmatter.authorClass}`
     :
     'post__author';

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article className="post">
          <div className="post__info-wrapper">
            <h1 className="post__title">
              {post.frontmatter.title}
            </h1>
            <div className="post__meta">
              <p className="post__date">
                {post.frontmatter.date}
              </p>
              <p className={authorClasses}>
                By {post.frontmatter.authorName}
              </p>
            </div>
          </div>
          <main 
            className="post__content" 
            dangerouslySetInnerHTML={{ __html: post.html }}   
          />
        </article>
        <ul className="pagination">
          <li className="pagination__item">
            {previous && (
              <Link className="pagination__link" to={previous.fields.slug} rel="prev">
                ←
                {' '}
                {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li className="pagination__item">
            {next && (
              <Link className="pagination__link" to={next.fields.slug} rel="next">
                {next.frontmatter.title}
                {' '}
                →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        authorName
        authorClass
      }
    }
  }
`;
