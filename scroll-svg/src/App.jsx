import './App.css'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'


gsap.registerPlugin(ScrollTrigger)
function App() {
  useEffect(()=> {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time)=> {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const path = document.getElementById("stroke-path")
    const pathLength = path.getTotalLength()

    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".spotlight",
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    })
  })

  return (
    <>
      <section className='hero'>
        <h1>Designed to keep information clear and connected</h1>
      </section>

      <section className="spotlight">
        <div className="row">
          <div className="img">
            <img src='/img_1.svg'/>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="card">
              <h2>A Cleaner way to handle incoming updates</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur voluptatem laboriosam eveniet possimus minus, delectus qui consequatur adipisci veritatis fugiat ducimus cupiditate obcaecati corrupti porro itaque libero cum unde. Labore.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="img">
              <img src='/img_2.svg'/>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col">
            <div className="img"><img src='/img_3.svg'/></div>
          </div>
          <div className="col">
            <div className="card">
              <h2>Built for increasing information demands</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, consequatur omnis tempore reprehenderit eligendi ducimus numquam quae beatae voluptates adipisci laudantium similique pariatur ea corporis amet unde, provident fugit cum.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="img">
            <img src='/img_4.svg'/>
          </div>
        </div>

        <div className="svg-path">
          <svg width="581" height="852" viewBox="0 0 581 852" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="stroke-path" d="M457.866 30.0011C457.866 30.0011 71.3659 55.5011 103.866 193.001C136.366 330.501 521.866 211.001 549.366 379.501C576.866 548.001 -33.1342 779.501 35.3659 517.001C103.866 254.501 349.866 822.001 349.866 822.001" stroke="#F63C3C" stroke-width="60" stroke-linecap="round"/>
          </svg>
        </div>
      </section>

      <section className="outro">
        <h1>Clearer organization ready for whatever comes next</h1>
      </section>
    </>
  )
}

export default App
