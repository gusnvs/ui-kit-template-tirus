import { extendTheme } from '@chakra-ui/react'
import { ButtonStyles } from './components/ButtonStyles'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
}

const theme = extendTheme({
  semanticTokens: {
    colors: {
      primary: {
        default: '#2F56A5',
        _dark: '#2569FE',
      },
      text: {
        default: 'black',
        _dark: 'white',
      }
    },
    radii: {
      button: '12px',
    },
  },
  colors: {
    black: '#16161D',
    cinza1: '#484848',
    cinza2: '#959595',
    cinza3: '#D4D4D4',
    cinza4: '#F5F5F5',
    white: '#FFF'
  },
  fonts,
  breakpoints,
  components: {
    Button: ButtonStyles
  }
})

export default theme
