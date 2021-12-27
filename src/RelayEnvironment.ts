import {
    Environment,
    Network,
    RecordSource,
    RequestParameters,
    Store,
    Variables
} from 'relay-runtime';


const fetchRelay = async (query: RequestParameters, variables: Variables) => {

    console.log(query, variables, "query & variables");

    const token = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;

    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            Authorization: `bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: query.text,
            variables,
        }),
    });
    const jsonData = await response.json();
    console.log(jsonData, "jsonData");
    return jsonData;
};


export default new Environment({
    network: Network.create(fetchRelay),
    store: new Store(new RecordSource()),
});