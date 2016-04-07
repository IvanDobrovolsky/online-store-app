import React from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

//Application components
import HomePage from './pages/home/home-page.component';
import ComputersPage from './pages/computers/computers-page.component';
import ShoppingCartPage from './pages/cart/cart-page.component';
import AdminPage from './pages/admin/admin-page.component';
import PageNotFound from './pages/404';
import ComputerPreviewPage from './pages/computers/computer-preview.component';
import AdminCreateNew from './pages/admin/create-new.component'

export default class App extends React.Component{
    render(){
        return (<Router history={browserHistory}>
                    <Route path="/">
                        <IndexRoute                  component={HomePage} />
                        <Route path="/computers"     component={ComputersPage}/>
                        <Route path="/computers/:id" component={ComputerPreviewPage}/>
                        <Route path="/cart"          component={ShoppingCartPage}/>
                        <Route path="/admin"         component={AdminPage}/>
                        <Route path="/admin/new"     component={AdminCreateNew}/>
                        <Route path="*"              component={PageNotFound}/>
                    </Route>
                </Router>)
    }
}