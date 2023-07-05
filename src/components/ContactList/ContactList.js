import ContactCard from './ContactCard'
import * as React from 'react'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'

const useStyles = styled((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

export default function ContactList () {
  const classes = useStyles()
  return (
    <div>
      <h3> Ex 4: Responsive Material UI Grid </h3>
      <Grid container spacing={1}>
        <Grid item classes={classes}>
          <ContactCard />
        </Grid>
        <Grid item classes={classes}>
          <ContactCard />
        </Grid>
        <Grid item classes={classes}>
          <ContactCard />
        </Grid>
        <Grid item classes={classes}>
          <ContactCard />
        </Grid>
      </Grid>
    </div>
    // <Box sx={{ flexGrow: 1 }}>
    //   <Grid container spacing={2}>
    //     <Grid item xs={2} md={3}>
    //       <ContactCard />
    //     </Grid>
    //     <Grid item xs={2} md={3}>
    //       <ContactCard />
    //     </Grid>
    //     <Grid item xs={2} md={3}>
    //       <ContactCard />
    //     </Grid>
    //     <Grid item xs={2} md={3}>
    //       <ContactCard />
    //     </Grid>
    //   </Grid>
    // </Box>
  )
}
