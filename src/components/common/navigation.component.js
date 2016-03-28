import React from 'react';
import {browserHistory} from 'react-router';


export default class Navigation extends React.Component{
    render(){
        return (
            <nav className="navigation">
                <ul className="navigation-items">
                    <li className={this.props.activeTab === 'home'      ? 'navigation-item-active' : 'navigation-item'} onClick={() => browserHistory.push('/')}>Home</li>
                    <li className={this.props.activeTab === 'computers' ? 'navigation-item-active' : 'navigation-item'} onClick={() => browserHistory.push('/computers')}>Computers</li>
                    <li className={this.props.activeTab === 'cart'      ? 'navigation-item-active' : 'navigation-item'} onClick={() => browserHistory.push('/cart')}>Cart</li>
                    <li className={this.props.activeTab === 'admin'     ? 'navigation-item-active' : 'navigation-item'} onClick={() => browserHistory.push('/admin')}>Admin</li>
                </ul>
            </nav>
        )
    }
}