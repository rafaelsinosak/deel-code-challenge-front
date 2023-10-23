import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ContractList from './components/ContractList';
import UnpaidJobList from './components/UnpaidJobs';
import BestProfession from './components/BestProfession';
import BestClients from './components/BestClients';
import './App.css';
import ContractById from './components/ContractById';
import JobPayment from './components/JobPayment';

function App() {
  return (
    <Router>
      <div className="App">
        <p>HomeWork FrontEnd</p>
        <nav>
          <ul>
            <li>
              <Link to="contractbyid">Contract by ID</Link>
            </li>
            <li>
              <Link to="contracts">Contract List</Link>
            </li>
            <li>
              <Link to="jobs/unpaid-jobs">Unpaid Jobs</Link>
            </li>
            <li>
              <Link to="admin/best-profession">Best Profession</Link>
            </li>
            <li>
              <Link to="admin/best-clients">Best Clients</Link>
            </li>
            <li>
              <Link to="jobs/1/pay">Job Payment</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/contractbyid" component={ContractById} />
          <Route exact path="/contracts" component={ContractList} />
          <Route exact path="/jobs/unpaid" component={UnpaidJobList} />
          <Route exact path="/admin/best-profession" component={BestProfession} />
          <Route exact path="/admin/best-clients" component={BestClients} />
          <Route exact path="/jobs/:jobId/pay" component={JobPayment} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;