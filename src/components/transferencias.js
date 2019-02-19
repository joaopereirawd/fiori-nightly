import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import {
    Tab, 
    TabGroup
} from 'fundamental-react';




const dashboard = (props) => {
    return (
    <TabGroup
        selected='1'>
        <Tab
            content='Hello world'
            id='1'>
            <a
                href='#'>
                Tab 1
            </a>
        </Tab>
        <Tab
            content='Hello world 2'
            id='2'>
            <a
                href='#'>
                Tab 2
            </a>
        </Tab>
        <Tab
            content='Hello world 3'
            disabled
            id='3'>
            <a
                href='#'>
                Tab 2
            </a>
        </Tab>
    </TabGroup>

    )
}

export default dashboard;