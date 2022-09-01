import { extendTheme, theme as base } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    primary: '#FCF5C7',
  },
  shadows: {
    'lg.green': '0 10px 15px -3px rgba(0, 50, 0, 0.1), 0 4px 6px -2px rgba(0, 50, 0, 0.05)',
    solid: '0.8rem 0.8rem 0 -0.2rem rgba(0, 0, 0, 0.1)',
  },
  styles: {
    global: (props) => ({
      body: {
        bg: 'green.50',
      },
      '::placeholder': {
        color: 'gray.400',
      },
      '::selection': {
        bg: 'green.100',
      },
      '::-webkit-scrollbar': {
        WebkitAppearance: 'none',
        appearance: 'none',
        width: '8px',
        height: '8px',
      },
      '::-webkit-scrollbar-thumb': {
        bg: 'green.400',
        borderRadius: '8px',
      },
      '::-webkit-scrollbar-track': {
        bg: 'gray.200',
      },
      '.flash': {
        animation: 'flash 0.2s steps(2) infinite',
      },
      '@keyframes flash': {
        to: { opacity: 0 },
      },
    }),
  },
  fonts: {
    heading: `'Zen Maru Gothic', ${base.fonts?.heading}`,
    body: `'微軟正黑', ${base.fonts?.body}`,
  },
})
