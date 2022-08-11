import { useEffect, useState } from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { Link, Text, Container, Divider, HStack, VStack, Box, Button, Icon } from '@chakra-ui/react'
import { FaPencilAlt } from 'react-icons/fa'

import { getPosts } from '../../api/posts'

const PostCard = ({ name, content, createdAt, ip, ...props }) => {
  const dateFormat = new Date(createdAt).toLocaleString('zh-TW')
  return (
    <Box borderWidth='1px' borderColor='green.300' borderRadius='md' p={4} bg='green.100' overflow='hidden'>
      <Text fontSize='sm' mb='2' fontWeight='600' _before={{ content: `"♥"`, marginRight: '0.4em' }}>
        {name}
      </Text>
      <Text whiteSpace='pre-line'>{content}</Text>
      <Divider my='2' borderColor='green.400' borderStyle='dashed' />
      <Text fontSize='xs' color='gray.700' align='right'>
        {dateFormat} - 來自: {ip}
      </Text>
    </Box>
  )
}
const Post = () => {
  const [postData, setPostData] = useState([])
  const [page, setPage] = useState(1)
  const getData = () => {
    getPosts({ page, limit: 10 }).then((data) => {
      setPostData(data)
    })
  }
  useEffect(() => {
    getData()
  }, [page])
  const pageHandler = (index) => {
    setPage(index + 1)
  }
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
        {postData.data?.length > 0 &&
          postData.data?.map((data) => (
            <PostCard key={data._id} name={data.name} content={data.content} createdAt={data.createdAt} ip={data.ip} />
          ))}
      </VStack>
      {postData.pagination?.pageTotal > 1 && (
        <HStack justify='center' mt='6'>
          {[...Array(postData.pagination?.pageTotal)].map((data, index) => (
            <Button
              colorScheme='yellow'
              variant='outline'
              size='sm'
              isActive={page === index + 1}
              key={'page' + index}
              onClick={() => pageHandler(index)}
            >
              {index + 1}
            </Button>
          ))}
        </HStack>
      )}
    </Container>
  )
}

export default Post
