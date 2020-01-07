import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Head from '../components/Head';
import ProductLinkFull from '../components/ProductLinkFull';
import productsStyles from '../styles/Products.module.scss';

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
  reposado: file(relativePath: {eq: "reposado.jpg"}){
    id
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  anejo: file(relativePath: {eq: "reposado.jpg"}){
    id
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}`;

const Products = ({ data }) => (
  <Layout>
    <Head
      title="Products"
    />
    <section className={productsStyles.container}>
      <Heading
        title="Our Tequilas"
        subtitle="All hand-crafted and made with quality ingredients"
      />
      <ProductLinkFull img={data.blanco.childImageSharp.fluid} title="NO.9 Blanco" slug="/blanco" alt="blanco tequila" slogan="Fresh out of the still and into a hand made glass bottle. No aging." />
      <ProductLinkFull img={data.reposado.childImageSharp.fluid} title="NO.7 Reposado" slug="/reposado" alt="reposado tequila" slogan="Fresh out of the still and into a hand made glass bottle. No aging." />
      <ProductLinkFull img={data.anejo.childImageSharp.fluid} title="NO.7 A&#241;ejo" slug="/anejo" alt="anejo tequila" slogan="Fresh out of the still and into a hand made glass bottle. No aging." />
    </section>
  </Layout>
);

Products.propTypes = {
  data: PropTypes.shape({
    blanco: PropTypes.object.isRequired,
    reposado: PropTypes.object.isRequired,
    anejo: PropTypes.object.isRequired,
  }).isRequired,
};

export default Products;
