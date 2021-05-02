import { Container, Flex, useBreakpointValue } from "@chakra-ui/react";
import { TypesItem } from "./TypesItem";


export function TravelTypes() {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  return (
    <Container maxWidth='container.xl'>
      <Flex 
        flexWrap='wrap'
        align='center'
        justify={['space-around', 'space-around', 'space-between']}
        py={['36px', '36px', '100px']}
        px={['15px', '0px']}
      >
        <TypesItem description='vida noturna' icon='cocktail' isBold />
        <TypesItem description='praia' icon='surf'/>
        <TypesItem description='moderno' icon='building'/>
        <TypesItem description='clássico' icon='museum'/>
        <TypesItem description='e mais...' icon='earth'/>
      </Flex>
    </Container>
  );
}