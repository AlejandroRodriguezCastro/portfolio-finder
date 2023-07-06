import * as React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Typography from '@mui/material/Typography'

export default function CustomizedTimeline () {
  return (
    <Timeline position='alternate'>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align='right'
          variant='body2'
          color='text'
        >
          Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant='h5' component='span'>
            Boehringer Ingelheim
          </Typography>
          <Typography variant='subtitle1'>CyberSecurity Automation</Typography>
          <Typography variant='body2'>Automatizaciones de Azure Sentinel, Service Now</Typography>
          <Typography variant='body2'>Programación en Python</Typography>
          <Typography variant='body2'>Dialogo activo con stake holders</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant='body2'
          color='text'
        >
          2021-2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant='h5' component='span'>
            Loni
          </Typography>
          <Typography variant='subtitle1'>Network Automation Engineer</Typography>
          <Typography variant='body2'>Automatizaciones de redes</Typography>
          <Typography variant='body2'>Programación en Python</Typography>
          <Typography variant='body2'>Manejo de Django DRF</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align='right'
          variant='body2'
          color='text'
        >
          2020-2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant='h5' component='span'>
            Telecom
          </Typography>
          <Typography variant='subtitle1'>Network Automation Engineer</Typography>
          <Typography variant='body2'>Automatizaciones de redes Cisco y Huawei</Typography>
          <Typography variant='body2'>Creacion de Framework de trabajo</Typography>
          <Typography variant='body2'>Coordinación de celula</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant='body2'
          color='text'
        >
          2019-2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant='h5' component='span'>
            Telecom
          </Typography>
          <Typography variant='subtitle1'>DevOps Engineer</Typography>
          <Typography variant='body2'>Automatizaciones de servidores</Typography>
          <Typography variant='body2'>Creación de ambiente en Linux</Typography>
          <Typography variant='body2'>Pipelines CI/CD</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
