import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
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
            <Route path='/editor' component={Editor}></Route>
            <Route path='/excel' component={Excel}></Route>
            <Route path='/preview' component={Preview}></Route>
            <Route path='/send' component={Send}></Route>
        </>
    )
}

export default Routes
