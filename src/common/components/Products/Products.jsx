import './style.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Products() {
    return (
        <div className="ProductsComponent">
            <Container className='Products'>
                <Row className="justify-content-center">
                    <Col>
                        <h1></h1>
                        <h4></h4>
                        </Col>
                </Row>
                <Row className="Col">
                    <h3></h3>
                    <h5></h5>
                    <img src="" alt="" />
                </Row>
                <Row className="Col">
                    <h3></h3>
                    <h5></h5>
                    <img src="" alt="" />
                </Row>
                <Row className="Col">
                    <h3></h3>
                    <h5></h5>
                    <img src="" alt="" />
                </Row>
                <Row className="Col">
                    <h3></h3>
                    <h5></h5>
                    <img src="" alt="" />
                </Row>
            </Container>
        </div>
    )
}