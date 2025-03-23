import {useColorScheme} from '@mui/material/styles'

function useHeroOverlayColor(): string {
  const {mode} = useColorScheme()
  if (mode === 'dark') {
    return 'rgba(0, 0, 0, 0.6)'
  }
  return 'rgba(255, 255, 255, 0.6)'
}

export default useHeroOverlayColor
