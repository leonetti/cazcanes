/* eslint-disable max-len */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Welcome from '../components/Welcome';
import HeroContent from '../components/HeroContent';
import HeroTrue from '../components/HeroTrue';
import HeroWater from '../components/HeroWater';
import HeroAgave from '../components/HeroAgave';
import HeroFermentation from '../components/HeroFermentation';
import HeroAttention from '../components/HeroAttention';
import ProductsContainer from '../components/ProductsContainer';
import ProductLink from '../components/ProductLink';

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
  blanco: file(relativePath: {eq: "blanco.jpg"}){
    id
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  reposado: file(relativePath: {eq: "reposado.jpg"}){
    id
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  anejo: file(relativePath: {eq: "reposado.jpg"}){
    id
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  hero: file(relativePath: {eq: "hero.png"}){
    id
    childImageSharp {
      fluid(maxWidth: 1500) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  water: file(relativePath: {eq: "water.png"}){
    id
    childImageSharp {
      fluid(maxWidth: 1500) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  agave: file(relativePath: {eq: "agave.png"}){
    id
    childImageSharp {
      fluid(maxWidth: 1500) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  fermentation: file(relativePath: {eq: "fermentation.png"}){
    id
    childImageSharp {
      fluid(maxWidth: 1500) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  attention: file(relativePath: {eq: "attention.png"}){
    id
    childImageSharp {
      fluid(maxWidth: 1500) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}`;

const IndexPage = ({ data }) => (
  <Layout>
    <Head
      title="Home"
    />
    <Welcome
      img={data.welcome.childImageSharp.fluid}
      alt="blanco and reposado tequila"
    />
    <HeroContent altOverlay img={data.hero.childImageSharp.fluid}>
      <HeroTrue />
    </HeroContent>
    <ProductsContainer>
      <ProductLink
        img={data.blanco.childImageSharp.fluid}
        title="Blanco"
        slug="/blanco"
        alt="blanco tequila"
      />
      <ProductLink
        img={data.reposado.childImageSharp.fluid}
        title="Reposado"
        slug="/reposado"
        alt="reposado tequila"
      />
      <ProductLink
        img={data.anejo.childImageSharp.fluid}
        title="Anejo"
        slug="/anejo"
        alt="anejo tequila"
      />
    </ProductsContainer>
    <HeroContent fadeLeft invert img={data.water.childImageSharp.fluid}>
      <HeroWater />
    </HeroContent>
    <HeroContent fadeRight invert img={data.agave.childImageSharp.fluid}>
      <HeroAgave />
    </HeroContent>
    <HeroContent fadeLeft invert img={data.fermentation.childImageSharp.fluid}>
      <HeroFermentation />
    </HeroContent>
    <HeroContent fadeRight invert img={data.attention.childImageSharp.fluid}>
      <HeroAttention />
    </HeroContent>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    welcome: PropTypes.object.isRequired,
    hero: PropTypes.object.isRequired,
    blanco: PropTypes.object.isRequired,
    reposado: PropTypes.object.isRequired,
    anejo: PropTypes.object.isRequired,
    water: PropTypes.object.isRequired,
    agave: PropTypes.object.isRequired,
    fermentation: PropTypes.object.isRequired,
    attention: PropTypes.object.isRequired,
  }).isRequired,
};

export default IndexPage;
