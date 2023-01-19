import React from 'react';
import GridWrapper from '../../grid/grid';
import './style.scss'

class Header extends React.Component{
  render() {
    return (
      <div className="HeaderComponent">
        <div className="header">
          <GridWrapper columns={3} rows={1} columnSizes={[2, 7, 3]}>
            <div className="header__logo">Logotipo</div>
            <nav className="header__nav">
              <ul className="header__menu">
                <li className="header__menu-item">Home</li>
                <li className="header__menu-item">Sobre nós</li>
                <li className="header__menu-item">Visão</li>
                <li className="header__menu-item">Produtos</li>
                <li className="header__menu-item">Quem nos apoia</li>
                <li className="header__menu-item">Na mídia</li>
                <li className="header__menu-item">Contato</li>
              </ul>
            </nav>
            <div className='header__cta'>
            <button className="header__cta-btn">Solicitar demonstração</button>
            </div>
          </GridWrapper>
        </div>
      </div>
    )
  }
}

export default Header;
