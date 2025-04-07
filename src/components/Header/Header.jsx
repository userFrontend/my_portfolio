import React from 'react'
import './Header.css'

const Header = ({scrollTo, progress, home, project, contact}) => {
  return (<>
        <header>
          <div className="container">
                <div className="header-box">
                    <div className="logo">
                      <a onClick={() => {scrollTo(home.current);}} className='logo_img'>
                        <span style={{color:"#f9532d"}}>Rav</span>Mira
                      </a>
                    </div>
                    <nav className='header-nav'>
                      <ul className="nav-list">
                          <li className="nav-item">
                            <a onClick={() => {scrollTo(home.current);}} className='nav-link'>Home</a>
                          </li>
                          <li className="nav-item">
                            <a onClick={() => {scrollTo(progress.current);}} className='nav-link'>About</a>
                          </li>
                          <li className="nav-item">
                            <a onClick={() => {scrollTo(project.current);}} className='nav-link'>Projects</a>
                          </li>
                          <li className="nav-item">
                            <a onClick={() => {scrollTo(contact.current);}} className='nav-link'>Contact</a>
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