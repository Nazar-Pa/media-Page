import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import profile from '../images/profile.jpg'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Screens from './Screens'
import SongMore from './SongMore'
import BookMore from './BookMore'
import FilmMore from './FilmMore'



function ULList() {

    const toggleSideMenu = () => {
        let sidebar = document.querySelector(".sidebar");
        sidebar.classList.toggle("close");
    }

    const showSubMenu = (e) => {
        let parent = e.target.parentElement.parentElement;
        parent.classList.toggle("showMenu");
        
    }

    
    return (
      <Router>
        
        <div>
        <div className="sidebar">
            <div className="logo-details">
            <i className='bx bxl-c-plus-plus'></i>
            <span className="logo_name">CodingLab</span>
            </div>
            <ul className="nav-links">
                <li>
                <a href="#">
                <i className='bx bx-grid-alt' ></i>
                <span className="link_name">Main</span>
                </a>
                <ul className="sub-menu blank">

                <li><a className="link_name" href="#">Main</a></li>
                </ul>
                </li>
                <li>
                <div className="iocn-link">
                    <a href="#">
                        <i className='bx bx-collection' ></i>
                        <span className="link_name">Songs</span>
                    </a>
                    {/* <i className='bx bx-right-arrow-alt arrow' onClick={this.showSubMenu}></i> */}
                <i className='bx bxs-chevron-down arrow' onClick={showSubMenu}></i>
                </div>
                <ul className="sub-menu">
                    <li><a className="link_name" href="#">Songs</a></li>
                    <li><a href="#">HTML & CSS</a></li>
                    <li><a href="#">JavaScript</a></li>
                    <li><a href="#">PHP & MySQL</a></li>
                </ul>
                </li>
                <li>
        <div className="iocn-link">
          <a href="#">
            <i className='bx bx-book-alt' ></i>
            <span className="link_name">Books</span>
          </a>
          <i className='bx bxs-chevron-down arrow' onClick={showSubMenu}></i>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Books</a></li>
          <li><a href="#">Web Design</a></li>
          <li><a href="#">Login Form</a></li>
          <li><a href="#">Card Design</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className='bx bx-pie-chart-alt-2' ></i>
          <span className="link_name">Films</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Films</a></li>
        </ul>
      </li>
      <li>
        <div className="iocn-link">
          <a href="#">
            <i className='bx bx-plug' ></i>
            <span className="link_name">Plugins</span>
          </a>
          <i className='bx bxs-chevron-down arrow' onClick={showSubMenu}></i>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Plugins</a></li>
          <li><a href="#">UI Face</a></li>
          <li><a href="#">Pigments</a></li>
          <li><a href="#">Box Icons</a></li>
        </ul>
      </li>
      
      <li>
          <div className="profile-details">
              <div className="profile-content">
                  <img src={profile} alt="profileimg"></img>
              </div>
              <div className="name-job">
                  <div className="profile_name">
                      Nazar Pashayev
                  </div>
                  
              </div>
          </div>
      </li>
      </ul>
      </div>
          
    <section className="home-section">
        <div className="home-content">
            <i className='bx bx-menu' onClick={toggleSideMenu}></i>
            <span className="text">Media</span>
        </div>
    </section>
    
    <Screens />
    

    <Route path='/songs' component={SongMore}/>
    <Route path='/books' component={BookMore}/>
    <Route path='/films' component={FilmMore}/>
    </div>

    </Router>
    

    )
}





export default ULList
