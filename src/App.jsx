import { Flex, Box } from '@chakra-ui/react'
import RouteElement from './router'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Flex flexDir='column' minH='100vh' bg='gray.50'>
      <Header />
      <Box flexGrow='1'>
        <RouteElement />
      </Box>
      <Footer />
    </Flex>
  )
}

export default App
