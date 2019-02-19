import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const sidebarbar = (props) => {
    return (
        <div>
            {/* RSDF Sidebar*/}
                
            <div className={`rsdf-sidebar ${(props.open) ? 'active' : 'desactive'}`}>
                    <div class="menu-wrapper" onClick={props.toggle} >
                        <div className={`hamburger-menu ${(props.open) ? 'animate' : 'desactive'}`} ></div>
                    </div>
                    <div className="fd-app__navigation fd-app__navigation--vertical">
                    <nav className="fd-side-nav">
                        <ul className="fd-side-nav__list">
                        <li className="fd-side-nav__item">
                            <Link className="fd-side-nav__link" to='/'>
                            <span className="fd-side-nav__icon sap-icon--dimension sap-icon--l" role="presentation"></span>
                            <span className="fd-side-nav-name">Resumo</span>
                            </Link>
                        </li>
                        <li className="fd-side-nav__item">
                            <Link className="fd-side-nav__link" to='/actividade'>
                                <span className="fd-side-nav__icon sap-icon--activities sap-icon--l" role="presentation"></span>
                                <span className="fd-side-nav-name">Atividade</span>
                            </Link>
                        </li>
                        <li className="fd-side-nav__item">
                            <a className="fd-side-nav__link" href="#">
                            <span className="fd-side-nav__icon sap-icon--sys-prev-page sap-icon--l" role="presentation"></span>
                            <span className="fd-side-nav-name">Enviar e Solicitar</span>
                            </a>
                        </li>
                        <li className="fd-side-nav__item">
                            <a className="fd-side-nav__link" href="#">
                            <span className="fd-side-nav__icon sap-icon--wallet sap-icon--l" role="presentation"></span>
                            <span className="fd-side-nav-name">Carteira</span>
                            </a>
                        </li>
                        <li className="fd-side-nav__item">
                            <a className="fd-side-nav__link" href="#">
                            <span className="fd-side-nav__icon sap-icon--blank-tag sap-icon--l" role="presentation"></span>
                            <span className="fd-side-nav-name">Ofertas</span>
                            </a>
                        </li>
                        <li className="fd-side-nav__item">
                            <a className="fd-side-nav__link" href="#">
                            <span className="fd-side-nav__icon sap-icon--sys-help sap-icon--l" role="presentation"></span>
                            <span className="fd-side-nav-name">Ajuda</span>
                            </a>
                        </li>
                        </ul>
                    </nav>
                    </div> 
            </div>
        </div>
    )
}

export default sidebarbar;