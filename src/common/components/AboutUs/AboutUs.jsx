import GridWrapper from '../../grid/grid'
import './style.scss'


export default function AboutUs() {
    return (
        <div className="AboutComponent">
            <h5>Sobre nós</h5>
            <h1>Titulo</h1>
                <h4>Subtitulo</h4>
            <GridWrapper columns={2} columnSizes={[4,8]}rows={1}>
                
                <h2>Titulo 2</h2>
                <div>
                    <div><img src="" alt="" /><span>item</span></div>
                    <div><img src="" alt="" /><span>item</span></div>
                    <div><img src="" alt="" /><span>item</span></div>
                    <div><img src="" alt="" /><span>item</span></div>
                    <div><img src="" alt="" /><span>item</span></div>
                    <div><img src="" alt="" /><span>item</span></div>
                </div>
                <div><img src="" alt="" className="bg-art" /></div>
                <p>Descricao</p>
            </GridWrapper>

        </div>
    )
}


