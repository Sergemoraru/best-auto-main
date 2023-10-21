import React from 'react';
import MainFooter from './components/footer';
import Navbar from './components/navbar';
import SoldRecent from './sold/soldRecent/page';
import Hero from './components/hero';


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SoldRecent />
      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}
