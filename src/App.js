import React from 'react';

import ContentContainer from './layouts/ContentContainer';
import Footer from './layouts/Footer';
import Header from './layouts/Header';

import './styles/App.scss';

const App = () => {
   return(
      <div id="appContainer">
         <Header />
         <ContentContainer />
         <Footer />
      </div>
   )
}

export default App;