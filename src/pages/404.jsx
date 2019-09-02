import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Heading from '../components/Heading';
import notFoundStyles from '../styles/NotFound.module.scss';

export const query = graphql`
query {
  welcome: file(relativePath: {eq: "2_bottles_shadow.png"}){
    id
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}`;

const NotFound = ({ data }) => (
  <Layout>
    <Head
      title="Not Found"
    />
    <Heading
      title="Page not found"
      subtitle="Drank too much tequila? Check the url"
    >
      <Link to="/" className={notFoundStyles.home}>head home</Link>
    </Heading>
    <Img
      fluid={data.welcome.childImageSharp.fluid}
      alt="blanco and reposado tequila"
      className={notFoundStyles.image}
    />
  </Layout>
);

NotFound.propTypes = {
  data: PropTypes.shape({
    welcome: PropTypes.object.isRequired,
  }).isRequired,
};

export default NotFound;
