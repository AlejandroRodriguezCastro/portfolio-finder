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

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src='https://picsum.photos/id/237/200/300'
                alt='home pic'
                className='img-fluid'
                style={{ maxHeight: '450px' }}
              />
            </Col>
          </Row>
          <Row>
            <Col className='home-header'>
              <h1 style={{ paddingBottom: 1 }} className='heading' textAlign='center'>
                Acerca de mi{' '}
              </h1>
              <div style={{ padding: 10, textAlign: 'center' }} />
            </Col>
          </Row>
          <Row>
            <Col className='home-header'>
              <p style={{ paddingBottom: 15, fontSize: 1 }} className='heading'>
                Soy un desarrollador de software fullstack apasionado con experiencia en frontend y backend. He trabajado en diversos proyectos, desde startups hasta grandes empresas, utilizando tecnologías como HTML, CSS, JavaScript, React, Angular, Python, Java y Node.js. Me enfoco en crear soluciones web eficientes y colaboro estrechamente con los equipos de diseño y producto. Estoy comprometido con el aprendizaje continuo y la entrega de resultados de calidad. ¡Me encantaría ser parte de tu equipo y ayudar a impulsar tus proyectos hacia el éxito!{' '}
              </p>
              <div style={{ padding: 50, textAlign: 'left' }} />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  )
}

export default Home
