import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Welcome from '../containers/Welcome'
import Login from '../containers/Login'
import Register from '../containers/Register'
import App from '../containers/App'

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
