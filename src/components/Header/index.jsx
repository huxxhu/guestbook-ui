import { Center, Heading, Box } from '@chakra-ui/react'

const Header = () => {
  return (
    <Center borderRadius='3rem' bg='green.400' color='white' m='6' overflow='hidden' _before=''>
      <Heading
        as='h1'
        noOfLines={1}
        w='100%'
        lineHeight='1'
        sx={{ '-webkit-text-stroke': '2px green.800', 'text-stroke': '2px green.800' }}
      >
        <Box as='marquee' scrollamount='12' behavior='alternate'>
          <Box as='marquee' scrollamount='12' direction='down' h='8.5rem' behavior='alternate'>
            Oo 窩ㄉ板板 oO
          </Box>
        </Box>
      </Heading>
    </Center>
  )
}

export default Header
