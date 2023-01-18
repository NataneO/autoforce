import './style.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Header() {
    return (

        <div className="HeaderComponent">
        <Container className="header">

            <Row>
                <Col lg={2}><div className="header__logo">Logotipo</div></Col>
                <Col lg={8}>  <nav className="header__menu">
                    <ul>
                        <li className="header__menu-item">Home</li>
                        <li className="header__menu-item">Sobre nós</li>
                        <li className="header__menu-item">Visão</li>
                        <li className="header__menu-item">Produtos</li>
                        <li className="header__menu-item">Quem nos acompanha</li>
                        <li className="header__menu-item">Na mídia</li>
                        <li className="header__menu-item">Contato</li>
                    </ul>
                </nav> </Col>
                <Col lg={2}>
                    <button>Solicitar demonstração</button></Col>
            </Row>

        </Container>
        </div>


    )
}