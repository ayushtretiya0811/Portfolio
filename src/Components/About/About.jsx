import React, { useEffect } from 'react';
import './About.css';
import styled from "styled-components";
import header_photo from '../../Assets/images/r-my.png';
import cvpdf from '../../Assets/material/CV.pdf';
import {motion , useAnimation} from 'framer-motion';
// import { fadeIn } from '../../animation';
import AOS from "aos";
import "aos/dist/aos.css";



  AOS.init();


// const revealVariants = {
//   hidden: { opacity: 0, x: '30%', y:'-200px' }, // Start from the right
//   show: { opacity: 1, x: '-50%',  y:'-200px', transition: { duration: 0.9 } }, // Animate to the center
//  };

const StyleButton2 = styled.button`
& {
    --color: #FFC107;
    font-family: inherit;
    display: inline-block;
    width: 8em;
    height: 2.6em;
    line-height: 2.5em;
    margin: 20px;
    position: relative;
    overflow: hidden;
    border: 2px solid var(--color);
    transition: color .5s;
    z-index: 1;
    font-size: 17px;
    border-radius: 6px;
    font-weight: 500;
    color: var(--color);
   }
   
   &:before {
    content: "";
    position: absolute;
    z-index: -1;
    background: var(--color);
    height: 150px;
    width: 200px;
    border-radius: 50%;
   }
   
   &:hover {
    color: #fff;
   }
   
   &:before {
    top: 100%;
    left: 100%;
    transition: all .7s;
   }
   
   &:hover:before {
    top: -30px;
    left: -30px;
   }
   
   &:active:before {
    background: #3a0ca3;
    transition: background 0s;
   }    `
