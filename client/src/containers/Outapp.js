import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Welcome from './Welcome'
import Login from './Login'
import Register from './Register'
import App from './App'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            localStorage.getItem('auth') === 'true' ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                    }}
                />
            )
        }
    />
)

const Outapp = () => {
    return (
        <>
            <Route exact path='/' component={Welcome}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
            <PrivateRoute path='/ee' component={App}></PrivateRoute>
        </>
    )
}

export default Outapp
