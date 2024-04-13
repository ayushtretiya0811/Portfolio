import React from 'react';
import './Home.css';
import myimage from '../../Assets/images/right-image.png';
import cv from '../../Assets/material/CV.pdf';
import  { useTypewriter , Cursor }  from 'react-simple-typewriter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import styled from "styled-components";



const StyleButton = styled.button`
& {
    width: 10em;
    position: relative;
    height: 3.5em;
    border: 3px ridge #FFC107;
    outline: none;
    background-color: transparent;
    color: black;
    transition: 1s;
    border-radius: 0.3em;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
  
  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 3%;
    width: 95%;
    height: 20%;
    background-color: #ffff;
    transition: 0.5s;
    transform-origin: center;
  }
  
  &::before {
    content: "";
    transform-origin: center;
    position: absolute;
    top: 88%;
    left: 3%;
    width: 95%;
    height: 20%;
    background-color: #ffff;
    transition: 0.5s;
  }
  
  &:hover::before, &:hover::after {
    transform: scale(0)
  }
  
  &:hover {
    box-shadow: inset 0px 0px 25px #FFC107;
  }
`;

function Home () {
 const [text] = useTypewriter({
  words: ['Ayush Tretiya', 'Web Devloper', 'Web Designer'],
  loop :true,
  typeSpeed :120,
  delaySpeed: 2000


 });
return(
    <>

<main>
<div className="container">
  <div className="row">
   
    <div className="col-12  l-home order-2 order-lg-1  col-lg-6 d-flex align-items-center justify-content-center">
      <div className=" pe-5  fw-bolder text-capitalize left-text animated slideInFromLeft w-100">
       <h2 className=''> Hey there,<br/></h2>
       <h3 className='sec-font'> I'm <span className='t-font text-warning' >{text}<Cursor/></span> <br/></h3>
      
      <a href={cv} download>
      <StyleButton >Download CV
              
      </StyleButton>
                </a>
      </div>
    </div>
 
    <div className=" col-12 order-1 order-lg-1 col-lg-6">
      <div className="image animated  slideInFromRight">
        <img src={myimage} alt="" className="w-100" />
      </div>
    </div>

  </div>
</div>


    </main>
   
    </>
)

}



export default Home;
export {StyleButton}