import './style.scss'

import GridWrapper from '../../grid/grid';

export default function Footer() {
    return (
        <div className="FooterComponent">
            <div>
                <GridWrapper columns={3} rows={1}>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <GridWrapper columns={4} rows={1}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </GridWrapper>
                </div>
                <div>
                    <h5>Siga-nos</h5>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <h4>Agende uma demonstração</h4>
                    <h5></h5>
                </div>
                </GridWrapper>
                <GridWrapper columns={2} rows={1}>
                    <h6></h6>
                    <h6></h6>
                </GridWrapper>

            </div>
        </div>
    )
}