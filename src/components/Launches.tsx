import React, { useState, useEffect } from "react"
import { fetchData } from "../api/fetchData"
import ShipImages from "./ShipsImages"
import * as types from "../types/types"
import {TextStyle} from "../Style/ShipsStyle"

const Launches: React.FC = () => {

    const [launches, setLaunches] = useState<types.Launch[] | undefined | null>([])
    const textStyles = TextStyle()

    useEffect(()=> {const getData = async () => {
        const data = await fetchData();
        setLaunches(data)
        
    }
    getData()}, [])
    
    let show : any= <p>"Content is not ready"</p>    
     if(launches!== null && launches !== undefined && launches.length > 0 ) {
         show = Object.values(launches).map(launch => {
             
             return <div key={launch.id}>
                 <p className={textStyles.text}>{launch.mission_name}</p>
                 <ShipImages ships={[...launch.ships]}/>
             </div>
         })
     }

    return <div>{show}</div>
}

export default Launches;