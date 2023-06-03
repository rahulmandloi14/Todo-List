import React from 'react'
import { Link } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from "../RAHUL.jpg"
import "./new.css"

const About = () => {
  return (
    <>
       <nav>
        <div className='navBar'>
        
          <Link to ="/" className='link'>Home</Link>
         
          <Link to ="/contact" className='link'>Contact me</Link>
  
        </div>

      </nav>
     

      <div className="aboutFooter" ><GitHubIcon />                       
            <footer>2023 by rahul-devops creation </footer></div>
    </>
  )
}

export default About
