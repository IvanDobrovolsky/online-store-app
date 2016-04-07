import React from 'react';
import Navigation from '../../common/navigation.component';

import api from './../../../api/api';

export default class AdminPage extends React.Component{

    constructor(){
        super();
        this.removeComputer = this.removeComputer.bind(this);
    }

    state = {computers: api.getAllComputers()};

    removeComputer(id){
        if(confirm("Are you sure that you want to remove the computer?")){
            api.removeComputer(id);
            this.setState({computers: api.getAllComputers()});
        }
    }

    render(){

        const {computers} = this.state;

        return (
            <div>
                <Navigation activeTab={'admin'}/>
                <div className="page_admin">
                    <h1 className="page_admin-title">Admin page</h1>
                    <div className="page_admin-computers-list">
                        <div className="page_admin-computers-list-header flex-container flex-justify-space-around">
                            <div className="page_admin-computers-list-item--title  flex-grid-3">Title</div>
                            <div className="page_admin-computers-list-item--price  flex-grid-1">Price</div>
                            <div className="page_admin-computers-list-item--edit   flex-grid-1">Edit computer</div>
                            <div className="page_admin-computers-list-item--remove flex-grid-1">Remove computer</div>
                        </div>
                        <ul>
                            {computers.length <= 0 ? <li>There is no computers</li> : computers.map(computer => {
                                return (<li className="page_admin-computers-list-item flex-container flex-justify-space-around" key={computer.id}>
                                            <div className="page_admin-computers-list-item--title  flex-grid-3">{`${computer.brand} ${computer.title}`}</div>
                                            <div className="page_admin-computers-list-item--price  flex-grid-1">{computer.price}</div>
                                            <div className="page_admin-computers-list-item--edit   flex-grid-1"><button>Edit</button></div>
                                            <div className="page_admin-computers-list-item--remove flex-grid-1"><button onClick={this.removeComputer.bind(this, computer.id)}>Remove</button></div>
                                        </li>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
