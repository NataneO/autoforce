import './style.scss'
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
            <div className="press">
                <h5 className="press__section-title">Na midia</h5>

                <div className="press__description">
                    <h1 className="press__description-title">Imprensa</h1>
                </div>
                <div className="press__banner">
                    <GridWrapper columns={2} rows={1}>
                        <div className="press__banner__content">
                            <h3 className="press__banner__content-title" >Autoforce na Stock Car:</h3>
                            <h4 className="press__banner__content-subtitle">somos patrocinadores oficiais da equipe cavaleiro sports.</h4>
                            <h5 className="press__banner__content-cta">Veja mais sobre a noticia</h5>
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
                        <div className="press__headline"key={index}>
                            <h4  className="press__headline-title">{article.title}</h4>
                            <h6 className="press__headline-catchphrase">{article.catchphrase}</h6>
                            <h5 className="press__headline-headline">{article.headline}</h5>
                        </div>
                    )}


                </GridWrapper>

            </div>   </div>
    )
}