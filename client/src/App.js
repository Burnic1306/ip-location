import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './components/Header';
import IpLocationCard from './components/IpLocationCard';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container>
        <IpLocationCard />
      </Container>
    </React.Fragment>
  );
}

export default App;
