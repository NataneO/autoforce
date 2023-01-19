import './style.scss'
import GridWrapper from '../../grid/grid';


export default function OurVision() {

  const vendorsArr = [
    {
      img: '../../../src/assets/img/vendor1.png',
      title: 'Vendedor 1.0',
      subtitle: 'Os vendedores recebem clientes/tiram pedidos e trabalham com técnicas de persuasão agressivas.',
      listItems: [
        'Grandes instalaçoes', 'Operaçoes engessadas', 'Foco no produto', 'Investem em publicidade tradicional']

    },
    {
      img: '../../../src/assets/img/vendor2.png',
      title: 'Vendedor 2.0',
      subtitle: 'Os vendedores recebem clientes/tiram pedidos e trabalham com técnicas de persuasão agressivas.',
      listItems: [
        'Grandes instalaçoes', 'Operaçoes engessadas', 'Foco no produto', 'Investem em publicidade tradicional']
    },
    {
      img: '../../../src/assets/img/vendor3.png',
      title: 'Vendedor 3.0',
      subtitle: 'Os vendedores recebem clientes/tiram pedidos e trabalham com técnicas de persuasão agressivas.',
      listItems: [
        'Grandes instalaçoes', 'Operaçoes engessadas', 'Foco no produto', 'Investem em publicidade tradicional']
    }
  ]

  return (
    <div className="OurVisionComponent">
      <div class="ourVision">
        <h5 className="ourVision__section-title">Visão</h5>
        <div class="ourVision__description">
          <h2 className="ourVision__description-title">A AutoForce compreende que existem 3 tipos de vendedores de veículos:</h2>
          </div>

        <GridWrapper columns={3} rows={1}>
          {vendorsArr.map((vendor, index) =>
            <div class="ourVision__card" key={index}>
              <img class="ourVision__card-img" src={vendor.img} alt="" />
              <div className="ourVision__card-content">
              <h4 class="ourVision__card-content-title">{vendor.title}</h4>
              <h6 class="ourVision__card-content-subtitle">{vendor.subtitle}</h6>
              <ul class="ourVision__card-content-list">
                {vendor.listItems.map((item, index) =>
                  <li class="ourVision__card-list-item" key={index}>{item}</li>
                )}
              </ul>
            </div>
            </div>
          )}
          </GridWrapper>
        </div>
        <img class="weGuideYou__img" src="" alt="" />
      </div>
  )
}
