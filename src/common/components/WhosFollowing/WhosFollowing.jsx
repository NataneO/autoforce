import './style.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function WhosFollowing() {
    return (
        <div className="WhosFollowingComponent">
            <h5></h5>
        <Container className="whosFollowing--supporters">
          
            <Row><Col>
                <h3></h3>
            </Col></Row>
        </Container>
        <div>
            <div>
            </div>
            <div>
            </div>
        </div>

        <Container className="whosFollowing--integrations">
            <h3></h3>
            <Row>
                <Col>
                    <div><span></span></div>
                    
                </Col>
                <div>
                    <Col />
                    <div>
                        <Row>
                            <Col />
                            <Col>
                                <h5></h5>
                                <h6></h6>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Row>
        </Container>
    </div>

    )
}