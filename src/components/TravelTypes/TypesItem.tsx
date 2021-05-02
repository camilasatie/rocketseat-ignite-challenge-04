import { 
  HStack, 
  Image, 
  Text, 
  useBreakpointValue, 
  VStack 
} from "@chakra-ui/react";

interface TypesItemProps {
  description: string;
  icon: string;
  isBold?: boolean;
}

export function TypesItem({ description, icon, isBold = false }: TypesItemProps) {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  const renderMobile = () => (
    <HStack p='10px'>
      <Image src='/images/bullet.svg' alt={description} />
      <Text
        fontSize='1.125rem'
        fontWeight='400'
        ml='8px'
      >
        {description}
      </Text>
    </HStack>
  );

  const renderDesktop = () => (
    <VStack>
      <Image 
        src={`/images/${icon}.svg`} 
        alt={description} 
        width={85}
        height={85}
      />
      <Text
        fontSize='1.125rem'
        fontWeight='600'
        color={isBold ? '#000' : 'gray.500'}
      >
        {description}
      </Text>
    </VStack>
  );

  return (
    <>
      {isMobile ? renderMobile() : renderDesktop()}
    </>
  );
}