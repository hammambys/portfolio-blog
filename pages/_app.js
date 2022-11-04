import React from 'react';

import '../styles/globals.scss';
import { Layout } from '../components';

// TODO : delete unused npm packages

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
