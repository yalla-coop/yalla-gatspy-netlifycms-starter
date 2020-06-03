import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Img from '../components/PreviewCompatibleImage';
import Layout from '../components/Layout';

const styles = {
  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '300px',
    height: '500px',
  },
};
export const IndexPageTemplate = ({ image, title }) => {
  return (
    <>
      <div style={styles.div}>
        <h2>{title || 'Yalla'}</h2>
        <h3>Gatsby and netlify-CMS</h3>
        <div style={styles.image}>
          <Img imageInfo={image} />
        </div>
      </div>
    </>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
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
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        templateKey
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
