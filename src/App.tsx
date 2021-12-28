import React, { Suspense } from 'react';
import RelayEnvironment from './RelayEnvironment';
import {
  RelayEnvironmentProvider,
  loadQuery
} from 'react-relay/hooks';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import { RepositoryNameQuery } from './queries/AppQuery';


const pr: any = loadQuery(RelayEnvironment, RepositoryNameQuery, {});

function App() {
  return (
    <>
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <Suspense fallback={'Loading...'}>
          <Router>
            <Routes>
              <Route path="/" element={<Home pr={pr} />} />
            </Routes>
          </Router>
        </Suspense>
      </RelayEnvironmentProvider>

    </>
  );
}

export default App;
