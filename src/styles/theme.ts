import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
  },
  colors: {
    black: '#000',
    gray: {
      '500': '#47585B',
      '300': '#999999',
      '100': '#DADADA',
      '50': '#F5F8FA',
    },
    yellow: {
      '500': '#FFBA08',
    }
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.500'
      }
    }
  }
});