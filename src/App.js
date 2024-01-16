import './App.css';
import React, { useEffect, useRef } from 'react'
import Progress from './components/Progess/Progress';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import { data } from './data';
import SlickCarousel from './components/Carousel/Carousel';

function App() {

  const home = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);
  const progress = useRef(null);

  const scrollTo = (ele) => {
    ele.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  
  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (<>
    <Header scrollTo={scrollTo} progress={progress} contact={contact} home={home} project={project}/>
    <main>
      <div className='container'>
        <section id='home' ref={home} style={{paddingTop: '40px'}}>
            <Hero/>
        </section>
        <section id='about' ref={progress}>
            <h2 className='title'>About</h2>
            <Progress />
        </section>
        <section id='project' ref={project}>
          <h2 className='title'><span></span>Projects<span> </span></h2>
            <div className='card-box'>
              <SlickCarousel speed={2000} sm={1} md={1} lg={2} xl={3} fade={false}>
                {data?.map(item => {
                    return <Card key={item.id} projectCard={item}/>
                })}
              </SlickCarousel>
            </div>
        </section>
      </div>
    </main>
    <footer id='footer' ref={contact}>
      <Footer/>
    </footer>
  </>
  )
}

export default App;
