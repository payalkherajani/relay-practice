import {
    usePreloadedQuery,
} from 'react-relay/hooks';
import { RepositoryNameQuery } from '../queries/AppQuery';



const Home = (props: any) => {

    const data: any = usePreloadedQuery(RepositoryNameQuery, props.pr);

    return (

        <div className="App">
            <header className="App-header">
                <p>{data?.viewer?.repositories?.nodes[0]?.name}</p>
            </header>
        </div>

    );
};

export default Home;