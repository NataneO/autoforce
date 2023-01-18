import './style.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
    return (
        <div className="FooterComponent">
            <Container className="footer">
                <Row>
                    <Col><img src="" alt="" /></Col>
                    <Col>
                        <div>
                            <ul>
                                <li className="domain"></li>
                                <li></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className="domain"></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className="domain"></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className="domain"></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </Col>
                    <Col><h6></h6>
                        <div>
                            <div><img src="" alt="" /></div>
                            <div><img src="" alt="" /></div>
                            <div><img src="" alt="" /></div>
                            <div><img src="" alt="" /></div>
                            <div><img src="" alt="" /></div>
                        </div>
                        <h6></h6>
                        <h6></h6>
                    </Col>
                </Row>
                <Row>
                    <Col><span></span></Col>
                    <Col><a href=""></a></Col>
                </Row>
            </Container>
        </div>
    )
}