import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { AiOutlineDownload } from 'react-icons/ai'

function ResumeNew () {
  return (
    <div>
      <Container fluid className='resume-section'>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant='primary'
            href='https://code.visualstudio.com/sha/download?build=stable&os=darwin-arm64'
            target='_blank'
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className='resume'>
          <h1> CV aca</h1>
        </Row>
        <Row className='resume'>
          <h1> CV aca</h1>
        </Row>
        <Row className='resume'>
          <h1> CV aca</h1>
        </Row>
        <Row className='resume'>
          <h1> CV aca</h1>
        </Row>
        <Row className='resume'>
          <h1> CV aca</h1>
        </Row>

        {/* <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant='primary'
            href='https://code.visualstudio.com/sha/download?build=stable&os=darwin-arm64'
            target='_blank'
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}
      </Container>
    </div>
  )
}

export default ResumeNew
