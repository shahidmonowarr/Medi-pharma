import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Services from './Pages/Home/Services/Services';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Doctors from './Pages/Doctors/Doctors';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/serviceDetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
