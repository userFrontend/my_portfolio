import React from 'react'
import './Progress.css'


const Progress = () => {
  return (
    <div className="progress">
        <div className="container__progressbars">
        <div className="progressbar">
            <svg className="progressbar__svg">
            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-html shadow-html"> </circle>
            </svg>
            <span className="progressbar__text shadow-html">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50"/> 
            </span>
        </div>
        <div className="progressbar">
            <svg className="progressbar__svg">
            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-css shadow-css"> </circle>
            </svg>
            <span className="progressbar__text shadow-css">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50"/> 
            </span>
        </div>
        <div className="progressbar">
            <svg className="progressbar__svg">
            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-js shadow-js"> </circle>
            </svg>
            <span className="progressbar__text shadow-js">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
            </span>
        </div>
        <div className="progressbar">
            <svg className="progressbar__svg">
            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-react shadow-react"> </circle>
            </svg>
            <span className="progressbar__text shadow-react">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="50" height="50"/> 
            </span>
        </div>
        <div className="progressbar">
            <svg className="progressbar__svg">
            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-node shadow-node"> </circle>
            </svg>
            <span className="progressbar__text shadow-node">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="50" height="50"/> 
            </span>
        </div>
        <div className="progressbar">
            <svg className="progressbar__svg">
            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-node shadow-node"> </circle>
            </svg>
            <span className="progressbar__text shadow-node">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="50" height="50"/>
            </span>
        </div>
        <div className="progressbar">
            <svg className="progressbar__svg">
            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-ts shadow-ts"> </circle>
            </svg>
            <span className="progressbar__text shadow-ts">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> 
            </span>
        </div>
        <div className="progressbar">
            <svg className="progressbar__svg">
            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-scss shadow-scss"> </circle>
            </svg>
            <span className="progressbar__text shadow-scss">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="60" height="60"/>
            </span>
        </div>
        <div className="progressbar">
            <svg className="progressbar__svg">
            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-html shadow-html"> </circle>
            </svg>
            <span className="progressbar__text shadow-html">
                <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="50" height="50"/> 
            </span>
        </div>
        <div className="progressbar">
            <svg className="progressbar__svg">
            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-angular shadow-angular"> </circle>
            </svg>
            <span className="progressbar__text shadow-angular">
                <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="50" height="50"/> 
            </span>
        </div>
        </div>
  </div>
  
  
  )
}

export default Progress