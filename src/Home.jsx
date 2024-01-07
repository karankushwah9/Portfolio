import React from 'react'
import "./HomeStyle.css"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='maincontainer'>
      {/* text part */}
      <h1>I,m karan <span>Kushwah</span></h1>
        <div className="animated_text">
          <h1 className="title">Web Developer</h1>
        </div>
      <p>This is my official  portfolio website to showes all
        <br/>Details and work exiprins web development
      </p>
      {/* Resume button part */}
      


      {/* socialCircle part */}
    <div class ="frame">
      <a href="https://github.com/karankushwah9" className="HomeBtn"><i className="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/karan-kushwah-b2144324a" className="HomeBtn"><i className="fab fa-linkedin-in"></i></a>
      <a href="https://www.snapchat.com/add/karan9_no1" className="HomeBtn"><i className="fab fa-snapchat"></i></a>
      <a href="https://www.codechef.com/users/karan_42" className="HomeBtn"><i className="fas fa-code"></i></a>
      <a href="https://www.instagram.com/k_a_n_n_u_9/" className="HomeBtn"><i className="fab fa-instagram"></i></a>
    </div>


      {/* avater part */}
      <div className='avatarPart'>
        <img src="../src/assets/avatar_bg.png" className='img_bg' />
        <img src="../src/assets/avatar.webp" className='img_avatar' />
      </div>

    </div>
  )
}

export default Home
