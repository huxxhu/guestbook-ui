import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    primary: '#FCF5C7',
  },
  shadows: {
    'lg.green': '0 10px 15px -3px rgba(0, 50, 0, 0.1), 0 4px 6px -2px rgba(0, 50, 0, 0.05)',
  },
  styles: {
    global: (props) => ({
      body: {
        bg: 'green.50',
      },
    }),
  },
})
