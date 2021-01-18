import React from 'react'
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
            true ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location },
                    }}
                />
            )
        }
    />
)

const Outapp = () => {
    return (
        <>
            <Route path='/welcome' component={Welcome}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
            <PrivateRoute path='/ee' component={App}></PrivateRoute>
        </>
    )
}

export default Outapp
