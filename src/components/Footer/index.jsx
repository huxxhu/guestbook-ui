import { Flex, Icon, Link } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <Flex bg='yellow.400' fontSize='sm' alignItems='center' justifyContent='center' mt='12' p='2'>
      σ`∀´)σ
      <Link fontSize='xl' fontWeight={500} ml={4} href='https://github.com/huxxhu' isExternal>
        <Icon as={FaGithub} />
      </Link>
    </Flex>
  )
}

export default Footer
