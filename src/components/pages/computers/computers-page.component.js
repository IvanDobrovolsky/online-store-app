import React from 'react';
import Navigation from '../../common/navigation.component';

export default class ComputersPage extends React.Component{
    render(){
        return (
            <div>
                <Navigation activeTab={'computers'}/>
               Computers Page
            </div>
        )
    }
}