function About() {
 
 // End at the original position

    return (
      <>
      <div className="container-fluid  about ">
        <div className="row   about-header">
          <div className="col-8 m-auto ps-lg-5   ">

            <motion.h3 
            initial ={{opacity:0, x:-100}}
            animate={{opacity:1, x:0}}
            transition={{duration:0.7 , ease: 'linear'}}
          
             className=' text-white main-font '>About Me</motion.h3>
          </div>
          <div  className="col-4 header-img">
                 <motion.img 
                 initial={{opacity:0 , y:100}}
                 animate={{opacity:1, y:0}}
                 transition={{duration:0.6 , ease: 'linear'}}
                 src={header_photo } alt=""  />
          </div>
        </div>
      </div>

      {/* <div className="container-fluid  ">
        <div className="row full-main">
            <div
           
            className="col-6 p-0">
              <div
              
             
              className="main-l"></div>
            </div>
            <div 
            
            
            className="col-6 p-0 ">
              <div className="main-r"></div>
            </div>
            <motion.div 
              initial={{opacity:0, x:150 , y:-150}}
              whileInView={{opacity:1, x:0, y:-150}}
              transition={{duration: 0.7, ease: 'linear'}}
        // variants={revealVariants}  
            className="about-main">

                <div className="text text-capitalize text-center">
                    <motion.div
                    initial={{opacity: 0, }}
                    whileInView={{opacity: 1,}}
                    transition={{duration: 0.7, ease: 'linear',  delay:0.3}}
                    
                    className="about-main-title fw-bold pt-2 h3">About Myself</motion.div>
                    <p className='p-2 h5 sec-font'>

                I’m a Creative web designer and Devloper on Ahmedabad, who loves clean and minimalistic design. I also enjoy crafting..
                    </p>
                    <motion.div
                      initial={{opacity: 0, x:-100}}
                      whileInView ={{opacity: 1, x: 0}}
                      transition={{duration: 0.7, ease: 'linear'}}
                    >
                    <a
                    // transition={{duration: 2}}
                    href={cvpdf} download>
      <StyleButton2 >Download CV
              
      </StyleButton2>
                </a>
                      </motion.div>
                </div>
            </motion.div>
        </div>
        
      </div> */}


<div className="container mt-5">
  <div className="row">
    <div className="col-12 col-lg-5">
        <div className="row gap-5 ">
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100" data-aos-duration="2000" className="col-12  col-lg-6 c-6"> <h5 className='t-font'>Project 3</h5></div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="200" data-aos-duration="2000" className="col-12  col-lg-6 c-6"></div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="250" data-aos-duration="2000" className="col-12  col-lg-6 c-6"></div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="2000" className="col-12  col-lg-6 c-6"></div>
     
        </div>
    </div>
    <div className="col-12 col-lg-7">
          <div className="tt">
            <p data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-delay="100" data-aos-duration="1000" className='t-font'  >About Me</p>
            <h3 className='sec-font fw-bold' data-aos='fade-right' delay="1000"  data-aos-duration="1000" >A web Devloper based in Ahmedabad </h3>
          </div>
          {/* <div className="row">
            <div className="col-6">
              <div className="row py-3 ">
                <div className="col-5 size  fw-bold ">Name :</div>
                <div className="col-7 p-0 ">Ayush Tretiya</div>
              </div>
            </div>
            <div className="col-6">
              <div className="row py-3 ">
                <div className="col-3 size fw-bold">Zip :</div>
                <div className="col-7 p-0">382418</div>
              </div>
            </div>
            <div className="col-6">
              <div className="row py-3 ">
                <div className="col-5 size fw-bold">Date of Birth:</div>
                <div className="col-7 p-0">November 08, 2003</div>
              </div>
            </div>
            <div className="col-6">
              <div className="row py-3 ">
                <div className="col-3 size fw-bold">Email :</div>
                <div className="col-7 p-0">ayushtretiya0811@gmail.com</div>
              </div>
            </div>
            <div className="col-6">
              <div className="row py-3 ">
                <div className="col-5 size fw-bold">phone :</div>
                <div className="col-7 p-0">73975973957</div>
              </div>
            </div>
          </div> */}
          <div class="row w-100 mb-4">
<div class="col-lg-6 ">
<ul class="about-info mt-4 px-md-0 px-2">
<li class="d-flex mb-4 "><span data-aos="fade-right"
     data-aos-anchor-placement="center-bottom"   data-aos-duration="1000" className='l-info t-font'>Name:</span> <span  data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-duration="500"
     data-aos-anchor-placement="bottom-bottom"
     data-aos-offset="0" className='r-info'>Ayush Tretiya</span></li>
<li class="d-flex mb-4"><span data-aos="fade-right"
     data-aos-anchor-placement="center-bottom"   data-aos-duration="1000"  className='l-info t-font'>Date of birth:</span> <span  data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-duration="500"
     data-aos-anchor-placement="bottom-bottom"
     data-aos-offset="0" className='r-info'>November 08, 2003</span></li>
<li class="d-flex mb-4"><span data-aos="fade-right"
     data-aos-anchor-placement="center-bottom"   data-aos-duration="1000"  className='l-info t-font'>Address:</span> <span  data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
   data-aos-duration="500"
   data-aos-anchor-placement="bottom-bottom"
    
     data-aos-offset="0" className='r-info'>Ahmedabad , Gujrat</span></li>

<li class="d-flex mb-4"><StyleButton2 data-aos="fade-right"
     data-aos-anchor-placement="center-bottom"   data-aos-duration="1000"   className='l-info m-0'>Download CV:</StyleButton2> </li>
</ul>
</div>
<div class="col-lg-6 ">
<ul class="about-info mt-4 px-md-0 px-2">
<li class="d-flex mb-4 "><span data-aos="fade-right"
     data-aos-anchor-placement="center-bottom"   data-aos-duration="1000" className='l-info t-font'>Zip code:</span> <span  data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-duration="500"
     data-aos-anchor-placement="bottom-bottom"
     data-aos-offset="0" className='r-info'>382418</span></li>
<li class="d-flex mb-4"><span data-aos="fade-right"
     data-aos-anchor-placement="center-bottom"   data-aos-duration="1000" className='l-info t-font'>Email:</span> <span  data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-duration="500"
     data-aos-anchor-placement="bottom-bottom"
     data-aos-offset="0" className='r-info'><a class="email text-decoration-none " >ayushtretiya0811@gmail.com</a></span></li>
<li class="d-flex mb-4"><span data-aos="fade-right"
     data-aos-anchor-placement="center-bottom"   data-aos-duration="1000" className='l-info t-font'>Phone: </span> <span  data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-duration="500"
   data-aos-anchor-placement="bottom-bottom"
     data-aos-offset="0" className='r-info'>79797797979</span></li>
</ul>
</div>
</div>
    </div>
    
  </div>
</div>


<div className="container-fluid mt-5">
  <div data-aos="fade-right" data-aos-duration="1000" className="skill h2  fw-bolder text-capitalize text-center">
    <p data-aos="fade-right" className='h5 t-font'>skills</p>
     <div className="f-font">
    My skills

    </div>
  </div>
</div>

<div className="container skill">
  <div className="row">
    <div className="col-12 col-lg-4 mb-2">
      <div className="row gap-5 ">
        <div className="col-12 ">
          <p className=''>HTML</p>
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <motion.div
    initial={{opacity:0, width: "0%" }} 
    whileInView={{opacity:1, width: "90%" }} 
    // transition={{ duration: 1 }} 
  class="progress-bar" style={{width: "90%"}}>
    <span>90%</span>
  </motion.div>
</div>
        </div>
        <div className="col-12">
          <p>CSS</p>
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <motion.div
     initial={{opacity:0, width: "0%" }} 
     whileInView={{opacity:1, width: "90%" }}
  class="progress-bar" style={{width: "90%"}}>
    <span>90%</span>
  </motion.div>
</div>
        </div>
        <div className="col-12">
          <p>JS</p>
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <motion.div
     initial={{opacity:0, width: "0%" }} 
     whileInView={{opacity:1, width: "65%" }}
  class="progress-bar" style={{width: "65%"}}>
    <span>65%</span>
  </motion.div>
</div>
        </div>
      </div>
    </div>
 {/* !----------------------------------------------------------------------------------------------  */}
    <div className="col-12 col-lg-4 mb-2">
      <div className="row gap-5">
        <div className="col-12">
          <p>React Js</p>
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <motion.div
     initial={{opacity:0, width: "0%" }} 
     whileInView={{opacity:1, width: "55%" }}
  class="progress-bar" style={{width: "55%"}}>
    <span>55%</span>
  </motion.div>
</div>
        </div>
        <div className="col-12">
          <p>Node Js</p>
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <motion.div
     initial={{opacity:0, width: "0%" }} 
     whileInView={{opacity:1, width: "25%" }}
  class="progress-bar" style={{width: "25%"}}>
    <span>25%</span>
  </motion.div>
</div>
        </div>
        <div className="col-12">
          <p>Mongo DB</p>
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <motion.div
     initial={{opacity:0, width: "0%" }} 
     whileInView={{opacity:1, width: "40%" }}
  class="progress-bar" style={{width: "40%"}}>
    <span>40%</span>
  </motion.div>
</div>
        </div>
      </div>
    </div>
 {/* !----------------------------------------------------------------------------------------------  */}
    <div className="col-12 col-lg-4 mb-2">
      <div className="row gap-5">
        <div className="col-12">
          <p>Boostrap</p>
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <motion.div 
     initial={{opacity:0, width: "0%" }} 
     whileInView={{opacity:1, width: "90%" }}
  class="progress-bar" style={{width: "90%"}}>
    <span>90%</span>
  </motion.div>
</div>
        </div>
        <div className="col-12">
          <p>python (Djnago)</p>
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <motion.div 
     initial={{opacity:0, width: "0%" }} 
     whileInView={{opacity:1, width: "70%" }}
  class="progress-bar" style={{width: "70%"}}>
    <span>70%</span>
  </motion.div>
</div>
        </div>
        {/* <div className="col-12">
          <p>Mongo DB</p>
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style={{width: "40%"}}>
    <span>40%</span>
  </div>
</div>
        </div> */}
      </div>
    </div>
   
  </div>
</div>























<div  className="container text-center my-lg-5 my-3">
    
      
            <h3 
             data-aos="fade-right" data-aos-duration="1000"
            className='sec-font fw-bold'
            >Experience</h3>
        
       
    
</div>
<div className="container">
  <h5 data-aos="fade-in" data-aos-duration="1000" className='t-font text-capitalize'>I am currently in the process of completing my Bachelor of Computer Applications (BCA) degree, which has equipped me with a solid foundation in computer science principles, programming languages, and software development methodologies. Throughout my academic journey, I have gained a comprehensive understanding of various technologies and programming languages, including but not limited to HTML, CSS, JavaScript,React Js and Python.</h5><hr/>
  <h5 data-aos="fade-in" data-aos-duration="1000"  data-aos-anchor-placement="bottom-bottom" className='t-font text-capitalize'>While I am still in the early stages of my career, I am eager to apply the knowledge and skills I have acquired to real-world projects. I am particularly interested in web development and software development, and I am committed to expanding my expertise in these areas.</h5>
</div>
    
      </>
    );
  }
  export default About