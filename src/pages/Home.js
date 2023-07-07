import React from 'react'
import HardSkillsCarousel from '../components/Home/HardSkillsCarousel'
import Experience from '../components/Home/Experience'
import { Grid, Typography } from '@mui/material'
import Language from '../components/Home/Language'
import SoftSkills from '../components/Home/SoftSkills'
import Certifications from '../components/Home/Certifications'
import Education from '../components/Home/Education'
import Icons from '../components/Icons/Icons'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'

function ScrollToTop (props) {
  const trigger = useScrollTrigger({
    threshold: 100,
    disableHysteresis: true
  })

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Slide appear={false} direction='up' in={trigger}>
      <Fab onClick={handleClick} style={{ position: 'fixed', bottom: 20, right: 20 }} {...props}>
        <KeyboardArrowUpIcon />
      </Fab>
    </Slide>
  )
}

function Home (props) {
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
          <Grid item xs={12} sm={4} md={6}>
            <img
              src='https://avatars.githubusercontent.com/u/25994021?v=4'
              alt='home pic'
              className='img-fluid'
              style={{ maxHeight: '350px', width: '100%', paddingTop: '30px', objectFit: 'contain', marginLeft: '-10px' }}
            />
          </Grid>
        </Grid>
      </div>
      <div style={{ marginTop: '60px', padding: '0px' }}>
        <Typography>
          <h1 style={{ paddingBottom: 15 }} className='heading'>
            Acerca de mi{' '}
          </h1>
        </Typography>
        <p style={{ textIndent: '2em' }}>
          Actualmente soy un desarrollador DevOps orientado a la automatización de networking (donde tengo vasta experiencia), centrado en simplificar procesos y trabajo hacia el usuario. Me defino como una persona proactiva, empeñado en ganar más conocimiento, centrado en la mejora continua.
          Mi enfoque es dar soluciones efectivas para poder llegar a los objetivos.
        </p>
      </div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4} md={6}>
          <div>
            <Language />
          </div>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <div>
            <SoftSkills />
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={4} md={6}>
          <div>
            <Education />
          </div>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <div>
            <Certifications />
          </div>
        </Grid>
      </Grid>

      <div>
        <Experience />
      </div>
      <div>
        <HardSkillsCarousel />
      </div>
      <div>
        <Icons />
      </div>
      <ScrollToTop {...props} />
    </>
  )
}

export default Home
