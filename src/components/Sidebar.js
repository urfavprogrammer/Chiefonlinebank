import "./Sidebar.css";
// import { CloseOutline } from 'react-ionicons'

export const Sidebar = () => {
  return (
    <>
          <div class="modal fade panelbox panelbox-left" id="sidebarPanel" tabindex="-1" role="dialog">
              <div class="modal-dialog" role="document">
                  <div class="modal-content">
                      <div class="modal-body p-0">
                          <div class="profileBox pt-2 pb-2">
                              <div class="image-wrapper">
                                  <img src="assets/img/sample/avatar/avatar1.jpg" alt="image" class="imaged  w36"/>
                              </div>
                              <div class="in">
                                  <strong>Sebastian Doe</strong>
                                  <div class="text-muted">4029209</div>
                              </div>
                              <a href="#" class="btn btn-link btn-icon sidebar-close" data-bs-dismiss="modal">
                                  {/* <CloseOutline color={'#00000'} title={'close-outline'} /> */}
                                 
                              </a>
                          </div>
                          <div class="sidebar-balance">
                              <div class="listview-title">Balance</div>
                              <div class="in">
                                  <h1 class="amount">$ 2,562.50</h1>
                              </div>
                          </div>
                          <div class="action-group">
                              <a href="index.html" class="action-button">
                                  <div class="in">
                                      <div class="iconbox">
                                          {/* <ion-icon name="add-outline" role="img" class="md hydrated" aria-label="add outline"></ion-icon> */}
                                      </div>
                                      Deposit
                                  </div>
                              </a>
                              <a href="index.html" class="action-button">
                                  <div class="in">
                                      <div class="iconbox">
                                          {/* <ion-icon name="arrow-down-outline" role="img" class="md hydrated" aria-label="arrow down outline"></ion-icon> */}
                                      </div>
                                      Withdraw
                                  </div>
                              </a>
                              <a href="index.html" class="action-button">
                                  <div class="in">
                                      <div class="iconbox">
                                          {/* <ion-icon name="arrow-forward-outline" role="img" class="md hydrated" aria-label="arrow forward outline"></ion-icon> */}
                                      </div>
                                      Send
                                  </div>
                              </a>
                              <a href="app-cards.html" class="action-button">
                                  <div class="in">
                                      <div class="iconbox">
                                          {/* <ion-icon name="card-outline" role="img" class="md hydrated" aria-label="card outline"></ion-icon> */}
                                      </div>
                                      My Cards
                                  </div>
                              </a>
                          </div>
                          <div class="listview-title mt-1">Menu</div>
                          <ul class="listview flush transparent no-line image-listview">
                              <li>
                                  <a href="index.html" class="item">
                                      <div class="icon-box bg-primary">
                                          {/* <ion-icon name="pie-chart-outline" role="img" class="md hydrated" aria-label="pie chart outline"></ion-icon> */}
                                      </div>
                                      <div class="in">
                                          Overview
                                          <span class="badge badge-primary">10</span>
                                      </div>
                                  </a>
                              </li>
                              <li>
                                  <a href="app-pages.html" class="item">
                                      <div class="icon-box bg-primary">
                                          {/* <ion-icon name="document-text-outline" role="img" class="md hydrated" aria-label="document text outline"></ion-icon> */}
                                      </div>
                                      <div class="in">
                                          Pages
                                      </div>
                                  </a>
                              </li>
                              <li>
                                  <a href="app-components.html" class="item">
                                      <div class="icon-box bg-primary">
                                          {/* <ion-icon name="apps-outline" role="img" class="md hydrated" aria-label="apps outline"></ion-icon> */}
                                      </div>
                                      <div class="in">
                                          Components
                                      </div>
                                  </a>
                              </li>
                              <li>
                                  <a href="app-cards.html" class="item">
                                      <div class="icon-box bg-primary">
                                          {/* <ion-icon name="card-outline" role="img" class="md hydrated" aria-label="card outline"></ion-icon> */}
                                      </div>
                                      <div class="in">
                                          My Cards
                                      </div>
                                  </a>
                              </li>
                          </ul>
                          <div class="listview-title mt-1">Others</div>
                          <ul class="listview flush transparent no-line image-listview">
                              <li>
                                  <a href="app-settings.html" class="item">
                                      <div class="icon-box bg-primary">
                                          {/* <ion-icon name="settings-outline" role="img" class="md hydrated" aria-label="settings outline"></ion-icon> */}
                                      </div>
                                      <div class="in">
                                          Settings
                                      </div>
                                  </a>
                              </li>
                              <li>
                                  <a href="component-messages.html" class="item">
                                      <div class="icon-box bg-primary">
                                          {/* <ion-icon name="chatbubble-outline" role="img" class="md hydrated" aria-label="chatbubble outline"></ion-icon> */}
                                      </div>
                                      <div class="in">
                                          Support
                                      </div>
                                  </a>
                              </li>
                              <li>
                                  <a href="app-login.html" class="item">
                                      <div class="icon-box bg-primary">
                                          {/* <ion-icon name="log-out-outline" role="img" class="md hydrated" aria-label="log out outline"></ion-icon> */}
                                      </div>
                                      <div class="in">
                                          Log out
                                      </div>
                                  </a>
                              </li>


                          </ul>

                          <div class="listview-title mt-1">Send Money</div>
                          <ul class="listview image-listview flush transparent no-line">
                              <li>
                                  <a href="#" class="item">
                                      <img src="assets/img/sample/avatar/avatar2.jpg" alt="image" class="image"/>
                                          <div class="in">
                                              <div>Artem Sazonov</div>
                                          </div>
                                  </a>
                              </li>
                          </ul>

                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}
