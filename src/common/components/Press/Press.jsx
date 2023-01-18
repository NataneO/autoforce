import './style.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Press() {
    return (
        <div className="PressComponent">
            <h5>Na midia</h5>
            <Container className="press">
               <Row className="justify-content-center">
                <Col>
                    <h5>Imprensa</h5>
                </Col>
               </Row>
                <Row>
                <div>
                    <Col>
                        <div>
                            <h3></h3>
                            <h4></h4>
                            <button></button>
                        </div>
                    </Col>
                    <Col>
                        <Row>
                            <Col><img src="" alt="" /></Col>
                            <Col><img src="" alt="" /></Col>
                        </Row>
                        <Row>
                            <Col><img src="" alt="" /></Col>
                        </Row>
                    </Col>
                </div>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <h5></h5>
                            <h5></h5>
                            <h6></h6>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <span></span>
                </Row>
            </Container>
        </div>
    )
}