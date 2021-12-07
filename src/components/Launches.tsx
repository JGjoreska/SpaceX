import * as Constants from '../constants' 
import React, { useEffect, useState} from "react";
import axios from "axios";
import ShipsImages from './ShipsImages'
import {TextStyle} from "../Style/ShipsStyle"

interface Launch {
  mission_name: string,
  id: string,
  ships: []
}

const Launches:React.FC = () => {
  const [launches, setLaunches] = useState<Launch[] | undefined | null>([])
  const [content, setContent] = useState(false);
  const textStyles = TextStyle()
  
    useEffect(()=> {
        const fetchData = async () => {
            const queryResult = await axios.post(
                Constants.GRAPHQL_API, {
                    query: Constants.GET_IMAGES
                }
            )
            const result = queryResult.data.data.launchesPast;
            setLaunches(result)
            setContent(true)
        }
        fetchData();
    }, [])

  let show = <p>"Content is not ready"</p>
  if (content){
    if(launches !== null){
      if(launches !== undefined){
        show = 
        <ul>{
          // @ts-ignore: Object is possibly 'null'.
          Object.values(launches).map(launch => {
            return <li key={launch.id}>
                <p className={textStyles.textStyle}>{launch.mission_name}</p>
                <ShipsImages ships={[...launch.ships]} />
            </li>
          })}
        </ul>
      }
    } 
  } 
  
  return (
  <div>
    {show}
  </div>
  );
};

export default Launches;