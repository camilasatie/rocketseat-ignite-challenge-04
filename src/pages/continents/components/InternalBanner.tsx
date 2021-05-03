import { 
  Container,
  Heading, 
  VStack 
} from '@chakra-ui/react';

interface InternalBannerProps {
  background: string;
  title: string;
}

export function InternalBanner({ 
  background, 
  title 
}: InternalBannerProps) {
  return (
    <VStack
      backgroundImage={`
        linear-gradient(
          rgba(0, 0, 0, 0.4), 
          rgba(0, 0, 0, 0.4)
        ),
        url('${background}')
      `}
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      display='flex'
      justify={['center', 'flex-end']}
      width='100%'
      height={['150px', '500px']}
    >
      <Container 
        maxWidth='container.xl'
      >
        <Heading 
          as='h1'
          color='gray.200'
          fontSize={['1.75rem', '3rem']}
          fontWeight='600'
          textAlign={['center', 'left']}
          mb='5%'
        >
          { title }
        </Heading>
      </Container>
    </VStack>
  )
}
