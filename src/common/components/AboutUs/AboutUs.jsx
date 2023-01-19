import GridWrapper from '../../grid/grid'
import './style.scss'


export default function AboutUs() {
    return (
        <div className="AboutComponent">
            <div className="about">
                <h5 className="about__section-title">Sobre nós</h5>
                <div class="about__description">
                    <h1 className="about__description-title">Nós criamos <span className="about__description-title--highlight">pontes</span> entre usuários <span className="about__description-title--highlight"> e</span> empresas</h1>
                    <div class="about__description-img">
                    <img src="../../../src/assets/img/smile.png" alt="" />
                </div>
                </div>
                
                <h4 className="about__description-subtitle">Somos a 1ª martech, no Brasil, 100% especializada em compreender holisticamente a jornada de compra de veículos, modernizando o modelo de negócios das concessionárias, revendas e montadoras no país. Tudo isso com muita tecnologia, pesquisa e validação.</h4>

                <div className="about__values">
                    <GridWrapper columns={2} columnSizes={[3, 9]} rows={1}>
                        <h2 className="values__section-title">Nossos valores</h2>
                        <section className="values__list">
                            <article className="values__list-item">
                                <div className="values__list-img"><img src="../../../src/assets/icons/medal.png" alt="" /></div>
                                <p className="values__list-text">Colocamos o cliente no pódio</p>
                            </article>
                            <article className="values__list-item">
                                <div className="values__list-img"><img src="../../../src/assets/icons/lamp.png" alt="" /></div>
                                <p className="values__list-text">Inovamos para vencer</p>
                            </article>
                            <article className="values__list-item">
                                <div className="values__list-img"><img src="../../../src/assets/icons/rocket.png" alt="" /></div>
                                <p className="values__list-text">Entregamos além do esperado</p>
                            </article>
                            <article className="values__list-item">
                                <div className="values__list-img"><img src="../../../src/assets/icons/barchart.png" alt="" /></div>
                                <p className="values__list-text">Agimos com base em dados</p>
                            </article>
                            <article className="values__list-item">
                                <div className="values__list-img"><img src="../../../src/assets/icons/team.png" alt="" /></div>
                                <p className="values__list-text">Valorizamos o espírito de time</p>
                            </article>
                            <article className="values__list-item">
                                <div className="values__list-img"><img src="../../../src/assets/icons/cogs.png" alt="" /></div>
                                <p className="values__list-text">Somos adaptáveis</p>
                            </article>
                        </section>



                    </GridWrapper>

                    <div className="values__description" >
                        <div className="values__description-bg"> </div>
                        <div className="values__description-content">O cliente é o <span className="values__description-content--bold">centro de tudo </span>e precisa obter <span className="values__description-content--bold">resultados reais</span> com a nossa solução.
                            Proporcionamos uma <span className="values__description-content--bold">jornada incrível </span>desde o primeiro contato com a empresa e<span className="values__description-content--bold"> criamos uma experiência premium para o usuário</span>, nos atentando à cada detalhe e desenvolvendo <span className="values__description-content--bold">uma solução que atenda às suas necessidades.</span></div>


                    </div>
                </div>
            </div>
        </div>
    )
}


