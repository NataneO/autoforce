import './style.scss'
import GridWrapper from '../../grid/grid';

const productsArr = [
    {
        title: 'Autodromo ',
        subtitle: 'A mais poderosa e versátil ferramenta de criação e gestão de showrooms digitais para o mercado automotivo.',
        img: '../../../src/assets/img/autodromo-mock.png',
        available: true
    },
    {
        title: 'AutoCommerce',
        subtitle: 'A 1º plataforma de ecommerce para a venda de veículos 100% online do Brasil.',
        img: '../../../src/assets/img/autocommerce-mock.png',
        available: true
    },
    {
        title: 'AutoRacing',
        subtitle: 'O CRM automotivo especializado na trativa, nutrição, finalização de leads e mensuração de resultados.',
        img: '../../../src/assets/img/autoracing-mock.png',
        available: false
    },
    {
        title: 'Paddock',
        subtitle: 'A base de conteúdo veicular (fotos, vídeos, ficha técnica) mais completa e dinâmica da América Latina.',
        img: '../../../src/assets/img/paddock-mock.png',
        available: false
    },
]


export default function Products() {
    return (
        <div className="ProductsComponent">
            <div className="products">
                <h5 className="products__section-title">Produtos</h5>
            </div>
            <div className="products__description">
                <h1 className="products__description-title">Nossas soluções</h1>
                <h4 className="products__description-subtitle">Te fornecemos a melhor forma de acelerar o seu negócio.</h4>
            </div>
            <GridWrapper columns={4} rows={1}>
                {productsArr.map((product, index) =>
                    <div class="products__card" key={index}>
                        <div className="products__card-content">
                            <h4 class="products__card-content-title">{product.title}
                            {product.available === true ? null: <span className="products__card-content-status">EM BREVE</span>}</h4>
                            <h6 className="products__card-content-subtitle">{product.subtitle}</h6>
                        </div>

                        <img class="products__card-img" src={product.img} alt="" />
                    </div>

                )}
            </GridWrapper>
        </div>
    )
}

