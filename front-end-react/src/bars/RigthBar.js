import React from 'react'
import Inventory from '../components/Inventory'
import NavBar from '../components/NavBar'
import { Route, Switch } from 'react-router-dom'
import Categories from '../components/Categories';
import Providers from '../components/Providers'



export default function RigthBar() {
    return (
        <div>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Inventory} />
                    <Route path="/categories" component={Categories} />
                    <Route path="/providers" component={Providers} />
                </Switch>
                
            </div>
            <div>
                
            </div>
        </div>
    )
}
