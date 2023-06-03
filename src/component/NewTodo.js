import { React, useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BackspaceIcon from '@mui/icons-material/Backspace';
import "./new.css"
import {Link } from "react-router-dom";



// import Icon from "../pages/icon/index.jsx"
// import "./Todolist.css";
// import { FaBeer } from "react-icons/fa";

const NewTodo = () => {
  const [activity, setActivity] = useState("")
  const [listData, setListData] = useState([])

  useEffect(() => {
    console.log(listData)

  }, [listData])


  function updated() {
    setListData([...listData, activity])

    console.log([...listData]);
    onSubmit()
  }
  function remove(i) {
    const updatedListData = listData.filter((elem, id) => {
      return i != id
    })
    setListData(updatedListData)
  }
  function removeAll() {
    setListData([])
  }
  const onInput=(e)=>setActivity(e.target.value)
  function onSubmit(){
    setActivity("")
  }
  return (
    <>
      <nav>
      
        <div className='navBar'>
           
          <Link to ="/" className='link'>Home</Link>
          <Link to ="/about" className='link'>About me</Link>
          <Link to ="/contact" className='link'>Contact me</Link>
  
        </div>
      </nav>
      <div className="container">

        <h1 className='heading'>Todo List</h1>
        
        <input placeholder='add activity' className='input' value={activity}  onInput={onInput}
      />
        <button onClick={updated}>Add</button>

        <div>{listData !== [] && listData.map((value, i) => {
          return (
            <>
              <p key={i}>
                <div>{value}
        
                  <button onClick={() => remove(i)} className='delete'><BackspaceIcon fontSize='small'/></button>
                </div>
              </p>

            </>
          )
        })}
        </div>
        {listData.length >= 1 && <button onClick={removeAll}>remove All</button>}
        </div>


      <div className='footer'><GitHubIcon />                       
            <footer>2023 by rahul-devops creation </footer></div>

    </>
  )
}
export default NewTodo

