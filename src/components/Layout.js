import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import useSiteMetadata from './SiteMetadata';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TemplateWrapper;
