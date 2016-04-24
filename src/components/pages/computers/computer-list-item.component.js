import React from 'react';
import {browserHistory} from 'react-router';

import shoppingCartService from './../../../services/shopping-cart.service';

export default class ComputersListItem extends React.Component{

    constructor(){
        super();
        this.addToCart = this.addToCart.bind(this);
    }

    static propTypes = {
        _id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        image: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        brand: React.PropTypes.string.isRequired
    };

    addToCart(id){
        shoppingCartService.addToCart(id);
    }

    render(){
        return (
            <div>
                <div className="page_computers-list-item">
                    <h2 className="page_computers-list-item--title">{`${this.props.brand} ${this.props.title} -- ${this.props.price}$`}</h2>
                    <div  className="page_computers-list-item--image">
                        <img src={this.props.image}/>
                    </div>
                    <p className="page_computers-list-item--description">{this.props.description.split('.').shift() + "..."}</p>
                    <a className="page_computers-list-item--more" onClick={() => browserHistory.push(`/computers/${this.props._id}`)}>View</a>
                    <a className="page_computers-list-item--add"  onClick={this.addToCart.bind(this, this.props._id)}>Buy</a>
                </div>
            </div>
        )
    }
}
