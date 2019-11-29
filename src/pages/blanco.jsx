import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import {
  faTint, faCocktail, faFillDrip, faMugHot,
} from '@fortawesome/free-solid-svg-icons';
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
  notes: file(relativePath: {eq: "pattern.png"}){
    id
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  blancoUrl: site{
    siteMetadata{
      liquoramaBlanco
    }
  }
}`;

const blancoNotes = [
  {
    title: 'color',
    description: 'Crystal Clear',
    icon: faTint,
  },
  {
    title: 'nose',
    description: 'Floral, Sweet, Citrus, &amp; Candy Cane',
    icon: faMugHot,
  },
  {
    title: 'taste',
    description: 'Clean, Dry, &amp; Smooth',
    icon: faCocktail,
  },
  {
    title: 'finish',
    description: 'Floral &amp; Black Pepper Corn',
    icon: faFillDrip,
  },
];

const blancoAwards = [
  {
    title: '2017 double gold',
    description: 'San Francisco World Spirits Competition',
  },
  {
    title: '2018 double gold',
    description: 'San Francisco World Spirits Competition',
  },
  {
    title: '2018 best tequila',
    description: 'San Francisco World Spirits Competition',
  },
  {
    title: '2018 best unaged wine spirit',
    description: 'San Francisco World Spirits Competition',
  },
];

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
      <ProductDisplay
        img={data.blanco.childImageSharp.fluid}
        imgAlt="blanco tequila"
        buyLink={data.blancoUrl.siteMetadata.liquoramaBlanco}
        slogan="Fresh out of the still and into a hand-made glass bottle. No aging."
        notes={blancoNotes}
        notesImage={data.notes.childImageSharp.fluid}
        awards={blancoAwards}
      />
    </section>
  </Layout>
);

Blanco.propTypes = {
  data: PropTypes.shape({
    blanco: PropTypes.object.isRequired,
    blancoUrl: PropTypes.object.isRequired,
    notes: PropTypes.object.isRequired,
  }).isRequired,
};

export default Blanco;
