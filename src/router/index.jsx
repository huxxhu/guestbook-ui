import { useRoutes } from 'react-router-dom'
import Post from '../pages/Post'
import Form from '../pages/Form'

const routes = [
  {
    index: true,
    element: <Post />,
  },
  {
    path: 'form',
    element: <Form />,
  },
]

const RouteElement = () => {
  const element = useRoutes(routes)
  return element
}

export default RouteElement
