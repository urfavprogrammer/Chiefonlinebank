import "./css/Sidebar.css";
import { Link } from "react-router-dom";
import { CloseOutline, AddOutline, ArrowDownOutline, ArrowForwardOutline, CardOutline, ChevronForwardOutline } from 'react-ionicons';

export const Sidebar = ({ showSidebar, sideBar }) => {
  return (
    <>
          <div className={sideBar ? "modal fade panelbox-left panelbox show" : "modal fade panelbox panelbox-left " }style={{ display: sideBar ? "block" : "none"}} id="sidebarPanel" tabIndex="-1" role="dialog">
              <div className="modal-dialog" role="document">
                  <div className="modal-content">
                      <div className="modal-body p-0">
                          <div className="profileBox pt-2 pb-2">
                              <div className="image-wrapper">
                                  <img src="assets/img/sample/avatar/avatar1.jpg" alt="image" className="imaged  w36"/>
                              </div>
                              <div className="in">
                                  <strong>Sebastian Doe</strong>
                                  <div className="text-muted">4029209</div>
                              </div>
                              <Link to="#" className="btn btn-link btn-icon sidebar-close" data-bs-dismiss="modal">
                                  <CloseOutline color={'#00000'} onClick={showSidebar} />
                                  </Link>
                          </div>
                          <div className="sidebar-balance">
                              <div className="listview-title">Balance</div>
                              <div className="in">
                                  <h1 className="amount">$ 2,562.50</h1>
                              </div>
                          </div>
                          <div className="action-group">
                              <Link to="index.html" className="action-button">
                                  <div className="in">
                                      <div className="iconbox">
                                          <AddOutline color={"#FFF"} />
                                      </div>
                                      Deposit
                                  </div>
                              </Link>
                              <Link to="index.html" className="action-button">
                                  <div className="in">
                                      <div className="iconbox">
                                          <ArrowDownOutline color={"#FFF"} />
                                      </div>
                                      Withdraw
                                  </div>
                              </Link>
                              <Link to="index.html" className="action-button">
                                  <div className="in">
                                      <div className="iconbox">
                                          <ArrowForwardOutline color={"#FFF"} />
                                      </div>
                                      Send
                                  </div>
                              </Link>
                              <Link to="app-cards.html" className="action-button">
                                  <div className="in">
                                      <div className="iconbox">
                                          <CardOutline color={"#FFF"}/>
                                      </div>
                                      My Cards
                                  </div>
                              </Link>
                          </div>
                          <div className="listview-title mt-1">Menu</div>
                          <ul className="listview flush transparent no-line image-listview">
                              <li>
                                  <Link to="index.html" className="item">
                                      <div className="icon-box bg-primary">
                                          {/* <ion-icon name="pie-chart-outline" role="img" className="md hydrated" aria-label="pie chart outline"></ion-icon> */}
                                      </div>
                                      <div className="in">
                                          Overview
                                          <span className="badge badge-primary">10</span>
                                      </div>
                                      <span className="forward-outline">
                                          <ChevronForwardOutline color={"#A9ABAD"}/>
                                      </span>
                                      
                                  </Link>
                              </li>
                              <li>
                                  <Link to="app-pages.html" className="item">
                                      <div className="icon-box bg-primary">
                                          {/* <ion-icon name="document-text-outline" role="img" className="md hydrated" aria-label="document text outline"></ion-icon> */}
                                      </div>
                                      <div className="in">
                                          Pages
                                      </div>
                                      <span className="forward-outline">
                                          <ChevronForwardOutline color={"#A9ABAD"} />
                                      </span>
                                  </Link>
                              </li>
                              <li>
                                  <Link to="app-components.html" className="item">
                                      <div className="icon-box bg-primary">
                                          {/* <ion-icon name="apps-outline" role="img" className="md hydrated" aria-label="apps outline"></ion-icon> */}
                                      </div>
                                      <div className="in">
                                          Components
                                      </div>
                                      <span className="forward-outline">
                                          <ChevronForwardOutline color={"#A9ABAD"} />
                                      </span>
                                  </Link>
                              </li>
                              <li>
                                  <Link to="app-cards.html" className="item">
                                      <div className="icon-box bg-primary">
                                          {/* <ion-icon name="card-outline" role="img" className="md hydrated" aria-label="card outline"></ion-icon> */}
                                      </div>
                                      <div className="in">
                                          My Cards
                                      </div>
                                      <span className="forward-outline">
                                          <ChevronForwardOutline color={"#A9ABAD"} />
                                      </span>
                                  </Link>
                              </li>
                          </ul>
                          <div className="listview-title mt-1">Others</div>
                          <ul className="listview flush transparent no-line image-listview">
                              <li>
                                  <Link to="app-settings.html" className="item">
                                      <div className="icon-box bg-primary">
                                          {/* <ion-icon name="settings-outline" role="img" className="md hydrated" aria-label="settings outline"></ion-icon> */}
                                      </div>
                                      <div className="in">
                                          Settings
                                      </div>
                                      <span className="forward-outline">
                                          <ChevronForwardOutline color={"#A9ABAD"} />
                                      </span>
                                  </Link>
                              </li>
                              <li>
                                  <Link to="component-messages.html" className="item">
                                      <div className="icon-box bg-primary">
                                          {/* <ion-icon name="chatbubble-outline" role="img" className="md hydrated" aria-label="chatbubble outline"></ion-icon> */}
                                      </div>
                                      <div className="in">
                                          Support
                                      </div>
                                      <span className="forward-outline">
                                          <ChevronForwardOutline color={"#A9ABAD"} />
                                      </span>
                                  </Link>
                              </li>
                              <li>
                                  <Link to="app-login.html" className="item">
                                      <div className="icon-box bg-primary">
                                          {/* <ion-icon name="log-out-outline" role="img" className="md hydrated" aria-label="log out outline"></ion-icon> */}
                                      </div>
                                      <div className="in">
                                          Log out
                                      </div>
                                      <span className="forward-outline">
                                          <ChevronForwardOutline color={"#A9ABAD"} />
                                      </span>
                                  </Link>
                              </li>


                          </ul>

                          <div className="listview-title mt-1">Send Money</div>
                          <ul className="listview image-listview flush transparent no-line">
                              <li>
                                  <Link to="#" className="item">
                                      <img src="assets/img/sample/avatar/avatar2.jpg" alt="image" className="image"/>
                                          <div className="in">
                                              <div>Artem Sazonov</div>
                                          </div>
                                      <span className="forward-outline">
                                          <ChevronForwardOutline color={"#A9ABAD"} />
                                      </span>
                                  </Link>
                              </li>
                          </ul>

                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}
