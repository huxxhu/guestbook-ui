import { Flex, Box } from '@chakra-ui/react'
import RouteElement from './router'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Flex
      flexDir='column'
      minH='100vh'
      // backgroundColor='green.50'
      // backgroundImage='linear-gradient(green.400 1px, transparent 1px), linear-gradient(to right, green.400 1px, green.50 1px)'
      // bgGradient='linear(to-r, green.400 1px, green.50 1px)'
      // bgGradient='linear(green.400 1px, transparent 1px)'

      _before={{
        content: `""`,
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: '-1',
        bgGradient: 'linear(to-r, green.400 1px, green.50 1px)',
        backgroundSize: '24px 24px',
        pointerEvents: 'none',
      }}
      _after={{
        content: `""`,
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: '-1',
        bgGradient: 'linear(green.400 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        pointerEvents: 'none',
        backgroundAttachment: 'fixed',
      }}
    >
      <Header />
      <Box flexGrow='1'>
        <RouteElement />
      </Box>
      <Footer />
    </Flex>
  )
}

export default App
