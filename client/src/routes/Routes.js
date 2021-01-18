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
            <Route path='/welcome' component={Welcome}></Route>
            <Route path='/register' component={Register}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/new' component={New}></Route>
            <Route path='/draft' component={Draft}></Route>
            <Route path='/template' component={Template}></Route>
            <Route path='/sent' component={Sent}></Route>
            <Route path='/settings' component={Settings}></Route>
        </>
    )
}

export default Routes
