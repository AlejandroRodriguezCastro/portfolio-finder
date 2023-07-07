import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ListItemText from '@mui/material/ListItemText'

export default function Language () {
  return (
    <>
      <Typography>
        <h1 style={{ paddingBottom: 15 }} className='heading'>
          Idiomas{' '}
        </h1>
      </Typography>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              EN
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary='Ingles'
            secondary={<Typography variant='body2' style={{ color: '#FFFFFF' }}>B2</Typography>}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              ES
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            disableTypography
            primary='Español'
            secondary={<Typography variant='body2' style={{ color: '#FFFFFF' }}>Nativo</Typography>}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              PT
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary='Portugues'
            secondary={<Typography variant='body2' style={{ color: '#FFFFFF' }}>Basico</Typography>}
          />
        </ListItem>
      </List>
    </>
  )
}
