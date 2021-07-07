import React from "react";
import { IState as ListProps} from "../App";

const List: React.FC<ListProps> = ({people}) => {

  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="list">
        <div className="list-header">
          <img src={person.url} alt={person.name} className="list-img" />
          <h2>{person.name}</h2>
        </div>
        <p>{person.age} years old</p>
        <p className="list-note">{person.note}</p>
      </li>
      )
    })
  }
  return (
    <ul>
      {renderList()}
    </ul>
  )
}

export default List;