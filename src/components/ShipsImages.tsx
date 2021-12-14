import React from "react";
import Image from 'material-ui-image'
import {ImageStyle} from "../Style/ShipsStyle"
import * as types from "../types/types"

const ShipsImages: React.FC<types.Props> = (props: types.Props) => {
  const imageStyles = ImageStyle()
  const ship = 
      <ul>{props.ships.map((ship,index) => {
        return <li key={index}>
          <div className={imageStyles.imageSize}>
          <Image src={ship.image} alt={ship.name} />
          </div>
        </li>})}
      </ul> 
  return (
    <div>{ship}
    </div>
  )
}

export default ShipsImages;

