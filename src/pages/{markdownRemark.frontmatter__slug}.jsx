import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function BlogPostTemplate({ data, location }) {
  const { frontmatter, html } = data.markdownRemark;

  // get formatted date
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(frontmatter.date));

  return (
    <Layout location={location}>
      <article>
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <p style={{ margin: "50px 0" }}>
          {formattedDate}&nbsp;&nbsp;<a href="/about">catmfoo</a>
        </p>
      </article>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date
        slug
        title
      }
    }
  }
`;
