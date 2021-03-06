import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from './Components/Navigation/Navigation';
import Main from './Components/Main/Main';
import { useState } from 'react';
import AuthProvider from './context/AuthProvider';

function App() {
  const [toggle, setToggle] = useState(false);
  
  return (
    <div className="App">
      <AuthProvider>
        <div className="main_body">
          <Container>
            <Row>
              <Col className="main_body_sub" sm={3} md={3} lg={3} xl={3}>
                <Navigation setToggle={setToggle} toggle={toggle}></Navigation>
              </Col>
              <Col className="main_body_sub" sm={9} md={9} lg={9} xl={9}>
                <Main toggle={toggle}></Main>
              </Col>
            </Row>
          </Container>
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
