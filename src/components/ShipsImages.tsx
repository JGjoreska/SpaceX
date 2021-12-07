import React from "react";
import Image from 'material-ui-image'
import {ImageStyle} from "../Style/ShipsStyle"

interface Ship {
  name: string
  image: string
}

interface Props {
  ships: Ship[]
}

const ShipsImages: React.FC<Props> = (props: Props) => {
  const imageStyles = ImageStyle()
  return (
    <div>
      <ul>{props.ships.map((ship,index) => {
        return <li key={index}>
          <div className={imageStyles.imageSize}>
          <Image src={ship.image} alt={ship.name} />
          </div>
        </li>})}
      </ul> 
    </div>
  )
}

export default ShipsImages;

