import React from 'react'
import HardSkillsCarousel from '../components/Home/HardSkillsCarousel'
import Experience from '../components/Home/Experience'
import { Grid, Typography } from '@mui/material'

function Home () {
  return (
    <>
      <div style={{ marginTop: '60px', padding: '0px' }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={8} md={6}>
            <Typography>
              <h1 style={{ paddingBottom: 15 }} className='heading'>
                Hola!{' '}
                <span className='wave' role='img' aria-labelledby='wave'>
                  👋🏻
                </span>
              </h1>

              <h2 className='heading-name' style={{ paddingLeft: '10px' }}>
                Soy
              </h2>
              <h1 style={{ paddingLeft: '20px', color: '#be6adf' }}>
                Alejandro Rodriguez Castro
              </h1>
            </Typography>
          </Grid>
          <Grid item xs={2} sm={4} md={6}>
            <img
              src='https://avatars.githubusercontent.com/u/25994021?v=4'
              alt='home pic'
              className='img-fluid'
              style={{ maxHeight: '350px', width: '100%', paddingTop: '30px', objectFit: 'contain', marginLeft: '-10px' }}
            />
          </Grid>
        </Grid>
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <HardSkillsCarousel />
      </div>
    </>
  )
}

export default Home
