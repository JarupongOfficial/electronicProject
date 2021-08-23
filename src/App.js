import Nav from 'react-bootstrap/Nav'
import NavBar from 'react-bootstrap/NavBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import CreateOrder from './component/create-order-component';
import EditOrder from './component/edit-order-component';
import ShowOrder from './component/show-order-component';

function App() {
  return (
    <Router>
      <div className="App">

        <NavBar bg="dark" variant="dark">
          <Container>
            <NavBar.Brand>

              <Link to={"/create-order"} className="nav-link">
                React MERN stack CRUD
              </Link>
            </NavBar.Brand>
            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-order"} className="nav-link">
                  Create Order
                </Link>
              </Nav>

              <Nav>
                <Link to={"/show-order"} className="nav-link">
                  Show Order
                </Link>
              </Nav>
            </Nav>

          </Container>
        </NavBar>


        <Container>
          <Row>
            <Col md="12">

              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={CreateOrder} />
                  <Route path="/create-order" component={CreateOrder} />
                  <Route path="/edit-order/:id" component={EditOrder} />
                  <Route exact path="/show-order" component={ShowOrder} />
                </Switch>
              </div>

            </Col>
          </Row>
        </Container>

      </div>
    </Router>
  );
}

export default App;

