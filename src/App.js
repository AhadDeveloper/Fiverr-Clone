import React, { Fragment } from 'react';

import FiverrIcon from './components/FiverrIcon';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Fragment>
      <FiverrIcon />
      <Header />
      <main>
        <MainContent />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
