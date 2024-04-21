import "./css/walletcard.css";
import { AddOutline, ArrowDownOutline, ArrowForwardOutline, CardOutline, SwapVerticalOutline } from 'react-ionicons';
import { Link } from "react-router-dom";

export const WalletCard = () => {
  return (
    <>
          <div id='appCapsule'>
              <div className='section wallet-card-section pt-1'>
                  <div className="wallet-card">
                      <div className="balance">
                          <div className="left">
                              <span className="title">
                                  Total Balance
                              </span>
                              <h1 className="total">$ 2,562.50</h1>
                          </div>
                          <div class="right">
                              <Link to="#" class="button" data-bs-toggle="modal" data-bs-target="#depositActionSheet">
                                  <AddOutline color={"#6236FF"}/>
                                  <div class="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Add</title><path strokeLinecap="round" strokeLinejoin="round" d="M256 112v288M400 256H112" className="ionicon-fill-none ionicon-stroke-width"></path></svg></div>
                              </Link>
                          </div>
                      </div>
                      <div class="wallet-footer">
                          <div class="item">
                              <Link to="#" data-bs-toggle="modal" data-bs-target="#withdrawActionSheet">
                                  <div class="icon-wrapper bg-danger">
                                      <ArrowDownOutline  color={"#FFF"} />
                                  </div>
                                  <strong>Withdraw</strong>
                              </Link>
                          </div>
                          <div class="item">
                              <Link to="#" data-bs-toggle="modal" data-bs-target="#sendActionSheet">
                                  <div class="icon-wrapper">
                                      <ArrowForwardOutline color={"#FFF"} />
                                  </div>
                                  <strong>Send</strong>
                              </Link>
                          </div>
                          <div class="item">
                              <Link to="app-cards.html">
                                  <div class="icon-wrapper bg-success">
                                      <CardOutline color={"#FFF"} />
                                  </div>
                                  <strong>Cards</strong>
                              </Link>
                          </div>
                          <div class="item">
                              <Link to="#" data-bs-toggle="modal" data-bs-target="#exchangeActionSheet">
                                  <div class="icon-wrapper bg-warning">
                                      <SwapVerticalOutline color={"#FFF"} />
                                  </div>
                                  <strong>Exchange</strong>
                              </Link>
                          </div>
                        </div>
                  </div>
              </div>
          </div>
    </>
  )
}