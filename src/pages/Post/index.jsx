import { useEffect, useState } from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { Link, Text, Container, Divider, VStack, Box, Button, Icon } from '@chakra-ui/react'
import { FaPencilAlt } from 'react-icons/fa'

import { getPosts } from '../../api/posts'

const PostCard = ({ name, content, createdAt, ip, ...props }) => {
  return (
    <Box borderWidth='1px' borderColor='green.300' borderRadius='md' p={4} bg='green.100' overflow='hidden'>
      <Text fontSize='sm' mb='2' fontWeight='600'>
        {name}
      </Text>
      <p>{content}</p>
      <Divider my='2' borderColor='green.400' borderStyle='dashed' />
      <Text fontSize='xs' color='gray.700' align='right'>
        {createdAt} - 來自: {ip}
      </Text>
    </Box>
  )
}
const Post = () => {
  const [postData, setPostData] = useState([])
  const getData = () => {
    getPosts().then((data) => {
      setPostData(data)
    })
  }
  useEffect(() => {
    getData()
  })
  // TODO: 分頁
  return (
    <Container>
      <Box textAlign='center' mb='6'>
        <Link as={RouteLink} to='/form'>
          <Button leftIcon={<Icon as={FaPencilAlt} />} colorScheme='yellow'>
            我要留言
          </Button>
        </Link>
      </Box>
      <VStack spacing={6} align='stretch'>
        {postData.length > 0 &&
          postData.map((data, index) => (
            <PostCard key={data._id} name={data.name} content={data.content} createdAt={data.createdAt} ip={data.ip} />
          ))}
      </VStack>
    </Container>
  )
}

export default Post
