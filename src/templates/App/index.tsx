import React from 'react';

import { Container, Content } from './styles';

import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';

const App: React.FC = ({ children }) => {
  
  return (
    <Container>
      <Topbar />
      <Content>
        <Sidebar />
        {children}
      </Content>
    </Container>
  );
};

export default App;
