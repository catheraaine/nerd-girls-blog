/* eslint-disable */
import React from 'react';
import { Link, graphql } from 'gatsby';
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
        <SEO title="About | Nerd Girls Book Club" />
        <article className="post">
          <div className="post__info-wrapper">
            <h1 className="post__title">
              About the Nerd Girls
            </h1>
          </div>
          <main className="post__content">
            <section>
              <h2 className="utl-color--jane">Jane</h2>
              <p>Jane grew up outside of Kansas City and spent her formative years starting book clubs with themed snacks and sneaking Harlequin Romance novels into her house. She enjoys few things in life as much as cuddling on the couch under a blanket reading a murder mystery, a glass of red wine in hand. The few things she enjoys more are chasing her toddlers and epic road trips. Her all-time favorite books are <i>In Cold Blood</i> by Truman Capote, <i>Sharp Objects</i> by Gillian Flynn and <i>And Then There Were None</i> by Agatha Christie. She really doesn’t care what you think of her, but you should tell her anyways. </p>
            </section>
            <section>
              <h2 className="utl-color--elizabeth">Beth</h2>
            </section>
            <section>
              <h2 className="utl-color--mary">Mary</h2>
            </section>
            <section>
              <h2 className="utl-color--catherine">Catherine</h2>
              <p>As an adolescent, Catherine lived on an isolated farm in rural Ohio. Being far away from other people, she went to the library twice a week and read everything in the YA section she could touch. Now, she lives in a small city and works as a software engineer, building full-stack applications (including this one!). Her hobbies include reading (duh), video games, drawing, and making cat jokes. Catherine's favorite genre is fantasy (both Epic and YA), and her most beloved reads are Garth Nix's <i>Sabriel</i>, Jane Austen's <i>Pride and Prejudice</i>, Brandon Sanderson's <i>The Way of Kings</i>, and more recently, <i>An Ember in the Ashes</i> by Sabaa Tahir. She's a Ravenclaw with a Slytherin streak, and has a proper witchy familiar, her black cat, Alexei.</p>
            </section>
            <section>
              <h2 className="utl-color--lydia">Lydia</h2>
            </section>
          </main>
        </article>
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
        }
      }
    }
  }
`;
