import React from 'react';
import Navigation from '../../common/navigation.component';
import {browserHistory} from 'react-router';

import api from './../../../api/api';

export default class ComputerPreviewPage extends React.Component{

    static defaultProps = {
        _id: null,
        title: null,
        date: null,
        image: null,
        description: null,
        price: null,
        brand: null,
        details: []
    };

    state = {
        _id: this.props.id,
        title: this.props.title,
        image: this.props.image,
        description: this.props.description,
        price: this.props.price,
        brand: this.props.brand,
        details: this.props.details
    };

    componentWillMount(){
        api
           .getComputerById(this.props.params.id)
           .then(response => {
               this.setState({
                   title: response.data.title,
                   _id: response.data._id,
                   date: response.data.date,
                   image: response.data.image,
                   description: response.data.description,
                   price: response.data.price,
                   details: response.data.details,
                   brand: response.data.brand
               });
           });
    }

    render(){
        return (
            <div>
                <Navigation activeTab={''}/>
                <div className="page_computer-preview">
                    <h2 className="page_computer-preview--title">{this.state.title}</h2>
                    <div  className="page_computer-preview--image">
                        <img src={this.state.image}/>
                    </div>
                    <p className="page_computer-preview--description">{this.state.description}</p>
                    <p className="page_computer-preview--brand"><strong><i>Brand: </i></strong> {this.state.brand}</p>
                    <p className="page_computer-preview--price"><strong><i>Price: </i></strong>  {this.state.price}$</p>
                    <div className="page_computer-preview--details">
                        <strong><i>Details: </i></strong>
                        <br/>
                        {this.state.details.map((detail, index) => {
                            return <div className="page_computer-preview--details-detail" key={index} >{detail}</div>
                        })}
                    </div>
                    <p className="page_computer-preview--date"><strong><i>Added: </i></strong> {new Date(this.state.date).toLocaleString()}</p>
                    <a className="page_computer-preview--back" href="#" onClick={() => browserHistory.push('/computers')}>Back to catalog</a>
                </div>
            </div>
        )
    }
}