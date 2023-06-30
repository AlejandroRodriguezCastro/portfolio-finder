import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Home () {
  return (
    <section>
      <Container fluid className='home-section' id='home'>
        <Container className='home-content'>
          <Row>
            <Col md={7} className='home-header'>
              <h1 style={{ paddingBottom: 15 }} className='heading'>
                Hola!{' '}
              </h1>

              <h1 className='heading-name'>
                Soy <strong className='main-name'> Alejandro Rodriguez Castro</strong>
              </h1>

              <div style={{ padding: 50, textAlign: 'left' }} />
            </Col>

            {/* <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src=''
                alt='home pic'
                className='img-fluid'
                style={{ maxHeight: '450px' }}
              />
            </Col> */}
          </Row>
        </Container>
      </Container>
    </section>
  )
}

export default Home
