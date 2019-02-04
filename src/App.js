import React, { Component } from 'react';
import './css/app.css';
import { Shellbar } from 'fundamental-react';
import brandLogo from '../src/img/paypal.svg';


class App extends Component {
  constructor(props) {
    super(props);
  
      this.profile1 = {
        initials: 'VS',
        userName: 'Vanda Silva',
        colorAccent: 1  
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
                    productTitle={false}
                    profile={this.profile1}
                    profileMenu={this.profileMenu} />
                </div>

                {/* shell App */}
                <div className="fd-shell__app">
                  <div className="fd-app">
              <div class="fd-app__navigation fd-app__navigation--vertical">
                    <nav class="fd-side-nav">
                        <ul class="fd-side-nav__list">
                            <li class="fd-side-nav__item">
                                <a class="fd-side-nav__link" href="#">
                                    <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                                    Link icon
                                </a>
                            </li>
                            <li class="fd-side-nav__item">
                                <a class="fd-side-nav__link" href="#">
                                    <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                                    Link icon
                                </a>
                            </li>
                            <li class="fd-side-nav__item">
                                <a class="fd-side-nav__link" href="#">
                                    <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                                    Link icon
                                </a>
                            </li>
                            <li class="fd-side-nav__item">
                                <a class="fd-side-nav__link" href="#">
                                    <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                                    Link icon
                                </a>
                            </li>
                            <li class="fd-side-nav__item">
                                <a class="fd-side-nav__link" href="#">
                                    <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                                    Link icon
                                </a>
                            </li>
                            <li class="fd-side-nav__item">
                                <a class="fd-side-nav__link" href="#">
                                    <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                                    Link icon
                                </a>
                            </li>
                        </ul>
                    </nav>
            </div>
                      <main className="fd-app__main">


                            {/* Grid Section*/}

                              <section class="fd-section">
                                  <div class="fd-container fd-container--fluid">
                                      <div class="fd-panel">


                                          <div class="fd-tile">
                                            <div class="fd-tile__media">
                                              <span class=" fd-image--m fd-image--circle" aria-label="TILE_MEDIA_ALT"></span>
                                            </div>
                                            <div class="fd-tile__content">
                                              <h2 class="fd-tile__title">Tile Title</h2>
                                              <p>Tile Description</p>
                                            </div>
                                          </div>


                                      </div>
                                  </div>
                              </section>

                              <section class="fd-section">
                                  <div class="fd-container fd-container--fluid">
                                      <div class="fd-col--6">
                                          <div class="fd-panel">
                                              .fd-panel
                                          </div>
                                      </div>
                                      <div class="fd-col--6">
                                          <div class="fd-panel">
                                              .fd-panel
                                          </div>
                                      </div>
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
