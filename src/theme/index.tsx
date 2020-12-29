import React, { useMemo } from 'react'
import styled, {
  ThemeProvider as StyledComponentsThemeProvider,
  createGlobalStyle,
  css,
  DefaultTheme
} from 'styled-components'
import { Text, TextProps } from 'rebass'
import { isMobile } from 'react-device-detect'
import { useDarkMode } from '../state/settings/hooks'
import { Colors } from './styled'

const MEDIA_WIDTHS = {
  upToExtraSmall: 500,
  upToSmall: 600,
  upToMedium: 960,
  upToLarge: 1280
}

const mediaWidthTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } = Object.keys(MEDIA_WIDTHS).reduce(
  (accumulator, size) => {
    ;(accumulator as any)[size] = (a: any, b: any, c: any) => css`
      @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
        ${css(a, b, c)}
      }
    `
    return accumulator
  },
  {}
) as any

const white = '#FFFFFF'
const black = '#000000'

export function colors(darkMode: boolean): Colors {
  return {
    // base
    white,
    black,

    // backgrounds
    bg1: darkMode ? '#41485D' : '#FFFFFF',
    bg2: darkMode ? '#2B3246' : '#FFFFFF',

    // text
    text1: darkMode ? '#FFFFFF' : '#41485D',
    text2: darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(65, 72, 93, 0.5)',
    
    // border
    border1: darkMode ? '#5C647B' : 'rgba(65, 72, 93, 0.1)'
  }
}

export function theme(darkMode: boolean): DefaultTheme {
  return {
    ...colors(darkMode),

    grids: {
      sm: 8,
      md: 12,
      lg: 24
    },

    // media queries
    mediaWidth: mediaWidthTemplates,

    // css snippets
    flexColumnNoWrap: css`
      display: flex;
      flex-flow: column nowrap;
    `,
    flexRowNoWrap: css`
      display: flex;
      flex-flow: row nowrap;
    `
  }
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const darkMode = useDarkMode();

  const themeObject = useMemo(() => theme(darkMode), [darkMode])

  return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>
}

const TextWrapper = styled(Text)<{ color: keyof Colors }>`
  color: ${({ color, theme }) => (theme as any)[color]};
`

export const TYPE = {
  logo(props: TextProps) {
    return <TextWrapper fontWeight={600} fontSize={28} color={'text1'} {...props} />
  },

  menuItem(props: TextProps) {
    return <TextWrapper fontWeight='normal' fontSize={16} color={'text1'} {...props} />
  },

  statTotal(props: TextProps) {
    return <TextWrapper fontWeight={900} fontSize={36} color={'text1'} {...props} />
  },
  statLabel({highlight, ...props}: { highlight?: boolean } & TextProps) {
    return <TextWrapper fontWeight='Normal' fontSize={20} color={highlight ? 'text1' : 'text2'} {...props} />
  },
  statValue(props: TextProps) {
    return <TextWrapper fontWeight='Normal' fontSize={24} color={'text1'} {...props} />
  },

  h1(props: TextProps) {
    return <TextWrapper fontWeight={900} fontSize={40} color={'text1'} {...props} />
  },

  assetColumnHeader(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={20} color={'text2'} {...props} />
  },
  assetRowHeader(props: TextProps) {
    return <TextWrapper fontWeight={700} fontSize={24} color={'text1'} {...props} />
  },
  assetCell(props: TextProps) {
    return <TextWrapper fontWeight={700} fontSize={20} color={'text1'} {...props} />
  },
  assetCellLight(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={20} color={'text1'} {...props} />
  }
}

export const ThemedGlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
    font-weight: normal;
    font-family: 'Roboto';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    margin: 0;
    min-height: 100vh;

    background: ${({ theme }) => (isMobile ? '#FFFFFF' : theme.bg2)};
  }
`
