import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({projectCard}) => {
  return (
    <div className='cards'>
        <div className="canvas-wrapper">
            <div className="canvas">
                <div className="canvas_border">
                    <svg>
                        <defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopColor:"rgb(253,137,68)", stopOpacity: "1"}}></stop><stop offset="100%" style={{stopColor:"rgb(153,75,23)", stopOpacity: "1"}}></stop></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#D34F48"></stop><stop offset="100%" stopColor="#772522"></stop></linearGradient></defs>
                        <rect id="rect-grad" className="rect-gradient" fill="none" stroke="url(#grad-orange)" strokeLinecap="square" strokeWidth="4" strokeMiterlimit="30" width="100%" height="100%"></rect>
                    </svg>
                </div>
                <div className="canvas_img-wrapper">
                    <img className="canvas_img" src={`${projectCard?.src}`} alt=""/>
                </div>
                <div className="canvas_copy canvas_copy--left">
                    <span className="canvas_copy_subtitle">{projectCard?.js}</span>
                    <strong className="canvas_copy_title">{projectCard?.title}</strong>
                    <strong className="canvas_copy_title">{projectCard?.title_end}</strong>
                    <Link to={projectCard.link}><button className="canvas_copy_details">Live Demo</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card