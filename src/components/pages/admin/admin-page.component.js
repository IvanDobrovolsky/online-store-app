import React from 'react';
import Navigation from '../../common/navigation.component';

export default class AdminPage extends React.Component{
    render(){
        return (
            <div>
                <Navigation activeTab={'admin'}/>
                Admin Page
            </div>
        )
    }
}