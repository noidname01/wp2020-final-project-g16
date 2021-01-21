import React from 'react'
import ReactDOM from 'react-dom'
// import Routes from './routes/Routes'
import Outapp from './containers/Outapp'
import { Switch, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-datasheet/lib/react-datasheet.css'
import './css/main.css'
// import './css/bootstrap.css'

import { rootPath } from './config/pathConfig'

// ======== Apollo Client (GrqphQL) ========
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
// ======== Apollo Client (GrqphQL) ========

const client = new ApolloClient({
    uri: rootPath + 'graphql', //temp
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
