import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Heading from '../components/Heading';
import ProductDisplay from '../components/ProductDisplay';
import blancoStyles from '../styles/Blanco.module.scss';

export const query = graphql`
query {
  blanco: file(relativePath: {eq: "blanco.jpg"}){
    id
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}`;

const Blanco = ({ data }) => (
  <Layout>
    <section className={blancoStyles.container}>
      <Head
        title="Blanco"
      />
      <Heading
        pretitle="Cazcanes"
        title="No.9 Blanco"
      />
      <ProductDisplay img={data.blanco.childImageSharp.fluid} />
    </section>
  </Layout>
);

Blanco.propTypes = {
  data: PropTypes.shape({
    blanco: PropTypes.object.isRequired,
  }).isRequired,
};

export default Blanco;
