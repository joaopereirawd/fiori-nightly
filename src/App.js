import React, { Component } from 'react';
import './css/app.css';
import { Shellbar, Menu, MenuList, MenuItem } from 'fundamental-react';
import brandLogo from '../src/img/paypal.svg';
import userPhoto from '../src/img/sophie.jpg';
import RSDF_Panel from './components/rsdf-panel.js';
import RSDF_Table from './components/rsdf-table.js';
class App extends Component {
  constructor(props) {
    super(props);
  
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
  
  }
  render() {


    return (
      <div className="App">
        <div className="fd-shell fd-shell--fundamentals">

                {/* Shellbar header container */}
                <div className="fd-shell__header">
                  <Shellbar
                    logo={<img src={brandLogo} alt='SAP' />}
                    notifications={this.notifications}
                    productTitle={false}
                    profile={this.profile}
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

                                    <div className="fd-panel sdf-profile-panel rsdf-no-background rsdf-no-shadow">
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
                                          bancos e cartões
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
