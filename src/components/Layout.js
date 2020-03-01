import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from '@material-ui/core';
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
      <Container>{children}</Container>
    </>
  );
};

export default TemplateWrapper;
