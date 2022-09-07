import {Fragment} from 'react'
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import { TablaRoutes } from './components/routing/TablaRoutes';
import Footer from './components/footer/Footer'
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store = {store}>
      <Router basename='/'>
        <Fragment>
          <Navbar />
          <TablaRoutes/>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
