import axios from 'axios'
import * as Constants from '../constants'

export const fetchData = async () => {
    try{
        const queryResult = await axios.post(
            Constants.GRAPHQL_API, {
                query: 
                    Constants.GET_LAUNCHES
            }
        )
        const result = queryResult.data.data.launchesPast;
        return result
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error)
        } else {
            console.log("Unexpected error")
        }
    }
}