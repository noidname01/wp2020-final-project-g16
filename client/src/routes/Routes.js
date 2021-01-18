import React from 'react'
import { Route } from 'react-router-dom'
import Welcome from '../containers/Welcome'
import Login from '../containers/Login'
import Register from '../containers/Register'
import New from '../containers/New'
import Draft from '../containers/Draft'
import Template from '../containers/Template'
import Sent from '../containers/Sent'
import Settings from '../containers/Settings'

const Routes = () => {
    return (
        <>
            <Route path='/ee/welcome' component={Welcome}></Route>
            <Route path='/ee/register' component={Register}></Route>
            <Route path='/ee/login' component={Login}></Route>
            <Route path='/ee/new' component={New}></Route>
            <Route path='/ee/draft' component={Draft}></Route>
            <Route path='/ee/template' component={Template}></Route>
            <Route path='/ee/sent' component={Sent}></Route>
            <Route path='/ee/settings' component={Settings}></Route>
        </>
    )
}

export default Routes
