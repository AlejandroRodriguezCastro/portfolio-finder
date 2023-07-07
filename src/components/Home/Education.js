import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ListItemText from '@mui/material/ListItemText'

export default function Education () {
  return (
    <>
      <Typography>
        <h1 style={{ paddingBottom: 15 }} className='heading'>
          Educación{' '}
        </h1>
      </Typography>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              UA
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary='UADE'
            secondary={<Typography variant='body2' style={{ color: '#FFFFFF' }}>Ingeniería Informatica 2019-2024</Typography>}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              SE
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            disableTypography
            primary='Secundario'
            secondary={<Typography variant='body2' style={{ color: '#FFFFFF' }}>Tecnico Electronico 2003-2009</Typography>}
          />
        </ListItem>
      </List>
    </>
  )
}
