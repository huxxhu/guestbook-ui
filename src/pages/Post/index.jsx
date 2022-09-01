import { useEffect, useState } from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { Link, Text, Container, Divider, HStack, VStack, Box, Button, Icon, Spinner } from '@chakra-ui/react'
import { FaPencilAlt } from 'react-icons/fa'

import { getPosts } from '../../api/posts'

const PostCard = ({ name, content, createdAt, ip, reply, ...props }) => {
  const dateFormat = new Date(createdAt).toLocaleString('zh-TW')
  return (
    <Box borderRadius='2rem' p={5} color='gray.900' bg='white' boxShadow='solid'>
      <Text
        fontSize='sm'
        mb='4'
        fontWeight='600'
        _before={{ content: `"♥"`, marginRight: '0.4em', color: 'green.400' }}
      >
        {name}
      </Text>
      <Text whiteSpace='pre-line'>{content}</Text>
      <Text
        fontSize='xs'
        color='gray.600'
        align='right'
        display='flex'
        alignItems='center'
        whiteSpace='nowrap'
        mt={2}
        _before={{ content: `""`, height: '1px', bg: 'green.400', width: '100%', display: 'block', mr: '1em' }}
      >
        {dateFormat} - 來自: {ip}
      </Text>
      {reply && (
        <Box borderRadius='1em' mt={2} p={3} bg='green.50' color='green.400' fontSize='sm'>
          <Text as='span' mb='1' fontWeight='600'>
            版主回覆：
          </Text>
          <Text whiteSpace='pre-line'>{reply.content}</Text>
        </Box>
      )}
    </Box>
  )
}
const Post = () => {
  const [postData, setPostData] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)

    getPosts({ page, limit: 10 })
      .then((data) => {
        setPostData(data)
      })
      .then(() => setIsLoading(false))

    window.scrollTo(0, 0)
  }, [page])
  const pageHandler = (index) => {
    setPage(index + 1)
  }
  return (
    <Container>
      <Spinner opacity={isLoading ? '1' : '0'} size='xl' pointerEvents='none' position='fixed' top='50%' left='50%' />
      <Box textAlign='center' mb='6'>
        <Link as={RouteLink} to='/form'>
          <Button leftIcon={<Icon as={FaPencilAlt} className='flash' />} colorScheme='yellow'>
            我要留言
          </Button>
        </Link>
      </Box>
      <VStack spacing={6} align='stretch' opacity={isLoading ? '0.4' : '1'} transition='opacity 0.3s'>
        {postData.data?.length > 0 &&
          postData.data?.map((data) => (
            <PostCard
              key={data._id}
              name={data.name}
              content={data.content}
              createdAt={data.createdAt}
              ip={data.ip}
              reply={data.reply}
            />
          ))}
      </VStack>
      {postData.pagination?.pageTotal > 1 && (
        <HStack justify='center' mt='6'>
          {[...Array(postData.pagination?.pageTotal)].map((data, index) => (
            <Button
              colorScheme='green'
              size='sm'
              isActive={page === index + 1}
              pointerEvents={page === index + 1 ? 'none' : 'auto'}
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
