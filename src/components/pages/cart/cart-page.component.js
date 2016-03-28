import React from 'react';
import Navigation from '../../common/navigation.component';

export default class ShoppingCartPage extends React.Component{
    render(){
        return (
            <div>
                <Navigation activeTab={'cart'}/>
                Shopping Cart Page
            </div>
        )
    }
}