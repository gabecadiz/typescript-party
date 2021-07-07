import React, {useState} from "react";
import { IState as IProps} from "../App";

interface AddToListProps {
  people: IProps["people"]
  setPeople: React.Dispatch<React.SetStateAction<IProps["people"]>>
}
const AddToList:React.FC<AddToListProps> = ({people, setPeople}) => {

  const [input,setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: ""
  })

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> ): void => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }

  const handleClick = ():void => {
    if(
      !input.name || !input.age || !input.img
    ) {
      return;
    }

    setPeople([...people, 
      {
        name: input.name, 
        age: parseInt(input.age), 
        url: input.img, 
        note: input.note
      }
    ])

    setInput({
      name: "",
      age: "",
      note: "",
      img: ""
    })
  }
  
  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.img}
        onChange={handleChange}
        name="img"

      />
      <textarea
        placeholder="Notes"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
        name="note"
      />

      <button
        className="btn-add-to-list"
        onClick={handleClick}
      >
        Add To List
      </button>
    </div>
  )
};

export default AddToList;