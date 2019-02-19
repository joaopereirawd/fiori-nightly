import React, { Component } from 'react';
import './css/app.css';
import { Shellbar, Menu, MenuList, MenuItem, Button } from 'fundamental-react';
import brandLogo from '../src/img/paypal.svg';
import userPhoto from '../src/img/sophie.jpg';
import RSDF_Sidebar from './components/rsdf-sidebar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//Views
import Dashboard from './components/dashboard';
import Actividade from './components/actividade';

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
      <Router>
      <div className="App">
          <div className={`fd-shell fd-shell--fundamentals has-sidebar ${(this.state.sideBarOpen) ? 'active' : 'desactive'}`}>

                <RSDF_Sidebar 
                  open={this.state.sideBarOpen}
                  toggle={this.sideBarToggle}
                />

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
                    <main className="fd-app__main">
                    <Switch>
                          <Route exact path='/' component={Dashboard}/>
                          <Route exact path='/actividade' component={Actividade}/>
                      </Switch>
                    </main>
                  </div>
                </div>

                {/* Shell footer */}
                <div className="fd-shell__footer">
                    fd-shell__footer
                </div>
        </div>
    
      </div>
      </Router>
    );
  }
}

export default App;
