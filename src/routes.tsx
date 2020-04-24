import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import App from './templates/App';
import home from './templates/home';

import Dashboard from './pages/Dashboard';

interface IRouter {
  base: string;
  Template: React.ComponentClass | React.FC;
  routes: IRoute[]
}

interface IRoute {
  path: string;
  exact?: boolean;
  Component: React.ComponentClass | React.FC;
}

const routers: IRouter[] = [
  {
    base: '',
    Template: home,
    routes: [
      {
        path: '/',
        exact: true,
        Component: () => <div>Home</div>
      },
      {
        path: '/login',
        Component: () => <div>Login</div>
      }
    ]
  },
  {
    base: '/app',
    Template: App,
    routes: [
      {
        path: '/dashboard',
        Component: Dashboard
      },
      {
        path: '/search',
        Component: () => <div>Procurar</div>
      },
      {
        path: '/chat',
        Component: () => <div>Chat</div>
      },
      {
        path: '/settings',
        Component: () => <div>Configurações</div>
      },
    ]
  }
];

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {routers.map(({ routes, Template, base }) => 
          routes.map(({ exact, path, Component }, i) => (
            <Route 
              key={i} 
              exact={exact || false} 
              path={`${base}${path}`}
            >
              <Template>
                <Component />
              </Template>
            </Route>
          ))
        )}
        <Route exact path="/app">
          <Redirect to="/app/dashboard" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
