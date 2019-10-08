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
              <p>
                Jane grew up outside of Kansas City and spent her formative years starting book clubs with themed snacks and sneaking Harlequin Romance novels into her house. She enjoys few things in life as much as cuddling on the couch under a blanket reading a murder mystery, a glass of red wine in hand. The few things she enjoys more are chasing her toddlers and epic road trips. Her all-time favorite books are <i className="utl-color--jane"><a href="https://www.goodreads.com/book/show/168642.In_Cold_Blood">In Cold Blood</a></i> by Truman Capote, <i className="utl-color--jane"><a href="https://www.goodreads.com/book/show/18045891-sharp-objects">Sharp Objects</a></i> by Gillian Flynn and <i  className="utl-color--jane"><a href="https://www.goodreads.com/book/show/16299.And_Then_There_Were_None">And Then There Were None</a></i> by Agatha Christie. She really doesn’t care what you think of her, but you should tell her anyways.
              </p>
            </section>
            <section>
              <h2 className="utl-color--elizabeth">Beth</h2>
              <p>
               Beth spent her childhood and early adulthood in Iowa college towns, and has lived a few other places (most notably Nagoya, Japan). She has been an avid reader and writer since before she can remember and has the B. A. in English to prove it. Though her current life is dominated by adorable small children, she still carves out time for reading, writing, and extended discussions on narrative structure. Because that’s what she writes, she primarily reads YA, but she’s very much open to anything. Some favorite nostalgic reads are <i className="utl-color--elizabeth"><a href="">The Magician’s Ward</a></i> by Patricia C. Wrede, <i className="utl-color--elizabeth"><a href="">Howl’s Moving Castle</a></i> by Diana Wynne Jones, and Gail Carson Levine’s <i className="utl-color--elizabeth"><a href="">Ella Enchanted</a></i>. More recent favorites include <i className="utl-color--elizabeth"><a href="">Fangirl</a></i> by Rainbow Rowell—okay, anything by Rainbow Rowell—and Maureen Johnson’s <i className="utl-color--elizabeth"><a href="">Truly Devious series</a></i>. Beth identifies as a Hufflepuff.
              </p>
            </section>
            <section>
              <h2 className="utl-color--mary">Mary</h2>
              <p>
                Mary grew up on a strict diet of epic fantasy passed down to her from <i className="utl-color--mary"><a href="">Lord of the Rings</a></i> loving parents. Today, that love of fantasy shares space with her other literary obsessions: Young Adult fiction and early British novels. Some of her favorite authors include Jane Austen, the Bronte sisters,  Leigh Bardugo, and Laini Taylor, and her favorite novel of all time (defying everything she just said about her favorites genres) is <i className="utl-color--mary"><a href="">East of Eden</a></i> by John Steinbeck. From a young age, Mary knew that books were her future, and now this Ravenclaw is teaching literature and sharing her love of reading with anyone who will listen. When she’s not devouring fantasy novels in a single sitting, Mary can be found writing, playing music (poorly), and cuddling with her dogs.
              </p>
            </section>
            <section>
              <h2 className="utl-color--catherine">Catherine</h2>
              <p>
                As an adolescent, Catherine lived in the farm country of rural Ohio. Being far away from other people, she went to the library twice a week and read everything in the YA section she could touch. Now, she lives in a small city and works as a software engineer, building full-stack applications (including this blog!). Her hobbies include reading (duh), video games, drawing, and making cat jokes. Catherine's favorite genre is fantasy (both Epic and YA), and her most beloved reads are Garth Nix's <i className="utl-color--catherine"><a href="">Sabriel</a></i>, Jane Austen's <i className="utl-color--catherine"><a href="">Pride and Prejudice</a></i>, Brandon Sanderson's <i className="utl-color--catherine"><a href="">The Way of Kings</a></i>, and more recently, <i className="utl-color--catherine"><a href="">An Ember in the Ashes</a></i> by Sabaa Tahir. She's a Ravenclaw with a Slytherin streak, and has a proper witchy familiar, her black cat, Alexei.
              </p>
            </section>
            <section>
              <h2 className="utl-color--lydia">Lydia</h2>
              <p>
                Lydia still isn’t sure what she wants to be when she grows up, even though she’s technically been an adult for years. She’s a jack of all trades, master of none...except for reading. Whether it’s science fiction/fantasy (her favorite genre, YA or adult) or romance (her second favorite genre), she can plow through a book like nobody’s business. When she’s not reading, there are a few other things she’ll spend time on—teaching, cross-stitch, TV, and eclipse chasing. A Ravenpuff (it’s totally a valid house!) and dedicated cat-mom, Lydia always makes time to reread her favorites: <i className="utl-color--lydia"><a href="">The Count of Monte Cristo</a></i> by Alexandre Dumas, <i className="utl-color--lydia"><a href="">Bet Me</a></i> by Jennifer Crusie, <i className="utl-color--lydia"><a href="">The Immortal Prince</a></i> by Jennifer Fallon, and Tamora Pierce’s <i className="utl-color--lydia"><a href="">The Immortals series</a></i>. 
              </p>
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
