import React from 'react';
import Navigation from '../../common/navigation.component';

import ComputersList from './computers-list.component';

//mock data
import api from './../../../api/api';

export default class ComputersPage extends React.Component{

    constructor(){
        super();
        this.toggleFilters = this.toggleFilters.bind(this);
        this.filterComputers = this.filterComputers.bind(this);
        this.handlePriceChangeFrom = this.handlePriceChangeFrom.bind(this);
        this.handlePriceChangeTo = this.handlePriceChangeTo.bind(this);
        this.handleCheckboxBrandChange = this.handleCheckboxBrandChange.bind(this);
    }

    state = {
        computers: [],
        brands: [],
        filtersEnabled: false,
        filtersByPrice: {
            from: "0",
            to: "2000"
        },
        filtersByBrand: []
    };

    componentWillMount(){
            api
               .getAllComputers()
               .then(computers => this.setState({computers}));

            api
               .getAllBrandNames()
               .then(brands => this.setState({brands}));
    }

    toggleFilters(){
        this.setState({filtersEnabled: !this.state.filtersEnabled});

        if(this.state.filtersEnabled){
            api.getAllComputers()
                .then(computers => this.setState({computers}));
        }
    }

    handlePriceChangeFrom(event){
        this.setState({filtersByPrice: {from: event.target.value, to: this.state.filtersByPrice.to}});
    }

    handlePriceChangeTo(event){
        this.setState({filtersByPrice: {from: this.state.filtersByPrice.from, to: event.target.value}});
    }

    handleCheckboxBrandChange(event){
        let brandsList = this.state.filtersByBrand;
        let brand = event.target.value;

        brandsList.includes(brand) ? brandsList.splice(brandsList.indexOf(brand), 1) : brandsList.push(brand);

        this.setState({filtersByBrand: brandsList});
    }

    filterComputers(event) {
        event.preventDefault();

        let filters = {price: this.state.filtersByPrice, brands: this.state.filtersByBrand};

        api
            .findComputers(filters)
            .then(filteredComputers => {
                this.setState({computers: filteredComputers});
            })
    }

    render(){
        return (
            <div>
                <Navigation activeTab={'computers'}/>
                <div className="page_computers">
                    <h1 className="page_computers-title">Computers catalog</h1>
                    <div className="flex-container flex-justify-space-around">
                        <div className="flex-container flex-direction-column">
                            <div className="page_computers-filters--enable">
                                <input type="checkbox" onChange={this.toggleFilters}/> {!this.state.filtersEnabled ? 'Enable filters' : 'Filters enabled (click to disable)'}
                            </div>
                            <div className="page_computers-filters" style={{display: this.state.filtersEnabled ? 'block' : 'none'}}>
                                <form onSubmit={this.filterComputers}>
                                    <div className="page_computer-filters-price">
                                        <h2 className="page_computers-filters--category">Filter by price:</h2>
                                        From: <input type="number" name="from" onChange={this.handlePriceChangeFrom} value={this.state.filtersByPrice.from} required/>
                                        To:   <input type="number" name="to"   onChange={this.handlePriceChangeTo}   value={this.state.filtersByPrice.to}   required/>
                                    </div>
                                    <div className="page_computer-filters-brand">
                                        <h2 className="page_computers-filters--category">Filter by brand:</h2>
                                        {this.state.brands.map((brand, index) => {
                                            return <div key={index} ><input type="checkbox" onChange={this.handleCheckboxBrandChange} name={brand} value={brand}/> {brand}<br/></div>
                                        })}
                                    </div>
                                    <input type="submit" value="Filter"/>
                                </form>
                            </div>
                        </div>
                        <ComputersList computers = {this.state.computers}/>
                    </div>
                </div>
            </div>
        )
    }
}