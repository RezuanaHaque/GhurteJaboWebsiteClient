import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user,loading}=UseAuth()
    if(loading){
        return <div><Spinner style={{marginLeft:"750px"}}  animation="border" /></div>
    }
    return (
        <Route
          {...rest}
          render={({ location }) =>
            user.email ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
    }

export default PrivateRoute;