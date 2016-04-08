import React from 'react';


import ComputersListItem from './computer-list-item.component';

export default class ComputersList extends React.Component{

    static propTypes = {computers: React.PropTypes.array.isRequired};

    render(){
        return (
            <div>
                <div className="page_computers-list">
                    {this.props.computers.length == 0 ? <h2>No computers in the catalog</h2> : this.props.computers.map(computer => {
                        return <ComputersListItem key={computer._id}
                                                  _id={computer._id}
                                                  title={computer.title}
                                                  description={computer.description}
                                                  image={computer.image}
                                                  brand={computer.brand}
                                                  price={computer.price}/>
                    })}
                </div>
            </div>
        )
    }
}


