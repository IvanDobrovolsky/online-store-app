import React from 'react';
import { Router, Route, IndexRoute} from 'react-router';

import createBrowserHistory from 'history/lib/createBrowserHistory';

//Application components
import HomePage from './pages/home/home-page.component';
import ComputersPage from './pages/computers/computers-page.component';
import ShoppingCartPage from './pages/cart/cart-page.component';
import AdminPage from './pages/admin/admin-page.component';
import PageNotFound from './pages/404';

export default class App extends React.Component{
    render(){
        return (<Router history={createBrowserHistory()}>
                    <Route path="/">
                        <IndexRoute              component={HomePage} />
                        <Route path="/computers" component={ComputersPage}/>
                        <Route path="/cart"      component={ShoppingCartPage}/>
                        <Route path="/admin"     component={AdminPage}/>
                        <Route path="*"          component={PageNotFound}/>
                    </Route>
                </Router>)
    }
}