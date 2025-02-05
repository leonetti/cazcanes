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
  reposado: file(relativePath: {eq: "reposado.jpg"}){
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
  reposadoUrl: site{
    siteMetadata{
      liquoramaReposado
    }
  }
}`;

const reposadoNotes = [
  {
    title: 'color',
    description: 'Gold Color',
    icon: faTint,
  },
  {
    title: 'nose',
    description: 'Caramel, Honey, White Pepper, Forest Floor, &amp; Coconut',
    icon: faMugHot,
  },
  {
    title: 'taste',
    description: 'Caramel, Honey, Butter, White Pepper, &amp; Touch or Citrus',
    icon: faCocktail,
  },
  {
    title: 'finish',
    description: 'Sweet &amp; Long Lasting',
    icon: faFillDrip,
  },
];


const Reposado = ({ data }) => (
  <Layout>
    <section className={blancoStyles.container}>
      <Head
        title="Reposado"
      />
      <Heading
        pretitle="Cazcanes"
        title="No.7 Reposado"
      />
      <ProductDisplay
        img={data.reposado.childImageSharp.fluid}
        imgAlt="reposado tequila"
        buyLink={data.reposadoUrl.siteMetadata.liquoramaReposado}
        notes={reposadoNotes}
        notesImage={data.notes.childImageSharp.fluid}
      />
    </section>
  </Layout>
);

Reposado.propTypes = {
  data: PropTypes.shape({
    reposado: PropTypes.object.isRequired,
    reposadoUrl: PropTypes.object.isRequired,
    notes: PropTypes.object.isRequired,
  }).isRequired,
};

export default Reposado;
