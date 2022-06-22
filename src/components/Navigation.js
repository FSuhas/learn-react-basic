import React from 'react';
import { NavLink } from "react-router-dom";
import Reseau from './Reseau';

const Navigation = () => {
  return (
    <div className='sidebar'>
      <div className="id">
        <div className="idContent">
          <img src="./media/portrait-2.jpg" alt="profil pic" style={{height: 100}} />
          <h3>Fabien Suhas</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className='fas fa-home'></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/competences" activeClassName="navActive">
              <i className='fas fa-mountain'></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portefolio" activeClassName="navActive">
              <i className='fas fa-image'></i>
              <span>Portefolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className='fas fa-book'></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <Reseau></Reseau>

    </div>
  );
};

export default Navigation;
