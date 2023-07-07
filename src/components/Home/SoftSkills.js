import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ListItemText from '@mui/material/ListItemText'
import { Grid } from '@mui/material'

export default function SoftSkills () {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={6}>
          <Typography>
            <h1 style={{ paddingBottom: 15 }} className='heading'>
              Soft Skills{' '}
            </h1>
          </Typography>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  EC
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary='Excelente comunicación'
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  RE
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary='Responsable'
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  EM
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary='Empatico'
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
                  OR
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary='Orientado a resultados'
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  PL
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary='Planeación'
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  TR
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary='Transparencia'
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  )
}
