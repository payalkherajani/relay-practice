import { graphql } from 'babel-plugin-relay/macro';

export const RepositoryNameQuery = graphql`
query AppQuery{
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
