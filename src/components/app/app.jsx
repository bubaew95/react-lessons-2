import React from 'react';
import './app.css';

import Header from '../../site-components/header'
import SideBar from '../../site-components/sidebar'
import HeadSlider from '../../site-components/head-slider';
import RandomBooks from '../../site-components/random-books';
import RecommendedBooks from '../../site-components/recommended-books';
import FrequentlyRead from '../../site-components/frequently-read';
import Footer from '../../site-components/footer';

function App() {
  return (
    <>
      <Header />
      <SideBar />

      <div id="content-page" className="content-page">
        <div className="container-fluid">
          <div className="row">

            {/* <HeadSlider /> */}
            <RandomBooks />
            <RecommendedBooks />
            <FrequentlyRead />
          </div>
        </div>
      </div>

      <Footer />

    </>
  );
}

export default App;
