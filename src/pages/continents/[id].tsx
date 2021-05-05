import { GetStaticPaths, GetStaticProps } from 'next';
import { Container, Flex, Heading, Icon, SimpleGrid, Text } from '@chakra-ui/react';

import { Head } from '../../components/Head';
import { Header } from '../../components/Header';

import { continents } from '../data';
import { InternalBanner } from './components/InternalBanner';
import { Card } from './components/Card';
import { Numbers } from './components/Numbers';

import { continentsProps } from '../types';

import { IoMdInformationCircleOutline } from "react-icons/io";
interface ContinentsPageProps {
  continent: continentsProps;
}

export default function ContinentsPage({ continent }: ContinentsPageProps) {
  return (
    <>
      <Head />
      <Header isInternalPage />
      <InternalBanner 
        background={continent.callToActionImage} 
        title={continent.name}
      />
      <Container maxWidth='container.xl'>
        <SimpleGrid 
          columns={[1, 1, 2]} 
          spacing={['1rem', '2.5rem', '5rem']} 
          py={['1.5rem', '5rem']}
        >
          <Text 
            fontSize={['0.875rem', '1.5rem']}
            textAlign='justify'
          >
            {continent.description}
          </Text>
          <Flex 
            direction='row' 
            justify='space-around' 
            align='center'
          >
            <Numbers number={continent.countriesNumber} label='países' />
            <Numbers number={continent.languagesNumber} label='línguas' />
            <Numbers 
              number={continent.citiesNumber} 
              label='cidades +100' 
              icon={<Icon as={IoMdInformationCircleOutline} color="gray.400" fontSize='1.125rem' margin='5px'/>}
              moreCities={continent.moreCities}
            />
          </Flex>
        </SimpleGrid>
        
        <Heading
          as='h2'
          fontSize={['1.5rem', '2.25rem']}
          fontWeight='500'
          pb={['20px', '40px']}
        >
          Cidades +100
        </Heading>
        <Card cities={continent.cities} />
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = continents.map(continent => ({
    params: {
      id: continent.id
    }
  }))
  
  return {
    paths: paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const getContinent = continents.filter(
    continent => continent.id === params.id
  );

  return {
    props: {
      continent: getContinent[0],
    }
  }
}
