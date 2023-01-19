import { Carousel } from 'react-bootstrap'
import './style.scss'


export default function Supporters() {
    return (
        <div className="SupportersComponent">
            <h5>Quem nos acompanha</h5>
            <div>
                <h3>Nossos programas e apoiadores</h3>
            </div>
            <div>
                <Carousel></Carousel>
                <Carousel></Carousel>
            </div>
        </div>

    )
}