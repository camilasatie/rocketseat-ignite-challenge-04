import { Box, Flex, Heading, HStack, Image, Text, Wrap } from "@chakra-ui/react";
import { CircleFlag } from "react-circle-flags";

interface CardProps {
  cities: {
    image: string,
    city: string,
    country: string,
    flag: string,
    id: string,
  }[]
}

export function Card({
  cities
}: CardProps) {
  return (
    <Wrap spacing="2.5rem" justify={[
      'center', 
      'center', 
      'space-around',
      'space-around',
      'space-between'
      ]}
    >
      {cities.map(city => (
        <Box 
          key={city.id}
          maxW="sm" 
        >
          <Image src={city.image} alt={city.city} />
          <HStack
            display='flex'
            justifyContent='space-between'
            py='18px'
            px='24px'
            borderWidth="1px" 
            borderBottomRadius="lg" 
            borderBottomColor='yellow.500'
            borderRightColor='yellow.500'
            borderLeftColor='yellow.500'
            overflow="hidden"
          >
            <Box>
              <Heading 
                as='h4'
                color='gray.500'
                fontSize='1.125rem'
                fontWeight='600'
              >
                { city.city }
              </Heading>
              <Text
                color='gray.300'
                fontSize='1rem'
              >
                { city.country }
              </Text>
            </Box>
            <CircleFlag countryCode={ city.flag } width='30' height='30' />
          </HStack>
        </Box>
      ))}
    </Wrap>
  )
}