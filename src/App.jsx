import { Flex, Box } from '@chakra-ui/react'
import RouteElement from './router'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Flex
      flexDir='column'
      minH='100vh'
      bgGradient='linear(green.400 1px, transparent 1px)'
      backgroundSize='24px 24px'
      bgAttachment='fixed'
      bgPos='-1px -1px'
      _before={{
        content: `""`,
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: '-1',
        bgGradient: 'linear(to-r, green.400 1px, transparent 1px)',
        backgroundSize: 'inherit',
        pointerEvents: 'none',
        bgPos: 'inherit',
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
