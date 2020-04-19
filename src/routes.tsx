import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import App from './pages/template/App';
import home from './pages/template/home';

// import Dashboard from './pages/Dashboard';

interface IRouter {
  base: string;
  Template: React.ElementType;
  routes: IRoute[]
}

interface IRoute {
  path: string;
  exact?: boolean;
  component: React.ComponentClass | React.FC;
}

const routers: IRouter[] = [
  {
    base: '',
    Template: home,
    routes: [
      {
        path: '/',
        exact: true,
        component: () => <div>Home</div>
      },
      {
        path: '/login',
        component: () => <div>Login</div>
      }
    ]
  },
  {
    base: '/app',
    Template: App,
    routes: [
      {
        path: '/dashboard',
        component: () => <div>Dashboard</div>
      },
      {
        path: '/search',
        component: () => <div>Procurar</div>
      },
      {
        path: '/chat',
        component: () => <div>Chat</div>
      },
      {
        path: '/settings',
        component: () => <div>Configurações</div>
      },
    ]
  }
];

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {routers.map(({ routes, Template, base }) => 
          routes.map((route, i) => (
            <Route 
              key={i} 
              exact={route.exact || false} 
              path={`${base}${route.path}`}
            >
              <Template>
                <route.component />
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
