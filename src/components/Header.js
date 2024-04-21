import {Link} from "react-router-dom";
import { MenuOutline, NotificationsOutline } from 'react-ionicons';
import  "./css/Header.css";
import { Sidebar } from './Sidebar';
import { useState } from 'react';

export const Header = () => {
  const [sideBar, setSideBar] = useState(false)
  const showSidebar = () => setSideBar(!sideBar);
  // const [hidden, setHidden] = useState(false);
  // const [userhidden, setUserHidden] = useState(true);
 

  return (
    <>
      
    <header>
      {/* <!-- loader --> */}
      {/* <div id="loader">
        <img src="assets/img/loading-icon.png" alt="icon" className="loading-icon"/>
      </div> */}
      {/* <!-- * loader -->

      <!-- App Header --> */}
      <div className="appHeader bg-primary text-light">
        <div className="left">
        
              <Link to="#" className="headerButton" data-bs-toggle="modal" data-bs-target="#sidebarPanel">
              <MenuOutline color={"#fff"} onClick={showSidebar} />
                {/* <svg id="toggleSidebarMobileHamburger"  className="w-6 h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg> */}
              </Link>
        </div>
        <div className="pageTitle">
          <img src="assets/img/logo.png" alt="logo" className="logo"/>
        </div>
        <div className="right">
          <a href="#" className="headerButton">
            <NotificationsOutline color={'#FFF'}
               className="icon" name="notifications-outline"/>
            <span className="badge badge-danger"> 4</span>
          </a>
          <a href="#" className="headerButton">
            <img src="assets/img/sample/avatar/avatar1.jpg" alt="image" className="imaged w32" />
              <span className="badge badge-danger"> 6</span>
          </a>
        </div>
      </div>
    </header>
       <Sidebar showSidebar={showSidebar} sideBar={sideBar}/>
    </>
  )
}
