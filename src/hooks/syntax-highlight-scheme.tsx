import * as React from 'react'
import {oneDark, oneLight} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import {useColorScheme} from '@mui/material/styles'

type SyntaxHighlightStyle = Record<string, React.CSSProperties>

/**
 * Return a stateful CSS style for Syntax Highlighter, based on current color scheme.
 *
 * @returns {Record<string, React.CSSProperties>} CSS style for Syntax Highlighter.
 */
function useSyntaxHighlightStyle(): SyntaxHighlightStyle {
  const {mode} = useColorScheme()
  if (mode === 'dark') {
    return oneDark
  }
  return oneLight
}

export default useSyntaxHighlightStyle
