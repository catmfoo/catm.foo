import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function Index({ data, location }) {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location}>
      <div>
        <h3>
          <a href="/writing" className="no-line">
            writing →
          </a>
        </h3>
        {posts.map((post) => {
          return (
            <div key={post.frontmatter.slug}>
              <a href={post.frontmatter.slug} className="no-line">
                {post.frontmatter.title}
              </a>
              <time style={{ float: "right" }}>{post.frontmatter.date}</time>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          slug
          date
          title
        }
      }
    }
  }
`;
