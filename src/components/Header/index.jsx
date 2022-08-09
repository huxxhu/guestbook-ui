import { Center, Heading } from '@chakra-ui/react'

const Header = () => {
  return (
    <Center bg='green.400' h='6rem' color='white' mb='6'>
      <marquee scrollamount='12'>
        <Heading as='h1' noOfLines={1}>
          Oo 窩ㄉ板板 oO
        </Heading>
      </marquee>
    </Center>
  )
}

export default Header
