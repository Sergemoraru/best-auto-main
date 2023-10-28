import React from 'react';
import MainFooter from '../app/components/footer';
import Navbar from '../app/components/navbar';
import SoldRecent from './sold/soldRecent/page';
import Hero from '../app/components/hero';


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
