import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';


const { Suspense } = React;

const RepositoryNameQuery = graphql`
  query AppRepositoriesQuery {
    viewer { 
			login
			repositories(last: 5){
			  nodes{
				name,
				descriptionHTML
			  }
			}
		  }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, RepositoryNameQuery, {});


function App(props: any) {

  const data: any = usePreloadedQuery(RepositoryNameQuery, props?.preloadedQuery);

  return (
    <div className="App">
      <header className="App-header">
        <p>{data?.viewer?.repositories?.nodes[0]?.name}</p>
      </header>
    </div>
  );
}

function AppRoot(props: any) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
