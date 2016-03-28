import React from 'react';

export default class ComputersListItem extends React.Component{

    static propTypes = {
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        date: React.PropTypes.number.isRequired,
        image: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        brand: React.PropTypes.string.isRequired
    };

    render(){
        return (
            <div>
                <div className="page_computers-list-item">
                    <h2 className="page_computers-list-item--title">{this.props.title}</h2>
                    <div  className="page_computers-list-item--image">
                        <img src={this.props.image}/>
                    </div>
                    <p className="page_computers-list-item--description">{this.props.description}</p>
                    <p className="page_computers-list-item--brand"><strong><i>Brand: </i></strong> {this.props.brand}</p>
                    <p className="page_computers-list-item--price"><strong><i>Price: </i></strong>  {this.props.price}$</p>
                    <p className="page_computers-list-item--date"><strong><i>Added: </i></strong> {new Date(this.props.date).toLocaleString()}</p>
                </div>
            </div>
        )
    }
}

