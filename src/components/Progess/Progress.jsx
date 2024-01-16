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
                <b style={{fontSize:'16px'}}>90%</b>
                <br />
                HTML
            </span>
        </div>
        <div className="progressbar">
            <svg className="progressbar__svg">
            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-css shadow-css"> </circle>
            </svg>
            <span className="progressbar__text shadow-css">
                <b style={{fontSize:'16px'}}>85%</b>
                <br />
                CSS
            </span>
        </div>
        <div className="progressbar">
            <svg className="progressbar__svg">
            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-scss shadow-scss"> </circle>
            </svg>
            <span className="progressbar__text shadow-scss">
                <b style={{fontSize:'16px'}}>80%</b>
                <br />
                SCSS
            </span>
        </div>
        <div className="progressbar">
            <svg className="progressbar__svg">
            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-js shadow-js"> </circle>
            </svg>
            <span className="progressbar__text shadow-js">
                <b style={{fontSize:'16px'}}>70%</b>
                <br />
                JavaScript
            </span>
        </div>
        <div className="progressbar">
            <svg className="progressbar__svg">
            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-node shadow-node"> </circle>
            </svg>
            <span className="progressbar__text shadow-node">
                <b style={{fontSize:'16px'}}>80%</b>
                <br />
                Node.js
            </span>
        </div>
        <div className="progressbar">
            <svg className="progressbar__svg">
            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-react shadow-react"> </circle>
            </svg>
            <span className="progressbar__text shadow-react">
                <b style={{fontSize:'16px'}}>90%</b>
                <br />
                React.js
            </span>
        </div>
        <div className="progressbar">
            <svg className="progressbar__svg">
            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-angular shadow-angular"> </circle>
            </svg>
            <span className="progressbar__text shadow-angular">
                <b style={{fontSize:'16px'}}>10%</b>
                <br />
                Angular.js
            </span>
        </div>
        <div className="progressbar">
            <svg className="progressbar__svg">
            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-vue shadow-vue"> </circle>
            </svg>
            <span className="progressbar__text shadow-vue">
                <b style={{fontSize:'16px'}}>25%</b>
                <br />
                Vue.js
            </span>
        </div>
        <div className="progressbar">
            <svg className="progressbar__svg">
            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-ts shadow-ts"> </circle>
            </svg>
            <span className="progressbar__text shadow-ts">
                <b style={{fontSize:'16px'}}>55%</b>
                <br />
                TypeScript
            </span>
        </div>
        <div className="progressbar">
            <svg className="progressbar__svg">
            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-web shadow-web"> </circle>
            </svg>
            <span className="progressbar__text shadow-web">
                <b style={{fontSize:'16px'}}>15%</b>
                <br />
                Web3.js
            </span>
        </div>
        </div>
  </div>
  
  
  )
}

export default Progress