import {Link} from "react-router-dom";
import { Notifications, NotificationsOutline } from 'react-ionicons';
import  "./Header.css";
import { Sidebar } from './Sidebar';
import { useState } from 'react';

export const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  // const [hidden, setHidden] = useState(false);
  // const [userhidden, setUserHidden] = useState(true);


  return (
    <>
      
    <header>
      {/* <!-- loader --> */}
      <div id="loader">
        <img src="assets/img/loading-icon.png" alt="icon" class="loading-icon"/>
      </div>
      {/* <!-- * loader -->

      <!-- App Header --> */}
      <div class="appHeader bg-primary text-light">
        <div class="left">
        <button>
              <Link to="#" class="headerButton" data-bs-toggle="modal" data-bs-target="#sidebarPanel">
                <svg id="toggleSidebarMobileHamburger" class="w-6 h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              </Link>
        </button>
              
        
          
        </div>
        <div class="pageTitle">
          <img src="assets/img/logo.png" alt="logo" class="logo"/>
        </div>
        <div class="right">
          <a href="#" class="headerButton">
            <NotificationsOutline color={'#FFF'}
              title={Notifications} class="icon" name="notifications-outline"/>
            <span class="badge badge-danger"> 4</span>
          </a>
          <a href="#" class="headerButton">
            <img src="assets/img/sample/avatar/avatar1.jpg" alt="image" class="imaged w32" />
              <span class="badge badge-danger"> 6</span>
          </a>
        </div>
      </div>
    </header>
    
    </>
  )
}
