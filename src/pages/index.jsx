/* eslint-disable max-len */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
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
import indexStyles from '../styles/Index.module.scss';

export const query = graphql`
query {
  welcome: file(relativePath: {eq: "welcome.png"}){
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
  anejo: file(relativePath: {eq: "anejo.jpg"}){
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
  logo: file(relativePath: {eq: "logo.png"}){
    id
    childImageSharp {
      fluid(maxWidth: 1500) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  awards: file(relativePath: {eq: "awards.png"}){
    id
    childImageSharp {
      fluid(maxWidth: 1500) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  hero_background: file(relativePath: {eq: "hero_background.png"}){
    id
    childImageSharp {
      fluid(maxWidth: 1500) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  hero_content: file(relativePath: {eq: "hero_content.png"}){
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
      logo={data.logo.childImageSharp.fluid}
      alt="Cazcanes: blanco, reposado, and anejo tequila"
    />
    <BackgroundImage
      Tag="div"
      fluid={data.hero_background.childImageSharp.fluid}
      backgroundColor="#cccccc"
      preserveStackingContext
      className={indexStyles.background}
    >
      <Img
        fluid={data.hero.childImageSharp.fluid}
        alt="Cazcanes Tequila"
        className={indexStyles.image}
      />
    </BackgroundImage>
    <ProductsContainer>
      {/* <Img
        fluid={data.awards.childImageSharp.fluid}
        alt="Cazcanes Awards"
        className={indexStyles.image}
      /> */}
      <ProductLink
        img={data.blanco.childImageSharp.fluid}
        title="NO.9 Blanco"
        slug="/blanco"
        alt="blanco tequila"
      />
      <ProductLink
        img={data.reposado.childImageSharp.fluid}
        title="NO.7 Reposado"
        slug="/reposado"
        alt="reposado tequila"
      />
      <ProductLink
        img={data.anejo.childImageSharp.fluid}
        title="NO.7 Anejo"
        slug="/anejo"
        alt="anejo tequila"
      />
    </ProductsContainer>
    <div className={indexStyles.hero__container}>
      <HeroContent fadeLeft invert top img={data.water.childImageSharp.fluid}>
        <HeroWater />
      </HeroContent>
      <HeroContent fadeRight invert top img={data.agave.childImageSharp.fluid}>
        <HeroAgave />
      </HeroContent>
      <HeroContent fadeLeft invert img={data.fermentation.childImageSharp.fluid}>
        <HeroFermentation />
      </HeroContent>
      <HeroContent fadeRight invert img={data.attention.childImageSharp.fluid}>
        <HeroAttention />
      </HeroContent>
      <HeroContent altOverlay img={data.hero_content.childImageSharp.fluid}>
        <HeroTrue />
      </HeroContent>
    </div>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    welcome: PropTypes.object.isRequired,
    hero: PropTypes.object.isRequired,
    hero_background: PropTypes.object.isRequired,
    blanco: PropTypes.object.isRequired,
    reposado: PropTypes.object.isRequired,
    anejo: PropTypes.object.isRequired,
    water: PropTypes.object.isRequired,
    agave: PropTypes.object.isRequired,
    fermentation: PropTypes.object.isRequired,
    attention: PropTypes.object.isRequired,
    logo: PropTypes.object.isRequired,
    awards: PropTypes.object.isRequired,
    hero_content: PropTypes.object.isRequired,
  }).isRequired,
};

export default IndexPage;
