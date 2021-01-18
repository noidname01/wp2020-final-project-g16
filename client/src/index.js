import React from 'react'
import ReactDOM from 'react-dom'
// import Routes from './routes/Routes'
import App from './containers/App'
import Login from './containers/Login'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDataSheet from 'react-datasheet'
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-datasheet/lib/react-datasheet.css'

// ======== Apollo Client (GrqphQL) ========
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { cache } from 'webpack'
// ======== Apollo Client (GrqphQL) ========

const client = new ApolloClient({
    uri: 'http://localhost:5000', //temp
    cache: new InMemoryCache(),
})

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Outapp></Outapp>
        </Switch>
    </BrowserRouter>,
    document.getElementById('app')
)
