import React from 'react'
import "./ContactStyle.css";   // In contact css, project css and also About css

const About = (theme) => {
  return (
    <div >
      <div className= "about-wrapper" style={{backgroundColor:theme=="light"?"white":"black" , color:theme=="light"?"black":"white" }}>
      <div className= "about-left">
        <div className= "about-left-content">
          <div>
            <div className= "shadow">
              <div className= "about-img">
                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPO5CvTL79PoqndYQgx3k34A2ETEmkZGCxfg&usqp=CAU" alt = "about image" />
              </div>
            </div>

            <h2>Karan kushwah</h2>
            <h3>Web developer</h3>
          </div>

          <ul className= "icons">
            <li className='iconsTab'><i className= "fab fa-facebook-f"></i></li>
            <li className='iconsTab'><i className= "fab fa-twitter"></i></li>
            <li className='iconsTab'><i className= "fab fa-linkedin"></i></li>
            <li className='iconsTab'><i className= "fab fa-instagram"></i></li>
          </ul>
        </div>
        
      </div>

      <div className= "about-right">
        <h1>About<span>me!</span></h1>
        <h2>Here's who I am & what I do</h2>
        <div className= "about-btns">
          <button type = "button" className= "btn btn-pink">resume / CV</button>
          <button type = "button" className= "btn btn-white">Git hub</button>
        </div>

        <div className= "about-para">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aspernatur possimus ullam quaerat, laboriosam ex voluptate aliquid laborum, obcaecati ratione accusamus! Ea nisi modi dolor nam numquam? Temporibus, molestias amet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus iure tempora alias laudantium sapiente impedit!</p>
        </div>
        {/* <div class="credit">Made with <span style="color:tomato">❤</span> by <a href="https://www.learningrobo.com/">Learning Robo</a></div> */}
      </div>
    </div>
    </div>
  )
}

export default About
