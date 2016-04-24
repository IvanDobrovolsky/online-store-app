import React from 'react';
import Navigation from '../../common/navigation.component';
import shoppingCartService from './../../../services/shopping-cart.service';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

export default class ShoppingCartPage extends React.Component{

    constructor(){
        super();
        this.calculateTotal   = this.calculateTotal.bind(this);
        this.increaseQuantity = this.increaseQuantity.bind(this);
        this.updateCart       = this.updateCart.bind(this);
        this.removeFromCart   = this.removeFromCart.bind(this);
    }

    state = {computers: [], total: 0};


    calculateTotal(computers){
        let total = 0;
        computers.forEach(computer => {
            total += computer.price * computer.quantity;
        });
       return total;
    }

    updateCart(){
        shoppingCartService
            .getAllComputers()
            .then(computers => this.setState({computers, total: this.calculateTotal(computers)}));
    }

    componentWillMount(){
        this.updateCart();
    }

    increaseQuantity(_id, event){
        shoppingCartService.changeQuantity(_id, event.target.value);
        this.updateCart();
    }

    removeFromCart(_id){
        if(confirm("Are you sure that you want to remove it from cart?")){
            shoppingCartService.removeFromCart(_id);
            this.updateCart();
            toastr.warning('Item was successfully removed!');
        }
    }

    render(){
        return (
            <div>
                <Navigation activeTab={'cart'}/>
                <div className="page_cart">
                    <h1 className="page_cart-title">Shopping cart</h1>
                    {this.state.computers.map((computer, index) => {
                        return (<div className="page_cart-item flex-container flex-justify-space-around" key={index}>
                                    <div className="page_cart-item--image">
                                        <img src={computer.image} alt={computer.description}/>
                                    </div>
                                    <div className="flex-container flex-direction-column">
                                        <div className="page_cart-item--link" onClick={() => browserHistory.push(`/computers/${computer._id}`)}>{`${computer.brand} ${computer.title}`}</div>
                                        <div className="page_cart-item--price">${computer.price}</div>
                                    </div>
                                    <div className="page_cart-item--quantity">
                                        <input type="number" value={computer.quantity} min="1" max="10" onChange={this.increaseQuantity.bind(this, computer._id)}/>
                                    </div>
                                    <div className="page_cart-item--total">${computer.price * computer.quantity}</div>
                                    <div className="page_cart-item--remove" onClick = {this.removeFromCart.bind(computer._id)}>x</div>
                                </div>)
                    })}
                    <div className="page_cart-total" onClick = {() => toastr.error("You don't have money, loser!")}>Buy ${this.state.total} total</div>
                </div>
            </div>
        )
    }
}