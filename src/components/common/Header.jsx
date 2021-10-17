import React from "react"
import logo from '../../assets/images/sponsor-logo.png'

const Header = () => {

  return (
    <div className="wrapper">

      <div className="overlay first"></div>
      <div className="overlay second"></div>
      <div className="overlay third"></div>

      <nav className="navbar">
        <div className="menu">
          <ion-icon name="ios-menu"></ion-icon>
        </div>
        <div className="lang">eng</div>
        <div className="search">
          <ion-icon name="ios-search"></ion-icon>
        </div>
      </nav>

      <div className="media">
        <ul>
          <li>facebook</li>
          <li>instagram</li>
          <li>twitter</li>
        </ul>
      </div>
      <div className="text">
        <h1>
          <span className="hidetext">toni&guy</span>
        </h1>
        <h2>duality</h2>
        <h3>
          <span className="hidetext">collection 2017 <br/> duality</span>
        </h3>
        <p>
        <span className="hidetext">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quis, delectus facere
          neque sunt commodi quae
          culpa dolores doloribus magnam?
        </span>
        </p>
      </div>
      <div className="sponsor">
        <img src={logo} alt="Sponsor logo" />
        <p>official sponsor</p>
      </div>
      <div className="distortion"></div>
    </div>
  )
}

export default Header