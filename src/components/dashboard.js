import React from 'react';
import userPhoto from '../../src/img/sophie.jpg';
import RSDF_Panel from '../components/rsdf-panel.js';
import RSDF_Table from '../components/rsdf-table.js';
import RSDF_TableCards from '../components/rsdf-table-cards';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import {
    Button, 
    Panel, 
    PanelActions, 
    PanelBody, 
    PanelContent, 
    PanelFilters, 
    PanelFooter, 
    PanelGrid, 
    PanelHead, 
    PanelHeader 
} from 'fundamental-react';


const clickBtnHandler = btn => {
    return <Redirect to='/actividade'/>
};

const dashboard = (props) => {
    return (
        <div>
            {/* Grid Section*/}
            <section className="fd-section">
                    <div className="fd-container fd-container--fluid">
                        
                        <div className="fd-col--3 fd-panel sdf-profile-panel rsdf-no-background rsdf-no-shadow">
                            <div className="fd-tile rsdf-no-background rsdf-no-shadow">
                                <div className="fd-tile__media sdf-profile-photo-wrapper">
                                <span className="fd-image--xl fd-image--circle" aria-label="TILE_MEDIA_ALT" style={{ backgroundImage: `url('${userPhoto}`}}></span>
                                </div>
                                <div className="fd-tile__content">
                                <h2 className="fd-tile__title">Bom Dia, <br></br> Sophie</h2>
                                <p>Short Description available</p>
                                </div>
                            </div>
                        </div>

                        <RSDF_Panel customClass="" colNumber={5}>
                            <div className="rsdf-panel bottom-caption fd-panel">
                                <div class="fd-panel__body">
                                    <div class="fd-tile">
                                    <div class="fd-tile__content">
                                        <h2 class="fd-tile__title">Saldo Paypal</h2>
                                        <p>Não precisa de ter saldo para fazer compras e pagamentos online com PayPal. teste</p>
                                    </div>
                                    </div>
                                </div>
                                <small>
                                    Carregue o seu saldo PayPal instantaneamente com Multibanco e compre com a segurança do PayPal em Portugal ou fora.
                                </small>
                            </div>
                        </RSDF_Panel>


                        <RSDF_Panel customClass="" colNumber={4}>
                            <div className="rsdf-panel fd-panel">
                                <div className="fd-panel__body">
                                    <div className="rsdf-button-group">
                                        <Button className="paypal-btn-round send-money">
                                            <span>Enviar</span>
                                        </Button>
                                        <Button className="paypal-btn-round receive-money ">
                                            <span>Solicitar</span>
                                        </Button>
                                        <Button className="paypal-btn-round more-opts ">
                                            <span>Visa</span>
                                        </Button>                                                
                                    </div>
                                </div>
                            </div>
                        </RSDF_Panel>

                    </div>
                </section>

                <section className="fd-section">
                    <div className="fd-container fd-container--fluid">

                    <RSDF_Panel colNumber={5}>
                        <div className="rsdf-panel fd-panel">
                            <div class="fd-panel__body">
                                <div class="fd-tile">
                                <div class="fd-tile__content">
                                    <h2 class="fd-tile__title">Actividade Recente</h2>
                                    <p>Atividade Recente</p>
                                </div>
                                </div>
                                <RSDF_Table></RSDF_Table>
                                <div className="panel-controllers">
                                    <Link className="fd-side-nav__link" to='/actividade'>
                                        <Button className="rsdf-default-button small">Ver Actividade</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </RSDF_Panel>
           
                    <RSDF_Panel colNumber={3}>
                        <div className="rsdf-panel fd-panel">
                        <div class="fd-panel__body">
                            <div class="fd-tile">
                                <div class="fd-tile__content">
                                    <h2 class="fd-tile__title">Bancos e Cartões</h2>
                                </div>
                            </div>
                            <RSDF_TableCards></RSDF_TableCards>
                            <div className="panel-controllers">
                                <Link className="fd-side-nav__link" to='/actividade'>
                                    <Button className="rsdf-default-button small">Associar um cartão</Button>
                                </Link>
                            </div>
                        </div>
                        </div>
                    </RSDF_Panel>


                    <RSDF_Panel colNumber={4}>
                        <div className="rsdf-panel fd-panel highlighted">
                        <div class="fd-panel__body">
                            <div class="fd-tile">
                                <div class="fd-tile__content">
                                <h2 class="fd-tile__title">Enviar Dinheiro</h2>
                                <p>Atividade Recente</p>
                                </div>
                            </div>
                            <p>
                                Envie fundos mais depressa ao importar os seus contactos do Gmail, Yahoo ou Outlook.
                            </p>
                            <br></br>
                            <p>Não partilhamos os seus dados com ninguém.</p>
                            <div className="panel-controllers">
                                <Link className="fd-side-nav__link" to='/transferencias'>
                                    <Button className="rsdf-default-button small">Associar um cartão</Button>
                                </Link>
                            </div>
                        </div>
                        </div>
                    </RSDF_Panel>

                </div>
                </section>


        </div>
    )
}

export default dashboard;