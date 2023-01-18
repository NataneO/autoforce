import './style.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Certificates from './components/Certificates/Certificates';

function Home() {
    return (
        <div className="HomeComponent">
            <Container className='home'>
                <Row className="home__content">
                    <Col>
                        <div className="content__description">
                            <h1 className="home__title">Promovemos transformação
                                digital no mercado automotivo
                                da América Latina.</h1>
                            <h4 className="home__subtitle">Oferecemos soluções marketing digital e tecnologias que permitem que concessionárias, revendas e montadoras entreguem uma experiência de compra diferenciada aos seus clientes.</h4>
                        </div>
                    </Col>
                    <Col>
                        <div className="content__img">
                            <img src=""></img></div>
                    </Col>
                </Row>
                <Row className="home__cta justify-content-center">
                    <Col lg={4}>
                    <button>QUERO CONHECER MAIS</button>
                    </Col>
                </Row>
            </Container>
            <Certificates />
        </div>
    );
}

export default Home;