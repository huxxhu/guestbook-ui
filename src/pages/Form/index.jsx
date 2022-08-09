import { useState } from 'react'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import {
  Heading,
  Box,
  Icon,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
} from '@chakra-ui/react'
import { FaPencilAlt } from 'react-icons/fa'
import { addPost } from '../../api/posts'

const Form = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    content: '',
  })
  const handleChange = (e) => {
    const newData = { ...data }
    newData[e.target.name] = e.target.value
    setData(newData)
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    // TODO: 驗證

    console.log(data)
    const { name, content } = data
    addPost({
      name,
      content,
    })
    // TODO: Loading
    // redirect
    navigate('/')
  }
  return (
    <Container>
      <Heading as='h2' size='md' noOfLines={1} textAlign='center' mb='6'>
        <marquee scrollamount='15' direction='right' behavior='alternate'>
          ～～ 卍★㊣ 快.留言ㄛ ㊣☆卍 ～～
        </marquee>
      </Heading>
      <Box
        as='form'
        onSubmit={(e) => handleSubmit(e)}
        bg='white'
        boxShadow='lg'
        borderRadius='md'
        p={6}
        borderLeftWidth='4px'
        borderColor='green.400'
      >
        <FormControl isRequired mb='4'>
          <FormLabel>暱稱</FormLabel>
          <Input onChange={handleChange} value={data.name} name='name' placeholder='不要亂寫ㄛ！' />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>留言內容</FormLabel>
          <Textarea
            onChange={handleChange}
            value={data.content}
            name='content'
            placeholder='想對窩說什ㄇ～ ｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡'
          />
        </FormControl>
        <Box mt='6' textAlign='center'>
          <Button type='submit' leftIcon='🚀' colorScheme='yellow'>
            送出
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Form
