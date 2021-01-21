import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
// import Routes from './routes/Routes'
import App from './containers/App'
import Outapp from './containers/Outapp'
import {
    Route,
    Switch,
    BrowserRouter,
    Redirect,
    withRouter,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDataSheet from 'react-datasheet'
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-datasheet/lib/react-datasheet.css'
import './css/main.css'
import Welcome from './containers/Welcome'
import Login from './containers/Login'
import Register from './containers/Register'

// ======== Apollo Client (GrqphQL) ========
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
// ======== Apollo Client (GrqphQL) ========

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql', //temp
    cache: new InMemoryCache(),
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Switch>
                <Outapp></Outapp>
            </Switch>
        </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('app')
)
