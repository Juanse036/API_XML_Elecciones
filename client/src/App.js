import {Fragment} from 'react'
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import { TablaRoutes } from './components/routing/TablaRoutes';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store = {store}>
      <Router>
        <Fragment>
          <Navbar />
          <TablaRoutes/>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
