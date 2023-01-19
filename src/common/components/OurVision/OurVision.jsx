import './style.scss'
import GridWrapper from '../../grid/grid';

export default function OurVision() {

  const vendorsArr = [
    {
      img: '',
      title: 'Vendedor 1.0',
      subtitle: 'Os vendedores recebem clientes/tiram pedidos e trabalham com técnicas de persuasão agressivas.',
      listItems: [
       'Grandes instalaçoes', 'Operaçoes engessadas', 'Foco no produto','Investem em publicidade tradicional']
      
    },
    {
      img: '',
      title: 'Vendedor 2.0',
      subtitle: 'Os vendedores recebem clientes/tiram pedidos e trabalham com técnicas de persuasão agressivas.',
      listItems: [
       'Grandes instalaçoes', 'Operaçoes engessadas', 'Foco no produto','Investem em publicidade tradicional']
    },
    {
      img: '',
      title: 'Vendedor 3.0',
      subtitle: 'Os vendedores recebem clientes/tiram pedidos e trabalham com técnicas de persuasão agressivas.',
      listItems: [
       'Grandes instalaçoes', 'Operaçoes engessadas', 'Foco no produto','Investem em publicidade tradicional']
    }
  ]

  return (
    <div className="OurVisionComponent">
      <h5>Visão</h5>
      <h2>
        A AutoForce compreende que existem
        3 tipos de vendedores de veículos
      </h2>

      <GridWrapper columns={3} rows={1}>
        {vendorsArr.map((vendor, index) =>
          <div key={index}>
            <img src={vendor.img} alt="" />
            <h4>{vendor.title}</h4>
            <h6>{vendor.subtitle}</h6>
            <ul>
              {vendor.listItems.map((item, index) =>
                <li key={index}>{item}</li>
              )}

            </ul>
          </div>

        )}

      </GridWrapper>
      <img src="" alt="" />
    </div>
  )
}
