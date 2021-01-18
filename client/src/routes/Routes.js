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
            {/* <Route path='/new' component={New}></Route> */}
            <Route path='/ee/draft' component={Draft}></Route>
            <Route path='/ee/template' component={Template}></Route>
            <Route path='/ee/sent' component={Sent}></Route>
            <Route path='/ee/settings' component={Settings}></Route>
            <Route path='/ee/editor/:state'>
                <Editor />
            </Route>
            <Route path='/ee/excel' component={Excel}></Route>
            <Route path='/ee/preview' component={Preview}></Route>
            <Route path='/ee/send' component={Send}></Route>
        </>
    )
}

export default Routes
