import React, { useState } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Footer = () => {
  const [send, setSend] = useState('');
  const [status, setStatus] = useState(''); // 'success', 'error', ''

  const sendSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    setSend('Sending...');
    try {
      const res = await axios.post(
        `https://olx-server-omega.vercel.app/api/message/me`,
        data
      );
      setSend('Sended 😊');
      setStatus('success');
      e.target.reset();

      setTimeout(() => {
        setSend('');
        setStatus('');
      }, 2000);
    } catch (error) {
      setSend('Ops not sent... 🤷‍♂️');
      setStatus('error');

      setTimeout(() => {
        setSend('');
        setStatus('');
      }, 2000);
    }
  };
  return (
    <div className='container'>
        <h2 className='title' style={{marginBottom: '100px'}}><span></span>Contact<span> </span></h2>
        <div className="footer-about">
              <div className="">
              <div className="logo">
                <a className='logo_img'>
                  <span style={{color:"#f9532d"}}>Rav</span>Mira
                </a>
              </div>
                <div style={{padding: '20px 0'}} className="div-about">
                  <Link to='tel:+998934905134'><span style={{color:"#f9532d"}}>Tel:</span> +998934905134</Link> <br />
                  <Link to='tel:+998930241566'><span style={{color:"#f9532d"}}>Tel:</span> +998330241566</Link> <br />
                  <Link to='mailto:aba06096@gmail.com' rel="noopener noreferrer"><span style={{color:"#f9532d"}}>Email: </span> aba06096@gmail.com</Link>
                  <div className="footer-input">
                    <div className="input-icon"><i className="fa-solid fa-arrow-right"></i></div>
                    <div className='footer-img' style={{display: 'flex'}}>
                      <Link target='_blank' to="https://github.com/userFrontend" className="img">
                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIHDQ_CU0W38ktREqnPwdVlGCdA_e4xbaDK9NrjFOpD2AqdcajDV3c9_R3vp034nrC9eyvMThwY8ifNpmH3_8GMg_SzAsLKcWQeSskaVl8HjVtLWilhcBNwfep0yRxq-Z_klBXoYTVX0BaE39VwJ2a-drZup5i8owkdaZF0-KhCaodrtN2Rii9HPZrdlk/s1600/github.png" alt='' />
                      </Link>
                      <Link target='_blank' to='https://instagram.com/_official_developer' className="img">
                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoPvxJtYJq2-7BDn6LGcQ6QsT3Bo0vxkKu8WAOZnqsHIiTtGJqsHHHWlqqYN4iQFlVaqTaq7AFkWbY5Wrqxvk9Se1Wc_rjA7UKZoXHoxqSWXyaTg9aL9RC37H78NTnT4TwePdwqEYwVw8VxtjPoy6eG-f7RTJhX0JCa0lPmpfaz69hJ1ZHI9seBrUuvf4/s64/instagram.png" alt='' />
                      </Link>
                      <Link target='_blank' to='https://t.me/Frontend_deveIoper' className="img">
                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-WWnXxgKNxwqarx8Vr_xpaCcwOQbv7bpFxWXy1o7DCq7jZNiT3CFdAo52AvJol-C-3InAzj6B4isdJVwVCAlUY9jxqgM43wDXrmfsqL4PGr-fsBG0YjcOzwAHFscoDXg3EGlhupxjKRwrMe7Y2bX9VzTc-RY95A03bV1avKnjwJZjh0HKbGZDEa73mPU/s1600/telegram.png" alt='' />
                      </Link>
                      <div className="img">
                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiejpFbnjtnjhErKo-66_ATecAMmYtSrLzQYdIRMRAxLHtgMUZKnA6jGJQsTMnrniZmMhTZydWkR-l2cpZcGEBGlI4Ptl9ogR-NSPF2wNO5FQdMlL_xaGHQfPnSRIh0Lg4JX0PJLjg9p-tAL9Y8qFbbuGIW3YoolXiMja2qujyDjcFPYGzsPu-RyHle2Jc/s1600/youtube.png" alt='' />
                      </div>
                    </div>
                  </div>      
                </div>
              </div>
              <form className="footer-form" onSubmit={sendSubmit}>
                <input name='name' type="text" placeholder='What is your name?' required minLength={3}/>
                <input name='contact' type="text" placeholder='Your contacts: (Phone/Email/Telegram)' required minLength={5}/>
                <textarea name="content" placeholder='How can I help?' required minLength={30}></textarea>
                <button
                disabled={send}
                    type="submit"
                    style={{
                      backgroundColor:
                        status === "success" ? "green" : status === "error" ? "red" : "#f9532d",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {send || 'Send to Me'}
                </button>
              </form>
        </div>
        <div style={{textAlign: 'center', padding: '30px 0'}}>
          <h6>
            With my Hobbi 
            <b> © 2023 Project Leadership</b>
          </h6>
        </div>
    </div>
  )
}

export default Footer