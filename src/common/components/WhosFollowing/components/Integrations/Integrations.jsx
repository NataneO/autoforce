import GridWrapper from '../../../../grid/grid'
import './style.scss'

const segments = [
    { name:'Todos', slug:'Todos' },
    { name:'Email marketing', slug:'EmailMarketing' },
    { name:'CHAT', slug:'CHAT' },
    { name:'Trafego', slug:'Trafego' },
    { name:'Integrador', slug:'Integrador' },
    { name:'Pagamento', slug:'Pagamento' },
    { name:'CRM', slug:'CRM' }
]


const integrations = [
    {img:'Todos',name:'Todos', segment:'Pagamento'},
    {img:'Todos',name:'Todos', segment:'Pagamento'},
    {img:'Todos',name:'Todos', segment:'Pagamento'},
    {img:'Todos',name:'Todos', segment:'Pagamento'},
    {img:'Todos',name:'Todos', segment:'Pagamento'},
    {img:'Todos',name:'Todos', segment:'Pagamento'},
    {img:'Todos',name:'Todos', segment:'Pagamento'},
    {img:'Todos',name:'Todos', segment:'Pagamento'},
    {img:'Todos',name:'Todos', segment:'Pagamento'},
]



export default function Integrations() {
    return (
        <div className="IntegrationsComponent">
            <h4>Nossas integrações</h4>
            <GridWrapper columns={2} rows={1} columnSizes={[3,9]}>
            <div>
                {segments.map((segment, index) =>
                    <div key={index}>
                        <span>{segment.name}</span>
                    </div>
                )}


</div>
            <GridWrapper columns={3} rows={5}>
            {integrations.map((integration, index) =>
                    <div key={index}>
                        <img src="/" alt="" />
                        <h4>{integration.name}</h4>
                        <h6>{integration.segment}</h6>
                    </div>
                )}
            </GridWrapper>
            </GridWrapper>
        </div>

    )
}