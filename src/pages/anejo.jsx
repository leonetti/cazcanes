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
  anejo: file(relativePath: {eq: "anejo.jpg"}){
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
  anejoUrl: site{
    siteMetadata{
      liquoramaReposado
    }
  }
}`;

const anejoNotes = [
  {
    title: 'color',
    description: 'Gold Color',
    icon: faTint,
  },
  {
    title: 'nose',
    description: 'Vanilla, Rollo Candy, Raisins, Oak Forest',
    icon: faMugHot,
  },
  {
    title: 'taste',
    description: 'Vanilla, Raisin, Honey, &amp; Oak',
    icon: faCocktail,
  },
  {
    title: 'finish',
    description: 'Caramel, Vanilla, and Rollo Candy',
    icon: faFillDrip,
  },
];


const Anejo = ({ data }) => (
  <Layout>
    <section className={blancoStyles.container}>
      <Head
        title="Anejo"
      />
      <Heading
        pretitle="Cazcanes"
        title="No.7 Anejo"
      />
      <ProductDisplay
        img={data.anejo.childImageSharp.fluid}
        imgAlt="reposado tequila"
        buyLink={data.anejoUrl.siteMetadata.liquoramaReposado}
        notes={anejoNotes}
        notesImage={data.notes.childImageSharp.fluid}
      />
    </section>
  </Layout>
);

Anejo.propTypes = {
  data: PropTypes.shape({
    anejo: PropTypes.object.isRequired,
    anejoUrl: PropTypes.object.isRequired,
    notes: PropTypes.object.isRequired,
  }).isRequired,
};

export default Anejo;
