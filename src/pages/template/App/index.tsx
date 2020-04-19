import React from 'react';

import { Container, Content } from './styles';

import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';

const App: React.FunctionComponent = ({ children }) => {
  
  return (
    <Container>
      <Sidebar />
      <Content>
        <Topbar />
        {children}
      </Content>
    </Container>
  );
};

export default App;
