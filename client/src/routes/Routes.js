import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import App from '../containers/App'
import MailTester from '../containers/TestMail'
import RichMailEditor from '../components/RichMailEditor'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={App}></Route>
                <Route path='/test' render={MailTester}></Route>
                <Route path='/rich' component={RichMailEditor}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
