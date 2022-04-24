import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import '../styles/slider.scss';
import { theme } from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App