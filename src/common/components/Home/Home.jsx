import './style.scss'

import GridWrapper from '../../grid/grid';

import Certificates from './components/Certificates/Certificates';

function Home() {
    return (
        <div className="HomeComponent">
            <div className="home">
                <GridWrapper columns={2} columnSizes={[6, 6]} rows={1}>
                    <div className="home__content">
                        <div className="home__description">
                            <h1 className="home__title">Promovemos <span className='home__title-highlight'>transformação digital </span> no mercado automotivo da América Latina.</h1>
                            <h4 className="home__subtitle">Oferecemos soluções marketing digital e tecnologias que permitem que<span className='home__title-highlight'> concessionárias, revendas e montadoras </span>entreguem uma experiência de compra diferenciada aos seus clientes.</h4>
                        </div>

                    </div>
                    <div className="home__img">
                        <img src="../../../src/assets/img/bannerimg.png" className="home__img-src"></img>
                    </div>
                </GridWrapper>
                <div className="home__cta"> <button className="home__cta-btn">QUERO CONHECER MAIS</button></div>
                <Certificates className="home__certificates" />
            </div>

        </div>
    );
}

export default Home;
