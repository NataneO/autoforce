import './style.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AboutUs() {
    return (
        <div className="AboutComponent">
            <h5>Sobre nós</h5>
            <Container className='about'>
                <Row>
                    <Col>
                        <h1>Titulo</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Subtitulo</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Titulo 2</h2>
                    </Col>
                    <Col>
                        <div>
                            <div><img src="" alt="" /><span>item</span></div>
                            <div><img src="" alt="" /><span>item</span></div>
                            <div><img src="" alt="" /><span>item</span></div>
                            <div><img src="" alt="" /><span>item</span></div>
                            <div><img src="" alt="" /><span>item</span></div>
                            <div><img src="" alt="" /><span>item</span></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Descricao</p>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}