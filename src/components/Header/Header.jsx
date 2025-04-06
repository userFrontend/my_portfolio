import React from 'react'
import './Header.css'

const Header = ({scrollTo, progress, home, project, contact}) => {
  return (<>
        <header>
          <div className="container">
                <div className="header-box">
                    <div className="logo">
                      <b onClick={() => {scrollTo(home.current);}} className='logo_img'>
                          Developer.
                      </b>
                    </div>
                    <nav className='navbar'>
                      <ul className="nav-list">
                          <li className="nav-item">
                            <b onClick={() => {scrollTo(home.current);}} className='nav-link'>Home</b>
                          </li>
                          <li className="nav-item">
                            <b onClick={() => {scrollTo(progress.current);}} className='nav-link'>About</b>
                          </li>
                          <li className="nav-item">
                            <b onClick={() => {scrollTo(project.current);}} className='nav-link'>Projects</b>
                          </li>
                          <li className="nav-item">
                            <b onClick={() => {scrollTo(contact.current);}} className='nav-link'>Contact</b>
                          </li>
                      </ul>
                    </nav>
                </div>
          </div>
        </header>
        </>
  )
}

export default Header