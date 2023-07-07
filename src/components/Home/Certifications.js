import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ListItemText from '@mui/material/ListItemText'
import { Grid } from '@mui/material'

export default function Certifications () {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={6}>
          <Typography>
            <h1 style={{ paddingBottom: 15 }} className='heading'>
              Certificacion{' '}
            </h1>
          </Typography>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  CC
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary='CCNA'
                secondary={<Typography variant='body2' style={{ color: '#FFFFFF' }}>Cisco Certified Network Associate</Typography>}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  CC
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary='CCIE'
                secondary={<Typography variant='body2' style={{ color: '#FFFFFF' }}>Cisco Certified Internetwork Expert</Typography>}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  RH
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary='Red Hat RH124'
                secondary={<Typography variant='body2' style={{ color: '#FFFFFF' }}>Red Hat System Administration I</Typography>}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography>
            <h1 style={{ paddingBottom: 60 }} className='heading'>
              {' '}
            </h1>
          </Typography>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  RH
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary='Red Hat RH134'
                secondary={<Typography variant='body2' style={{ color: '#FFFFFF' }}>Red Hat System Administration II</Typography>}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  AS
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary='AWS'
                secondary={<Typography variant='body2' style={{ color: '#FFFFFF' }}>AWS Solutions Architect</Typography>}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  AS
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary='AWS'
                secondary={<Typography variant='body2' style={{ color: '#FFFFFF' }}>AWS SysOps Administrator</Typography>}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  )
}
