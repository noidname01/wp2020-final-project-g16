import React from 'react'
import { Route } from 'react-router-dom'
import New from '../containers/New'
import Draft from '../containers/Draft'
import Template from '../containers/Template'
import Sent from '../containers/Sent'
import Settings from '../containers/Settings'
import Editor from '../components/Editor'
import Excel from '../components/Excel'
import Preview from '../components/Preview'
import Send from '../components/Send'

const Routes = () => {
    return (
        <>
            <Route path='/new' component={New}></Route>
            <Route path='/draft' component={Draft}></Route>
            <Route path='/template' component={Template}></Route>
            <Route path='/sent' component={Sent}></Route>
            <Route path='/settings' component={Settings}></Route>
        </>
    )
}

export default Routes
