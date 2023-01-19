import GridWrapper from '../../../../grid/grid'
import './style.scss'

const segments = [
    { name: 'Todos', slug: 'Todos' },
    { name: 'Email marketing', slug: 'EmailMarketing' },
    { name: 'CHAT', slug: 'CHAT' },
    { name: 'Trafego', slug: 'Trafego' },
    { name: 'Integrador', slug: 'Integrador' },
    { name: 'Pagamento', slug: 'Pagamento' },
    { name: 'CRM', slug: 'CRM' }
]


const integrations = [
    { img: '../../../../src/assets/img/integrations/integ1.png', name: 'Todos', segment: 'Pagamento' },
    { img: '../../../../src/assets/img/integrations/integ2.png', name: 'Todos', segment: 'Pagamento' },
    { img: '../../../../src/assets/img/integrations/integ3.png', name: 'Todos', segment: 'Pagamento' },
    { img: '../../../../src/assets/img/integrations/integ4.png', name: 'Todos', segment: 'Pagamento' },
    { img: '../../../../src/assets/img/integrations/integ5.png', name: 'Todos', segment: 'Pagamento' },
    { img: '../../../../src/assets/img/integrations/integ6.png', name: 'Todos', segment: 'Pagamento' },
    { img: '../../../../src/assets/img/integrations/integ7.png', name: 'Todos', segment: 'Pagamento' },
    { img: '../../../../src/assets/img/integrations/integ8.png', name: 'Todos', segment: 'Pagamento' },
    { img: '../../../../src/assets/img/integrations/integ9.png', name: 'Todos', segment: 'Pagamento' },
    { img: '../../../../src/assets/img/integrations/integ10.png', name: 'Todos', segment: 'Pagamento' },
    { img: '../../../../src/assets/img/integrations/integ11.png', name: 'Todos', segment: 'Pagamento' },
    { img: '../../../../src/assets/img/integrations/integ12.png', name: 'Todos', segment: 'Pagamento' },
    { img: '../../../../src/assets/img/integrations/integ13.png', name: 'Todos', segment: 'Pagamento' },
    { img: '../../../../src/assets/img/integrations/integ14.png', name: 'Todos', segment: 'Pagamento' },
    { img: '../../../../src/assets/img/integrations/integ15.png', name: 'Todos', segment: 'Pagamento' },
]



export default function Integrations() {
    return (
        <div className="IntegrationsComponent">
            <div className="integrations">
                <div className="integrations__description">
                    <h1 className="integrations__description-title">Nossas integrações</h1>
                </div>
                <GridWrapper columns={2} rows={1} columnSizes={[3, 9]}>
                    <div>
                        {segments.map((segment, index) =>
                            <div className='integrations__card'
                                key={index}>

                                <span className='integrations__card-title'>{segment.name}</span>
                            </div>

                        )}
                    </div>

                    <GridWrapper columns={3} rows={5}>
                        {integrations.map((integration, index) =>
                            <div className="integrations__card--minimal" key={index}>

                                <img className="integrations__card--minimal-img" src={integration.img} alt="" />

                                <div className="integrations__card--minimal-content">
                                    <h4 className="integrations__card--minimal-title">{integration.name}</h4>
                                    <h6 className="integrations__card--minimal-subtitle">{integration.segment}</h6>
                                </div>
                            </div>
                        )}
                    </GridWrapper>
                </GridWrapper>
            </div>
        </div>
    )
}