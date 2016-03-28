import React from 'react';
import Navigation from '../../common/navigation.component';

import ComputersList from './computers-list.component';

//mock data
import api from './../../../api/api';

export default class ComputersPage extends React.Component{
    render(){
        return (
            <div>
                <Navigation activeTab={'computers'}/>
                <div className="page_computers">
                    <h1 className="page_computers-title">Computers catalog</h1>
                    <ComputersList computers = {api.getAllComputers()}/>
                </div>
            </div>
        )
    }
}