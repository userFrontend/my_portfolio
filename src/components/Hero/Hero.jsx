import React, { useState } from 'react'
import BoxObject from '../Object'
import './Hero.css'

const Hero = () => {
  const [glbUrl, setGlbUrl] = useState(JSON.parse(localStorage.getItem("car")) || '/bmw.glb')
  const urls = [
    '/bmw.glb',
    '/bmw_m6.glb',
    '/audi.glb',
    '/hoonicorn.glb',
    '/lambo.glb',
    '/lamborghini_aventador.glb',
    '/lamborghini_venevo.glb',
    '/mercedes_amg.glb',
    '/toyota_gt86.glb',
    '/toyota_mk4.glb',
    '/toyota_supra.glb',
  ]
  const handleImg = (e) => {
    setGlbUrl(e.target.value)
    localStorage.setItem('car', JSON.stringify(e.target.value))
  }
  return (
    <div className="hero">
    <div className="hero-content">
      <div className="container">
      <div className="main">
            <div className="rounding-sec">
                <div className="big-circle">
                    <div className="icon-block">
                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIHDQ_CU0W38ktREqnPwdVlGCdA_e4xbaDK9NrjFOpD2AqdcajDV3c9_R3vp034nrC9eyvMThwY8ifNpmH3_8GMg_SzAsLKcWQeSskaVl8HjVtLWilhcBNwfep0yRxq-Z_klBXoYTVX0BaE39VwJ2a-drZup5i8owkdaZF0-KhCaodrtN2Rii9HPZrdlk/s1600/github.png"
                            alt="" />
                    </div>
                    <div className="icon-block">
                       <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoPvxJtYJq2-7BDn6LGcQ6QsT3Bo0vxkKu8WAOZnqsHIiTtGJqsHHHWlqqYN4iQFlVaqTaq7AFkWbY5Wrqxvk9Se1Wc_rjA7UKZoXHoxqSWXyaTg9aL9RC37H78NTnT4TwePdwqEYwVw8VxtjPoy6eG-f7RTJhX0JCa0lPmpfaz69hJ1ZHI9seBrUuvf4/s64/instagram.png"
                            alt="" />
                    </div>
                    <div className="icon-block">
                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-WWnXxgKNxwqarx8Vr_xpaCcwOQbv7bpFxWXy1o7DCq7jZNiT3CFdAo52AvJol-C-3InAzj6B4isdJVwVCAlUY9jxqgM43wDXrmfsqL4PGr-fsBG0YjcOzwAHFscoDXg3EGlhupxjKRwrMe7Y2bX9VzTc-RY95A03bV1avKnjwJZjh0HKbGZDEa73mPU/s1600/telegram.png"
                            alt="" />
                    </div>
                    <div className="icon-block">
                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiejpFbnjtnjhErKo-66_ATecAMmYtSrLzQYdIRMRAxLHtgMUZKnA6jGJQsTMnrniZmMhTZydWkR-l2cpZcGEBGlI4Ptl9ogR-NSPF2wNO5FQdMlL_xaGHQfPnSRIh0Lg4JX0PJLjg9p-tAL9Y8qFbbuGIW3YoolXiMja2qujyDjcFPYGzsPu-RyHle2Jc/s1600/youtube.png" alt="" />
                    </div>
                </div>
                <div className="images">
                    <BoxObject src={glbUrl}/>
                </div>
                <select style={{outline: 'none', margin: '50px 100px', borderRadius:'10px', padding:'5px' }} onChange={handleImg}>
                  {glbUrl &&  <option selected value={glbUrl}>{glbUrl.slice(1).split('.glb')}</option>}
                  {urls?.map(url => {
                    if(url !== glbUrl){
                      return <option key={url} value={url}>{url.slice(1).split('.glb')}</option>
                    }
                  })}
                </select>
            </div>
            <div className="detail">
                <h3>Hello, I'm</h3>
                <h1><span style={{color:"#f9532d"}}>Ravshanov</span> Miraziz</h1>
                <p>I'm a professional Web Developer. Our Main Goal to help & Satisficed the Local & Global Clients by web development solutions</p>
                <button>Contact Us</button>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero