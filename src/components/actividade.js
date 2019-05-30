import React from 'react';
import RSDF_Panel from '../components/rsdf-panel.js';
import RSDF_Table from '../components/rsdf-table.js';
import { Menu, MenuList, MenuItem, Button, Table, Popover, Image } from 'fundamental-react';


const dashboard = (props) => {
    return (
        <section class="fd-section">
            <div className="fd-section-title">
                <h1>Actividade</h1>
            </div>
                <Table
                    headers={[<input type="checkbox" />, 'Avatar', 'email', 'First Name', 'Last Name', 'Date', ' ']}
                    tableData={[
                        {
                            rowData: [
                                <input type="checkbox" />,
                                <Image size="m" photo="https://robohash.org/green?size=50x50" />,
                                <a href="#" className="fd-has-font-weight-semi">
                                    user.name@email.com
                                </a>,
                                'First Name',
                                'Last Name',
                                '01/26/17',
                                <Popover
                                    control={<Button option="light" glyph="vertical-grip" />}
                                    body={
                                        <Menu>
                                            <MenuList>
                                                <MenuItem url="/">Option 1</MenuItem>
                                                <MenuItem url="/">Option 2</MenuItem>
                                                <MenuItem url="/">Option 3</MenuItem>
                                                <MenuItem url="/">Option 4</MenuItem>
                                            </MenuList>
                                        </Menu>
                                    }
                                />
                            ]
                        },
                        {
                            rowData: [
                                <input type="checkbox" />,
                                <Image size="m" photo="https://robohash.org/brown?size=50x50" />,
                                <a href="#" className="fd-has-font-weight-semi">
                                    florence.garcia@qwerty.io
                                </a>,
                                'First Name',
                                'Last Name',
                                '07/29/18',
                                <Popover
                                    control={<Button option="light" glyph="vertical-grip" />}
                                    body={
                                        <Menu>
                                            <MenuList>
                                                <MenuItem url="/">Option 1</MenuItem>
                                                <MenuItem url="/">Option 2</MenuItem>
                                                <MenuItem url="/">Option 3</MenuItem>
                                                <MenuItem url="/">Option 4</MenuItem>
                                            </MenuList>
                                        </Menu>
                                    }
                                />
                            ]
                        },
                        {
                            rowData: [
                                <input type="checkbox" />,
                                <Image size="m" photo="https://robohash.org/Q27.png?set=set1&size=50x50" />,
                                <a href="#" className="fd-has-font-weight-semi">
                                    mark.helper@qwerty.io
                                </a>,
                                'First Name',
                                'Last Name',
                                '05/26/18',
                                <Popover
                                    control={<Button option="light" glyph="vertical-grip" />}
                                    body={
                                        <Menu>
                                            <MenuList>
                                                <MenuItem url="/">Option 1</MenuItem>
                                                <MenuItem url="/">Option 2</MenuItem>
                                                <MenuItem url="/">Option 3</MenuItem>
                                                <MenuItem url="/">Option 4</MenuItem>
                                            </MenuList>
                                        </Menu>
                                    }
                                />
                            ]
                        },
                        {
                            rowData: [
                                <input type="checkbox" />,
                                <Image size="m" photo="https://robohash.org/water?&size=50x50" />,
                                <a href="#" className="fd-has-font-weight-semi">
                                    user.name@email.com
                                </a>,
                                'First Name',
                                'Last Name',
                                '01/26/14',
                                <Popover
                                    control={<Button option="light" glyph="vertical-grip" />}
                                    body={
                                        <Menu>
                                            <MenuList>
                                                <MenuItem url="/">Option 1</MenuItem>
                                                <MenuItem url="/">Option 2</MenuItem>
                                                <MenuItem url="/">Option 3</MenuItem>
                                                <MenuItem url="/">Option 4</MenuItem>
                                            </MenuList>
                                        </Menu>
                                    }
                                />
                            ]
                        },
                        {
                            rowData: [
                                <input type="checkbox" />,
                                <Image size="m" photo="https://robohash.org/water?&size=50x50" />,
                                <a href="#" className="fd-has-font-weight-semi">
                                    user.name@email.com
                                </a>,
                                'First Name',
                                'Last Name',
                                '01/26/14',
                                <Popover
                                    control={<Button option="light" glyph="vertical-grip" />}
                                    body={
                                        <Menu>
                                            <MenuList>
                                                <MenuItem url="/">Option 1</MenuItem>
                                                <MenuItem url="/">Option 2</MenuItem>
                                                <MenuItem url="/">Option 3</MenuItem>
                                                <MenuItem url="/">Option 4</MenuItem>
                                            </MenuList>
                                        </Menu>
                                    }
                                />
                            ]
                        },
                        {
                            rowData: [
                                <input type="checkbox" />,
                                <Image size="m" photo="https://robohash.org/water?&size=50x50" />,
                                <a href="#" className="fd-has-font-weight-semi">
                                    user.name@email.com
                                </a>,
                                'First Name',
                                'Last Name',
                                '01/26/14',
                                <Popover
                                    control={<Button option="light" glyph="vertical-grip" />}
                                    body={
                                        <Menu>
                                            <MenuList>
                                                <MenuItem url="/">Option 1</MenuItem>
                                                <MenuItem url="/">Option 2</MenuItem>
                                                <MenuItem url="/">Option 3</MenuItem>
                                                <MenuItem url="/">Option 4</MenuItem>
                                            </MenuList>
                                        </Menu>
                                    }
                                />
                            ]
                        }
                    ]}
                />
          
        </section>
    )
}

export default dashboard;