import { Container, Flex, Icon, Link } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <Container>
      <Flex
        bg='black'
        color='white'
        fontSize='sm'
        alignItems='center'
        justifyContent='center'
        mt='12'
        p='2'
        borderTopRadius='4rem'
      >
        © huhu σ`∀´)σ
        <Link fontSize='xl' fontWeight={500} ml={4} href='https://github.com/huxxhu' isExternal>
          <Icon as={FaGithub} />
        </Link>
      </Flex>
    </Container>
  )
}

export default Footer
