
export interface Launch {
    mission_name: string,
    id: string,
    ships: Ship[]
}

export interface Ship {
  name: string
  image: string
}

export interface Props {
  ships: Ship[]
}