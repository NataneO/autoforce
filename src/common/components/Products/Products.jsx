import './style.scss'
import GridWrapper from '../../grid/grid';

const productsArr = [
    {
        title: 'Autodromo ',
        subtitle: 'A mais poderosa e versátil ferramenta de criação e gestão de showrooms digitais para o mercado automotivo.',
        img: '',
        available: true
    },
    {
        title: 'AutoCommerce',
        subtitle: 'A 1º plataforma de ecommerce para a venda de veículos 100% online do Brasil.',
        img: '',
        available: true
    },
    {
        title: 'AutoRacing',
        subtitle: 'O CRM automotivo especializado na trativa, nutrição, finalização de leads e mensuração de resultados.',
        img: '',
        available: true
    },
    {
        title: 'Paddock',
        subtitle: 'A base de conteúdo veicular (fotos, vídeos, ficha técnica) mais completa e dinâmica da América Latina.',
        img: '',
        available: true
    },
]


export default function Products() {
    return (
        <div className="ProductsComponent">
            <h5>Produtos</h5>
            <h4>Nossas soluções</h4>
            <h5>Te fornecemos a melhor forma de acelerar seu negócio.</h5>
            <GridWrapper columns={3} rows={1}>
                {productsArr.map((product, index) =>
                    <div key={index}>
                        <div>
                            <h3>{product.title}</h3>
                            <span>{product.title}</span>
                        </div>
                        <h5>{product.subtitle}</h5>
                        <img src="" alt="" /></div>
                )}
            </GridWrapper>
        </div>

    )
}