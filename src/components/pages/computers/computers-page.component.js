import React from 'react';
import Navigation from '../../common/navigation.component';

import ComputersList from './computers-list.component';

//mock data
import api from './../../../api/api';

export default class ComputersPage extends React.Component{

    constructor(){
        super();
        this.filterByPrice = this.filterByPrice.bind(this);
        this.handlePriceChangeFrom = this.handlePriceChangeFrom.bind(this);
        this.handlePriceChangeTo = this.handlePriceChangeTo.bind(this);
    }

    state = {
        computers: api.getAllComputers(),
        filters: {
            price: {
                from: 500, //default values
                to: 1000
            }
        }
    };


    filterByPrice(e){
        e.preventDefault();
        this.setState({
            computers: api
                .getAllComputers()
                .filter(computer => computer.price <= this.state.filters.price.to && computer.price >= this.state.filters.price.from)
        })
    }

    handlePriceChangeFrom(e){
        this.setState({filters: {price: {from: e.target.value, to: this.state.filters.price.to}}});
    }

    handlePriceChangeTo(e){
        this.setState({filters: {price: {from: this.state.filters.price.from, to: e.target.value}}});
    }

    render(){
        return (
            <div>
                <Navigation activeTab={'computers'}/>
                <div className="page_computers">
                    <h1 className="page_computers-title">Computers catalog</h1>
                    <div className="flex-container flex-justify-space-around">
                        <div className="page_computers-filters">
                            <h2 className="page_computers-filters--category">Filter by price:</h2>
                            <form onSubmit={this.filterByPrice}>
                                From: <input type="number" name="from" onChange={this.handlePriceChangeFrom} value={this.state.filters.price.from}/>
                                To:   <input type="number" name="to"   onChange={this.handlePriceChangeTo}   value={this.state.filters.price.to}/>
                                      <input type="submit" value="Filter"/>
                            </form>
                        </div>
                        <ComputersList computers = {this.state.computers}/>
                    </div>
                </div>
            </div>
        )
    }
}