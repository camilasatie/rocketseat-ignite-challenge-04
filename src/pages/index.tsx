import { GetStaticProps } from 'next';
import { Divider } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { ContinentSlide } from '../components/ContinentSlide';
import { Head } from '../components/Head';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';

import { continents } from './data';

export default function Home({ continents }) {
  console.log(continents)

  return (
    <div>
      <Head />
      <Header />
      <main>
        <Banner />
        <TravelTypes />
        <Divider 
          border='1px'
          borderColor='gray.500' 
          width={['60px', '90px']} 
          margin='0 auto'
        />
        <ContinentSlide continents={continents}/>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      continents
    }
  }
};
