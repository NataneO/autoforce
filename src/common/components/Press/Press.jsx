import './style.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GridWrapper from '../../grid/grid';

const articles = [
    { title: 'Todos', catchphrase: 'Todos', headline: 'Pagamento' },
    { title: 'Todos', catchphrase: 'Todos', headline: 'Pagamento' },
    { title: 'Todos', catchphrase: 'Todos', headline: 'Pagamento' },
    { title: 'Todos', catchphrase: 'Todos', headline: 'Pagamento' },
    { title: 'Todos', catchphrase: 'Todos', headline: 'Pagamento' },
    { title: 'Todos', catchphrase: 'Todos', headline: 'Pagamento' },
    { title: 'Todos', catchphrase: 'Todos', headline: 'Pagamento' },
    { title: 'Todos', catchphrase: 'Todos', headline: 'Pagamento' },
    { title: 'Todos', catchphrase: 'Todos', headline: 'Pagamento' },
]


export default function Press() {
    return (
        <div className="PressComponent">
            <h5>Na midia</h5>
            <h4>Imprensa</h4>
            <div className="banner">
                <GridWrapper columns={2} rows={1}>
                    <div>
                        <h3>Autoforce na Stock Car</h3>
                        <h4>somos patrocinadores oficiais da equipe cavaleiro sports.</h4>
                        <h5>Veja mais sobre a noticia</h5>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </GridWrapper>
            </div>

            <GridWrapper columns={3} rows={1}>
                {articles.map((article, index) =>
                    <div key={index}>
                        <h4>{article.title}</h4>
                        <h6>{article.catchphrase}</h6>
                        <h5>{article.headline}</h5>
                    </div>
                )}


            </GridWrapper>

        </div>
    )
}