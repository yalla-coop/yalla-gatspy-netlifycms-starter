import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Img from "../components/PreviewCompatibleImage";
import Layout from "../components/Layout";

const styles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  image: {
    width: "300px",
    height: "500px"
  }
});
export const IndexPageTemplate = ({ image, title }) => {
  const classes = styles();
  return (
    <>
      <Container className={classes.container}>
        <Typography variant="h2" color="secondary" align="center">
          {title || "Yalla"}
        </Typography>
        <Typography variant="h3" color="primary" align="center">
          Gatsby and netlify-CMS
        </Typography>
        <div className={classes.image}>
          <Img imageInfo={image} />
        </div>
      </Container>
    </>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate image={frontmatter.image} title={frontmatter.title} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        templateKey
        tags
        image {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
