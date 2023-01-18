import './style.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

export default function Contact() {
    return (
        <div className="ContactComponent">
            <Container className="contact">
                <h5></h5>
                <Row className="justify-content-center"><h3></h3>
                </Row>
                <form>
                    <Row><Col>
                        <h3></h3>
                        <img src="" alt="" />
                    </Col>
                        <Col>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        </Col>
                    </Row>
                    <Row><button></button></Row>
                </form>
            </Container>
        </div>
    )
}