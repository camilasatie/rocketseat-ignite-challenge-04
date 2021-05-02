import { Flex, Heading, Text, Container, Image } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex 
      as='section'
      backgroundImage="url('/images/background.svg')"
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      py='28px'
    >
      <Container 
        maxW="container.xl" 
        display='flex'
        alignItems='center'
        justifyContent='space-between'
      >
        <div>
          <Heading
            as='h1'
            color='gray.50'
            fontSize={['1.25rem', '2.25rem']}
            fontWeight='500'
            lineHeight='1.5'
          >
            5 Continentes, 
            <Text>infinitas possibilidades.</Text>
          </Heading>
          <Text 
            color='gray.100'
            fontSize={['0.875rem', '1.25rem']}
            mt='8px'
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
          </Text>
        </div>
        <Image 
          src='/images/airplane.svg'
          alt='airplane'
          transform="translateY(70px)"
          display={['none', 'none', 'none', 'block']}
          width={['300px', '370px', '420px']}
        />
      </Container>
    </Flex>
  );
}