import {useColorScheme} from '@mui/material/styles'

/**
 * Return a stateful hero image overlay color, based on current color scheme.
 *
 * @returns {string} Hero image overlay color.
 */
function useHeroOverlayColor(): string {
  const {mode} = useColorScheme()
  if (mode === 'dark') {
    return 'rgba(0, 0, 0, 0.6)'
  }
  return 'rgba(255, 255, 255, 0.6)'
}

export default useHeroOverlayColor
