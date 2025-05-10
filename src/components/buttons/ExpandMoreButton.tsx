import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import IconButton from '@mui/material/IconButton'

const
  collapsedRotation = '0deg',
  expandedRotation = '180deg'

function getRotation(expanded: boolean): string {
  if (expanded) {
    return expandedRotation
  }
  return collapsedRotation
}

/**
 * "Expand More" button properties.
 *
 * @property {string} label Button accessibility label.
 * @property {boolean} expanded Button expanded state, determining icon rotation.
 * @property {() => void} onClick Callback executed when the button is clicked.
 */
interface ExpandMoreButtonProps {
  label: string
  expanded: boolean
  onClick: () => void
  edge?: 'start' | 'end' | false
}

/**
 * Icon button with "Expand More" icon.
 *
 * @param {ExpandMoreButtonProps} props Button properties.
 */
function ExpandMoreButton(props: ExpandMoreButtonProps) {
  const {label, expanded, onClick, edge} = props

  return (
    <IconButton
      onClick={onClick}
      edge={edge}
      aria-label={label}
      aria-expanded={expanded}
      sx={(theme) => ({
        ml: 'auto',
        my: 0,
        transform: `rotate(${getRotation(expanded)})`,
        transition: theme.transitions.create('transform', {duration: theme.transitions.duration.shortest}),
      })}
    >
      <ExpandMoreIcon />
    </IconButton>
  )
}

export default ExpandMoreButton
