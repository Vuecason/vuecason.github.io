
import { dark } from '@theme-ui/presets'

export default {
  ...dark,

  colors: {
    ...dark.colors,
    backgroundold: '#000',
    primaryold: '#2a9d8f',
    accentold: '#ef476f',
    background: '#000607',
    primary: '#116466',
    accent: '#d9b08c',
    textColor: '#d1e8E2',

  },
  sizes: {
    sidebar: 856,
  },
  variants: {
    nav: {
      fontWeight: 'bold',
      color: 'inherit',
      textDecoration: 'none',
      '&:hover': {
        color: 'primary',
      },
    },
    button: {
      fontWeight: 'bold',
      bg: 'primary',
      color: 'accent',
      '&:hover': {
        color: 'textColor',
      },
    },
    header: {
      color: 'accent'
    }
  },
}