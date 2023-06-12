import React from 'react'
import { Link } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';

import "./new.css"
import Footer from './Footer';

const About = () => {
  return (
    <>
       <nav>
        <div className='navBar'>
        
          <Link to ="/" className='link'>Home</Link>
         
          <Link to ="/contact" className='link'>Contact me</Link>
  
        </div>

      </nav>
      <section id="sobremi" class="sobremi">
        <div class="contenido-seccion">
            
            <p style={{color:"blue"}}>Hello!<br/><span><h1 style={{color:"red"}}>I am Rahul Mandloi</h1></span> </p>
            <p style={{color:"darkblue"}}>
                I'm strong in intuitive problem-solving skills . Passionate about
                implementing and launching new projects . Ability to translate
                business requirements into technical solutions . Looking to start
                the career as an entry-level software engineer with a reputed
                company where I can utilize my superior understanding of the
                domain gained during my Bachelors & continuing in Masters .
                I have excellent Communication skills to convince potential clients and
                customers . Passionate about learning new concepts and possess the ability
                to handle work pressure and customer
                issues professionally . ☺️
            </p>
            <br/>
            <div class="fila">
              
                <div class="col">
                    <h3 style={{color:"darkorange"}}>Personal Details</h3>
                    <ul>

                        <li>
                            <strong>Phone -- </strong>
                            +91 8120903008
                        </li>
                        <li>
                            <strong>Email -- </strong>
                            mandloirahul61@gmail.com
                        </li>
                        <li>
                            <strong>GitHub -- </strong>
                            rahulmandloi14
                        </li>

                        <li>
                            <strong>Address -- </strong>
                            Indore , Madhya Pradesh , INDIA (452018)
                        </li>

                        <li>
                            <strong>Career in -- </strong>
                            <span> &nbsp; INFORMATION &nbsp; TECHNOLOGY &nbsp; </span>
                        </li>
                    </ul>
                </div>

              
            </div>

           
        </div>
    </section>

    <Footer/>
    </>
  )
}

export default About
