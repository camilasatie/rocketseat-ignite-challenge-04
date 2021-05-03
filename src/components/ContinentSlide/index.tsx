import Link from 'next/link';
import { Container, Heading, Text, VStack } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
} from 'swiper/core';

SwiperCore.use([Navigation,Pagination,Autoplay]);

export function ContinentSlide({ continents }) {
  return (
    <Container maxWidth='container.xl' mb='40px'>
      <Heading
        as='h2'
        fontSize={['1.25rem', '2.25rem']}
        fontWeight='500'
        textAlign='center'
        py={['24px', '54px']}
      >
        Vamos nessa?
        <Text>Então escolha seu continente</Text>
      </Heading>

      <Swiper 
        slidesPerView={1}
        autoplay={{delay: 5000}}
        navigation
        pagination
      >
      { 
        continents.map(continent => (
          <SwiperSlide key={continent.id}>
            <VStack
              backgroundImage={`
              linear-gradient(
                rgba(0, 0, 0, 0.6), 
                rgba(0, 0, 0, 0.6)
              ),
                url('${continent.callToActionImage}')
              `}
              backgroundPosition='center'
              backgroundRepeat='no-repeat'
              backgroundSize='cover'
              display='flex'
              justify='center'
              align='center'
              width='100%'
              height='450px'
            >
              <Link href={`/continents/${continent.id}`}>
                <a>
                  <Heading 
                    as='h2'
                    color='gray.100'
                    fontSize={['1.5rem', '3rem']}
                  >
                    {continent.name}
                  </Heading>
                  <Heading
                    as='h3'
                    color='gray.100'
                    fontSize={['0.875rem', '1.5rem']}
                    mt='16px'
                  >
                    {continent.callToActionMessage}
                  </Heading>
                </a>
              </Link>
            </VStack>
          </SwiperSlide>
        ))
      }
      </Swiper>
    </Container>
  )
}