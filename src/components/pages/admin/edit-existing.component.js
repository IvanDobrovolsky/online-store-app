import React from 'react';
import {browserHistory} from 'react-router';
import api from './../../../api/api';
import toastr from 'toastr';

export default class AdminEditExisting extends React.Component{

    constructor(){
        super();
        this.updateComputer = this.updateComputer.bind(this);
        this.cancelUpdating  = this.cancelUpdating.bind(this);

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


    componentWillMount(){
        api
            .getComputerById(this.props.params.id)
            .then(response => {
                this.setState({
                    title: response.data.title,
                    image: response.data.image,
                    description: response.data.description,
                    price: response.data.price,
                    details: response.data.details,
                    brand: response.data.brand
                });
            });
    }

    updateComputer(event){
        event.preventDefault();

        let computerToUpdate = Object.assign(this.state, {_id: parseInt(this.props.params.id), date: Date.now()});

        api
           .updateComputer(computerToUpdate)
           .then(response => toastr.success(response.message));

        browserHistory.push('/admin');
    }

    cancelUpdating(){
        if(confirm("Are you sure that you want to cancel? All data will be lost!")){
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
        this.setState({price: parseInt(event.target.value)});
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
            <div className="page_admin-edit">
                <h1 className="page_admin-title">Update computer</h1>

                <div className="page_admin-form">
                    <form onSubmit={this.updateComputer}>
                        Title:         <input type="text"   value={this.state.title}       onChange={this.handleTitleChange} required/> <br/><br/>
                        Brand:         <input type="text"   value={this.state.brand}       onChange={this.handleBrandChange} required/> <br/><br/>
                        Price:         <input type="number" value={this.state.price}       onChange={this.handlePriceChange} required/> <br/><br/>
                        Image:         <input type="text"   value={this.state.image}       onChange={this.handleImageChange} required/> <br/><br/>
                        Description: <br/>  <textarea       value={this.state.description} onChange={this.handleDescriptionChange} required cols="30" rows="10"/> <br/><br/>
                        Details(*CSV):<br/> <textarea       value={this.state.details}     onChange={this.handleDetailsChange} required cols="30" rows="10"/> <br/><br/>
                        <input className="page_admin-edit--button-confirm" type="submit" value="Save"/>
                        <a className="page_admin-edit--button-cancel" href="#" onClick={this.cancelUpdating}>Cancel</a>
                    </form>
                </div>
            </div>
        )
    }
}