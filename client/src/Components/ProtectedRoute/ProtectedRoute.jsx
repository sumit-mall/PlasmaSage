// src/components/ProtectedRoute.jsx
import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { Route } from 'react-router-dom';
import Loading from '../Loading/Loading';

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    {...args}
  />
);

export default ProtectedRoute;
