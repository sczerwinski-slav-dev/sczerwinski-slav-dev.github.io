import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Collapse from '@mui/material/Collapse'
import ExpandMoreButton from '../buttons/ExpandMoreButton.tsx'
import {OverridableComponent} from '@mui/material/OverridableComponent'
import Stack from '@mui/material/Stack'
import {SvgIconTypeMap} from '@mui/material/SvgIcon/SvgIcon'
import Typography from '@mui/material/Typography'
import useToggleable from '../../hooks/toggleable.tsx'

/**
 * Collapsible card properties.
 *
 * @property caption Caption of the collapsible card.
 */
interface CollapsibleCardProps {
  caption: string
  icon?: OverridableComponent<SvgIconTypeMap>
}

/**
 * Collapsible card.
 *
 * @param {React.PropsWithChildren<CollapsibleCardProps>} props Collapsible card properties with children.
 */
function CollapsibleCard(props: React.PropsWithChildren<CollapsibleCardProps>) {
  const
    {caption, icon: Icon, children} = props,
    [expanded, toggleExpanded] = useToggleable(false)

  return (
    <Card>
      <CardActions>
        <Stack direction='row' width='100%' sx={{alignItems: 'center', mx: 1}}>
          <Stack direction='row' spacing={1} sx={{alignItems: 'center'}}>
            {Icon && <Icon />}
            <Typography gutterBottom variant='h6'>{caption}</Typography>
          </Stack>
          <ExpandMoreButton
            expanded={expanded}
            onClick={toggleExpanded}
            label="expand filters"
            edge='end'
          />
        </Stack>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {children}
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default CollapsibleCard
