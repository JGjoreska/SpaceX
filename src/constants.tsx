export const GRAPHQL_API = "https://api.spacex.land/graphql/"

export const GET_IMAGES =`
{
    launchesPast(limit: 10) {
      mission_name
      id
      ships {
        name
        image
      }
    }
  } 
`;