import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";

export default class bookPageLayout extends Component {
  render() {
    const { file } = this.props.data;
    const currentPage = file.name;
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
    var conCurrentPage = Number(currentPage);
    const nextPage = (conCurrentPage + 1).toString();

    return (
      <Layout>
        <Img fluid={file.childImageSharp.fluid} />
        <ul
          style={{
            background: `pink`,

            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            margin: 0,
            marginBottom: 0,
            paddingBottom: 0,
          }}
        >
          <li>
            {prevPage && (
              <Link to={`/${prevPage}`} rel="prev">
                ← {prevPage}
              </Link>
            )}
          </li>
          <li>
            {nextPage && (
              <Link to={`/${nextPage}`} rel="next">
                {nextPage} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}

export const query = graphql`
  query PageQuery($slug: String!) {
    file(name: { eq: $slug }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
      id
      name
      absolutePath
      relativePath
    }
  }
`;

// <img
//           style={{
//             width: `66px`,
//           }}
//           src={file.absolutePath}
//           alt="LillianUnicorn2"
//         />
//         <img
//           style={{
//             width: `66px`,
//           }}
//           src={file.relativePath}
//           alt="LillianUnicorn2"
//         />
