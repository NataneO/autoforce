import './style.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GridWrapper from '../../grid/grid';

export default function Contact() {
    return (
        <div className="ContactComponent">
            <h6> CONTATO</h6>
            <h4>Agende uma demonstração</h4>
            <form>
            <GridWrapper columns={2} rows={1}>
                <div><h5> Impulsione o crescimento e a transformação difital do seu negócio com as nossas soluçoes</h5></div>
                <div>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />

                </div>
            </GridWrapper>
            </form>
        </div>
    )
}