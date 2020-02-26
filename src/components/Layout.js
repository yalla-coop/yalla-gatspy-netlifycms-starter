import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import useSiteMetadata from "./SiteMetadata";

import { Container } from "@material-ui/core";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <Fragment>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      <Navbar />
      <Container>{children}</Container>
    </Fragment>
  );
};

export default TemplateWrapper;
