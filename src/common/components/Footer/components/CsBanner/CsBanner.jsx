import GridWrapper from '../../../../grid/grid'
import './style.scss'

export default function CsBanner() {
    return (
        <div className="CsBannerComponent">
            <GridWrapper columns={2} rows={1}>
                <div><img src="" alt="" /></div>
                <div><h6>Temos uma equipe incrível de Customer Success altamente preparada para auxiliar todos os nossos clientes a alcançarem o podium na corrida das vendas on-line.</h6></div>
            </GridWrapper>
        </div>
    )
}