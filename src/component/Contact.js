import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
const Contact = () => {
  return (
    <div>
      <nav className="navBar">
      
      <Link to ="/" className="link" > Home page</Link>
      </nav>
      <div class="col">
                    <h3 style={{color:"darkorange"}}>Personal Details</h3>
                    <ul>

                        <li>
                            <strong style={{color:"darkBlue"}}>Phone -- </strong>
                            +91 8120903008
                        </li>
                        <li>
                            <strong style={{color:"darkBlue"}}>Email -- </strong>
                            mandloirahul61@gmail.com
                        </li>
                        <li>
                            <strong style={{color:"darkBlue"}}>GitHub -- </strong>
                            rahulmandloi14
                        </li>

                        <li>
                            <strong style={{color:"darkBlue"}}>Address -- </strong>
                            Indore , Madhya Pradesh , INDIA (452018)
                        </li>

                        <li>
                            <strong style={{color:"darkBlue"}}>Career in -- </strong>
                            <span> &nbsp; INFORMATION &nbsp; TECHNOLOGY &nbsp; </span>
                        </li>
                    </ul>
                </div>
                <Footer/>
    </div>
  )
}

export default Contact
