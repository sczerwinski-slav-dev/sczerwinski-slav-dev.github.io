import {useColorScheme} from '@mui/material/styles'

const radius = '20px',
  shift = '2px'

function getColor(mode: string | undefined): string {
  if (mode === 'dark') {
    return '#000000'
  }
  return '#ffffff'
}

/**
 * Return a stateful CSS style of hero text shadow, based on current color scheme.
 *
 * @returns {string} CSS style of hero text shadow.
 */
function useHeroTextShadow(): string {
  const {mode} = useColorScheme(),
    color = getColor(mode)
  return (
    `${color} ${shift} ${shift} ${radius},
    ${color} ${shift} -${shift} ${radius},
    ${color} -${shift} -${shift} ${radius},
    ${color} -${shift} ${shift} ${radius}`
  )
}

export default useHeroTextShadow
