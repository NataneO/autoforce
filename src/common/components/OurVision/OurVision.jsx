import './style.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function OurVision() {
    return (
        <div className="OurVisionComponent">
            <Container className='ourVision'>
                <Row>
                    <Col>
                        <h2>
                            A AutoForce compreende que existem
                            3 tipos de vendedores de veículos
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <section>
                        <Col>
                            <article>
                                <img src="" alt="" />
                                <h4></h4>
                                <h6></h6>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </article>
                        </Col>
                        <Col>
                            <article>
                                <img src="" alt="" />
                                <h4></h4>
                                <h6></h6>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </article>
                        </Col>
                        <Col>
                            <article>
                                <img src="" alt="" />
                                <h4></h4>
                                <h6></h6>
                                <ul>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </article>
                        </Col>
                    </section>
                </Row>
            </Container>
        </div>
    )
}