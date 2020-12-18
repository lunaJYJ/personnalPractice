import React, {useState} from 'react'
import {Button} from '@material-ui/core';
//useEffect 는 class component 의  componentDidUpate(mount) () 와 비슷.

const Iteration = () => {
  const [names, setNames] = useState([
    {id: 1, text: 'Alphaca'},
    {id: 2, text: 'Owl'},
    {id: 3, text: 'Tiger'}
  ]);

  const [inputText, setInputText] = useState('')
  const [nextId, setNextId] = useState(4);
  
  const newItemAdd = () => {
    let newItem = names.concat({
      id: nextId,
      text : inputText
    })

    console.log(newItem)
    setNames(newItem)
    setInputText('')
    setNextId(nextId+1)
  }

  const itemRemove  = (id) => {
    let afterRemove = names.filter(name => name.id !== id)
    setNames(afterRemove)
  };

  const onChange = (e) => {
    setInputText(e.target.value)
  };

  const nameList = names.map(name=>
    
    <>
    <li key={name.id}>{name.text}</li>
    <Button variant="outlined" color="secondary" onClick={()=>itemRemove(name.id)}>Delete</Button>
    </>
    
    );

  return (
    <>
      <ul>{nameList}</ul>
      <input value={inputText} onChange={onChange}></input>
      <button onClick={newItemAdd}>Add</button>
    </>
  )
}

export default Iteration