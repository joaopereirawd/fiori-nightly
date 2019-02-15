import React, { Component } from 'react';
import './css/app.css';
import { Shellbar, Menu, MenuList, MenuItem, Button } from 'fundamental-react';
import brandLogo from '../src/img/paypal.svg';
import userPhoto from '../src/img/sophie.jpg';
import RSDF_Panel from './components/rsdf-panel.js';
import RSDF_Table from './components/rsdf-table.js';
import RSDF_TableCards from './components/rsdf-table-cards';

class App extends Component {
  constructor(props) {
    super(props);

      this.state = {
        sideBarOpen: false
      }

      this.profile = {
        initials: 'DA',
        userName: 'Sophie',
        colorAccent: 1,
        image: userPhoto
      };

      this.notifications = {
        notificationCount: 2,
        label: 'Notifications',
        notificationsBody: (
          <Menu>
            <MenuList>
              <MenuItem url='/'>Notification 1</MenuItem>
              <MenuItem url='/'>Notification 2</MenuItem>
              <MenuItem url='/'>Notification 3</MenuItem>
            </MenuList>
          </Menu>
        ),
        noNotificationsBody: (
          <Menu>
            <MenuList>
              <MenuItem>There are no notifications</MenuItem>
            </MenuList>
          </Menu>
        ),
        callback: () => alert('Notification selected!')
      };
      
      this.profileMenu =[
        { name: 'Settings', glyph: 'action-settings', size: 's', callback: () => alert('Settings selected!') },
        { name: 'Sign Out', glyph: 'log', size: 's', callback: () => alert('Sign Out selected!') }
      ];

    this.appSttings = [
      {
        glyph: 'action-settings',
        label: 'Settings',
        callback: () => alert('Settings selected!'),
        menu: (
          <Menu>
            <MenuList>
              <MenuItem url='/'>Option 1</MenuItem>
              <MenuItem url='/'>Option 2</MenuItem>
              <MenuItem url='/'>Option 3</MenuItem>
            </MenuList>
          </Menu>
        )
      }
    ];

    this.searchInput = {
      label: 'Search',
      glyph: 'search',
      placeholder: 'Enter a fruit',
      searchList: [
        { text: 'apple', callback: () => alert('apple') },
        { text: 'apricot', callback: () => alert('apricot') },
        { text: 'acai', callback: () => alert('acai') },
        { text: 'banana', callback: () => alert('banana') },
        { text: 'berry', callback: () => alert('berry') },
        { text: 'blueberry', callback: () => alert('blueberry') },
        { text: 'blackberry', callback: () => alert('blackberry') },
        { text: 'cranberry', callback: () => alert('cranberry') },
        { text: 'conkerberry', callback: () => alert('conkerberry') },
        { text: 'calabash', callback: () => alert('calabash') },
        { text: 'clementines', callback: () => alert('clementines') },
        { text: 'kiwi', callback: () => alert('kiwi') },
        { text: 'orange', callback: () => alert('orange') }
      ],
      onSearch: function (searchTerm) {
        alert(`Search fired for ${searchTerm}`);
      },
      callback: () => alert('Search selected!')
    };
    
  }
  sideBarToggle = (e) => {
    this.setState({ sideBarOpen: !this.state.sideBarOpen })
  }
  render() {


    return (
      <div className="App">
          <div className={`fd-shell fd-shell--fundamentals has-sidebar ${(this.state.sideBarOpen) ? 'active' : 'desactive'}`}>
                {/* RSDF Sidebar*/}
                <div className={`rsdf-sidebar ${(this.state.sideBarOpen) ? 'active' : 'desactive'}`}>
                    <div class="menu-wrapper" onClick={this.sideBarToggle}>
              <div className={`hamburger-menu ${(this.state.sideBarOpen) ? 'animate' : 'desactive'}`} ></div>
                    </div>
            <div className="fd-app__navigation fd-app__navigation--vertical">
              <nav className="fd-side-nav">
                <ul className="fd-side-nav__list">
                  <li className="fd-side-nav__item">
                    <a className="fd-side-nav__link" href="#">
                      <span className="fd-side-nav__icon sap-icon--dimension sap-icon--l" role="presentation"></span>
                      <span className="fd-side-nav-name">Resumo</span>
                      </a>
                  </li>
                  <li className="fd-side-nav__item">
                    <a className="fd-side-nav__link" href="#">
                      <span className="fd-side-nav__icon sap-icon--activities sap-icon--l" role="presentation"></span>
                      <span className="fd-side-nav-name">Atividade</span>
                                </a>
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


                {/* Shellbar header container */}
                <div className="fd-shell__header">
                  <Shellbar
                    copilot= {true}
                    logo={<img src={brandLogo} alt='SAP' />}
                    actions={this.appSttings}
                    notifications={this.notifications}
                    productTitle={false}
                    profile={this.profile}
                    searchInput={this.searchInput}
                    profileMenu={this.profileMenu} />
                </div>

                {/* shell App */}
                <div className="fd-shell__app">
                  <div className="fd-app">


{/*               <div className="fd-app__navigation fd-app__navigation--vertical">
                    <nav className="fd-side-nav">
                        <ul className="fd-side-nav__list">
                            <li className="fd-side-nav__item">
                                <a className="fd-side-nav__link" href="#">
                                    <span className="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                                    Link icon
                                </a>
                            </li>
                            <li className="fd-side-nav__item">
                                <a className="fd-side-nav__link" href="#">
                                    <span className="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                                    Link icon
                                </a>
                            </li>
                            <li className="fd-side-nav__item">
                                <a className="fd-side-nav__link" href="#">
                                    <span className="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                                    Link icon
                                </a>
                            </li>
                            <li className="fd-side-nav__item">
                                <a className="fd-side-nav__link" href="#">
                                    <span className="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                                    Link icon
                                </a>
                            </li>
                            <li className="fd-side-nav__item">
                                <a className="fd-side-nav__link" href="#">
                                    <span className="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                                    Link icon
                                </a>
                            </li>
                            <li className="fd-side-nav__item">
                                <a className="fd-side-nav__link" href="#">
                                    <span className="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                                    Link icon
                                </a>
                            </li>
                        </ul>
                    </nav>
            </div> */}
                      <main className="fd-app__main">


                            {/* Grid Section*/}

                              <section className="fd-section">
                                  <div className="fd-container fd-container--fluid">
                                      
                                        <div className="fd-col--3 fd-panel sdf-profile-panel rsdf-no-background rsdf-no-shadow">
                                            <div className="fd-tile rsdf-no-background rsdf-no-shadow">
                                              <div className="fd-tile__media sdf-profile-photo-wrapper">
                                                <span className="fd-image--xl fd-image--circle" aria-label="TILE_MEDIA_ALT" style={{ backgroundImage: `url('${userPhoto}`}}></span>
                                              </div>
                                              <div className="fd-tile__content">
                                                <h2 className="fd-tile__title">Bom Dia, <br></br> {this.profile.userName} </h2>
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


                                        <RSDF_Panel customClass="" colNumber={3}>
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
                                        </div>
                                      </div>
                                    </RSDF_Panel>


                                    <RSDF_Panel colNumber={3}>
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
                                        </div>
                                      </div>
                                    </RSDF_Panel>

                                </div>
                              </section>


                      </main>
                  </div>
                </div>

                {/* Shell footer */}
                <div className="fd-shell__footer">
                    fd-shell__footer
                </div>
        </div>
    
      </div>
    );
  }
}

export default App;
