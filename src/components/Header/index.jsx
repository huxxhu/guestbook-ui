import { Link as RouteLink } from 'react-router-dom'
import { Center, Heading, Box, keyframes } from '@chakra-ui/react'

const animationKeyframes = keyframes`
  to { opacity: 0}
`
const animation = `${animationKeyframes} 0.2s steps(2) infinite`

const Header = () => {
  return (
    <Center
      as={RouteLink}
      to='/'
      borderRadius='3rem'
      bg='green.400'
      color='white'
      m='6'
      overflow='hidden'
      boxShadow='solid'
    >
      <Heading
        as='h1'
        noOfLines={1}
        w='100%'
        lineHeight='1'
        textShadow='
          -1px -1px 0 black,
          1px -1px 0 black,
          -1px 1px 0 black,
          1px 1px 0 black'
        // sx={
        //   {
        //     WebkitTextStroke: '2px green',
        //     textStroke: '2px green',
        //   }
        // }
      >
        <Box as='marquee' scrollamount='12' behavior='alternate' className='flash' display='block'>
          <Box
            as='marquee'
            scrollamount='12'
            direction='down'
            h='8.375rem'
            behavior='alternate'
            display='block'
            lineHeight={window.safari !== undefined ? '8.375rem' : '1'}
          >
            Oo 窩ㄉ板板 oO
          </Box>
        </Box>
      </Heading>
    </Center>
  )
}

export default Header
