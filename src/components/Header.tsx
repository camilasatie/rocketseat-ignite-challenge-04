import Link from 'next/link';

import { Flex, Icon, Image, IconButton, Container } from '@chakra-ui/react';
import { RiArrowLeftSLine } from 'react-icons/ri'

type HeaderProps = {
  isInternalPage?: boolean;
}

export function Header({ isInternalPage }: HeaderProps) {

  const renderBackBtn = () => (
    <Link href='/' passHref>
      <IconButton 
        aria-label='Go Back' 
        icon={<Icon as={RiArrowLeftSLine} />}
        variant='unstyled'
        fontSize={['16', '28']}
      />
    </Link>
  );

  return (
    <Container maxWidth='container.xl'>
      <Flex
        as='header'
        align='center'
        justify='space-between'
        maxWidth={['1160']}
        py={['15px', '27px']}
      >
        { isInternalPage && renderBackBtn() }
        <Image 
          src='/images/logo.svg' 
          alt='worldtrip' 
          width={['84px', '184px']} 
          height={['20px', '46px']}
          margin='auto'
        />
      </Flex>
    </Container>
  );
}