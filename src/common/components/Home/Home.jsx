import './style.scss'

import GridWrapper from '../../grid/grid';

import Certificates from './components/Certificates/Certificates';

function Home() {
    return (
        <div className="HomeComponent">
            <GridWrapper columns={2} rows={1}>
                <div className="content__description">
                    <h1 className="home__title">Promovemos transformação
                        digital no mercado automotivo
                        da América Latina.</h1>
                    <h4 className="home__subtitle">Oferecemos soluções marketing digital e tecnologias que permitem que concessionárias, revendas e montadoras entreguem uma experiência de compra diferenciada aos seus clientes.</h4>
                </div>
                <div className="content__img">
                    <img src=""></img></div>
            </GridWrapper>
            <button>QUERO CONHECER MAIS</button>
            <Certificates />
        </div>
    );
}

export default Home;
