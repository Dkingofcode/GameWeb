//import React from 'react';
import Header from '../../components/header/Header';
import Hero from '../../components/Hero/hero';
import Trending from '../../components/Trending/Trending';
import Highlight from '../../components/Highlight/Highlight';
import Services from '../../components/Services/Services';
import Projects from '../../components/Projects/Projects';
import Footer from '../../components/Footer/Footer';


const Home = () => {
  return (
    <div>
      <Header  />
      <Hero  />
      <Trending />
      <Highlight />
      <Services />
      <Projects />
      <Footer /> 
    </div>
  )
}

export default Home;


















