import React from 'react';
import {browserHistory} from 'react-router';

import api from './../../../api/api';

export default class AdminCreateNew extends React.Component{

    constructor(){
        super();
        this.addNewConfirm = this.addNewConfirm.bind(this);
        this.addNewCancel  = this.addNewCancel.bind(this);

        this.handleTitleChange       = this.handleTitleChange.bind(this);
        this.handleBrandChange       = this.handleBrandChange.bind(this);
        this.handlePriceChange       = this.handlePriceChange.bind(this);
        this.handleImageChange       = this.handleImageChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleDetailsChange     = this.handleDetailsChange.bind(this);
    }

    state = {
        title: null,
        description: null,
        details: [],
        price: null,
        brand: null,
        image: null
    };

    addNewConfirm(event){
        event.preventDefault();

        api.createNewComputer(Object.assign(this.state, {id: Date.now(), date: Date.now()}));

        browserHistory.push('/admin');
    }

    addNewCancel(){
        if(confirm("Are you sure that you want to cancel? All data will be lost!")){
            this.setState({
                    title: null,
                    date: null,
                    description: null,
                    details: [],
                    price: null,
                    brand: null,
                    image: null
            });

            browserHistory.push('/admin');
        }
    }
    handleTitleChange(event){
        this.setState({title: event.target.value});
    }
    handleBrandChange(event){
        this.setState({brand: event.target.value});
    }
    handlePriceChange(event){
        this.setState({price: +event.target.value});
    }
    handleImageChange(event){
        this.setState({image: event.target.value});
    }
    handleDescriptionChange(event){
        this.setState({description: event.target.value});
    }
    handleDetailsChange(event){
        this.setState({details: event.target.value.split(',')});
    }

    render(){
        return (
            <div className="page_admin-add">
                <h1 className="page_admin-title"> Add new computer</h1>

                <div className="page_admin-form">
                    <form onSubmit={this.addNewConfirm}>
                        Title:         <input type="text"   value={this.state.title}       onChange={this.handleTitleChange} required/> <br/><br/>
                        Brand:         <input type="text"   value={this.state.brand}       onChange={this.handleBrandChange} required/> <br/><br/>
                        Price:         <input type="number" value={this.state.price}       onChange={this.handlePriceChange} required/> <br/><br/>
                        Image:         <input type="text"   value={this.state.image}       onChange={this.handleImageChange} required/> <br/><br/>
                        Description: <br/>  <textarea            value={this.state.description} onChange={this.handleDescriptionChange} required cols="30" rows="10"/> <br/><br/>
                        Details(*CSV):<br/> <textarea            value={this.state.details}     onChange={this.handleDetailsChange} required cols="30" rows="10"/> <br/><br/>
                        <input className="page_admin-add--button-confirm" type="submit" value="Add"/>
                        <a className="page_admin-add--button-cancel" href="#" onClick={this.addNewCancel}>Cancel</a>
                    </form>
                </div>
            </div>
        )
    }
}