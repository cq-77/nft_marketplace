import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div>
              {/* <!------------ Home banner ------------> */}
              <div class="main-banner">
                <div class="container">
                  <div class="main-title">
                    <h1 class="wow fadeInUp" data-wow-delay="0.3s">Get Hired for Metaverse Jobs, Discover, Collect and Sell NFT'S</h1>
                    <h3 class="wow fadeInUp" data-wow-delay="0.3s">Digital marketplace for crypto collectibles and non-fungible tokens</h3>
                    <br/>
                    <ul class="title-btn wow fadeInUp" data-wow-delay="0.6s">
                      <li><a className="btn blue-btn" ><Link to="/Explore" style={{ color: 'white' }}>Explore</Link></a></li>
                      <li><Link to="/GigListing"><button type="button" className='btn blue-btn'>Gigs</button></Link></li>
                      <li><Link to="/Minter"><button type="button" className='btn white-btn'>Mint</button></Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <section>
                <div class="container">
                  <div style={{ textAlign: 'center' }}>
                    <h2>Recommended</h2>
                    <br/><br/><br/>
                    <div class="row">
                      <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.3s">
                        <img src="assets/img/img-1.jpg" alt=""/>
                        <br/>
                        <div class="painting-info">
                          <p>The Bitcoin Angel (Open Edition)</p>
                          <p class="smallest-text">Last Sold</p>
                          <p class="black-text bold-text">$900.00</p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad  wow fadeInUp" data-wow-delay="0.6s">
                        <img src="assets/img/img-2.jpg" alt=""/>
                        <br/>
                        <div class="painting-info">
                          <p>Grafitti Children on Bike</p>
                          <p class="smallest-text">Last Sold</p>
                          <p class="black-text bold-text">$900.00</p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad  wow fadeInUp" data-wow-delay="0.9s">
                        <img src="assets/img/img-3.jpg" alt=""/>
                        <br/>
                        <div class="painting-info">
                          <p>The Bitcoin Angel (Open Edition)</p>
                          <p class="smallest-text">Last Sold</p>
                          <p class="black-text bold-text">$900.00</p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad  wow fadeInUp" data-wow-delay="0.3s">
                        <img src="assets/img/img-4.jpg" alt=""/>
                        <br/>
                        <div class="painting-info">
                          <p>Colorful Oil Paint Abstract</p>
                          <p class="smallest-text">Last Sold</p>
                          <p class="black-text bold-text">$900.00</p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad  wow fadeInUp" data-wow-delay="0.6s">
                        <img src="assets/img/img-5.jpg" alt=""/>
                        <br/>
                        <div class="painting-info">
                          <p>Golden Nature Sunset Illustration</p>
                          <p class="smallest-text">Last Sold</p>
                          <p class="black-text bold-text">$900.00</p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad  wow fadeInUp" data-wow-delay="0.9s">
                        <img src="assets/img/img-6.jpg" alt=""/>
                        <br/>
                        <div class="painting-info">
                          <p>Colorful Instruments</p>
                          <p class="smallest-text">Last Sold</p>
                          <p class="black-text bold-text">$900.00</p>
                        </div>
                      </div>
                    </div>
                    <br/><br/>
                    <a href="" class="btn blue-btn wow fadeInUp" data-wow-delay="0.3s">More</a>
                  </div>
                  <div class="black-line"></div>
                  <div class="row">
                    <div class="col-lg-4 col-md-3 col-sm-12 col-12 v-pad">
                      <div class="logo"><img src="assets/img/logo.jpeg" alt=""/></div>
                      <br/>
                      <h2 class="black-text">METAVERSE JOB<br/>MARKETPLACE</h2>
                    </div>
                    <div class="col-lg-8 col-md-9 col-sm-12 col-12 v-pad">
                      <h3 class="black-text">Take your work, collections to the next level. TradeMint is the first marketplace that lets you post gigs, get hired in jobs in the Metaverse.
                      </h3>
                      <br/>
                      <p>Find the perfect architect for your new dream home, Metaverse project.</p>
                      <p>Commission a great art piece, installation and song.</p>
                      <p>Find developers to help you code inside the Metaverse.</p>
                    </div>
                  </div>
                  <br/><br/><br/>
                  <div style={{ textAlign: 'center' }}>
                    <h4 class="black-text bold-text">Recently Viewed and More...</h4>
                    <br/>
                    <div class="marketplace-col wow fadeInUp" data-wow-delay="0.3s">
                      <img src="assets/img/cover1.jpg" alt=""/>
                      <div class="marketplace-info" style={{ paddingTop: '40px' }}>
                        <div class="marketplace-profile"><img src="assets/img/profile-2.jpeg" alt=""/></div>
                        <p class="bold-text black-text">@johndoe</p>
                        <p class="smallest-text"><span class="bold-text black-text"><i class="fas fa-star"></i> 5.0</span> (145)</p>
                        <h4>I will make an effective  TV commercial with live...</h4>
                      </div>
                      <div class="m-border"></div>
                      <div class="marketplace-info">
                        <p class="smallest-text">Starting at</p>
                        <p class="black-text bold-text">$80.00</p>
                        <p class="smallest-text"><i class="far fa-heart"></i> 122</p>
                      </div>
                    </div>
                    <div class="marketplace-col wow fadeInUp" data-wow-delay="0.6s">
                      <img src="assets/img/cover2.jpg" alt=""/>
                      <div class="marketplace-info" style={{ paddingTop: '40px' }}>
                        <div class="marketplace-profile"><img src="assets/img/profile-1.jpg" alt=""/></div>
                        <p class="bold-text black-text">@johndoe</p>
                        <p class="smallest-text"><span class="bold-text black-text"><i class="fas fa-star"></i> 5.0</span> (145)</p>
                        <h4>I will make an effective  TV commercial with live...</h4>
                      </div>
                      <div class="m-border"></div>
                      <div class="marketplace-info">
                        <p class="smallest-text">Starting at</p>
                        <p class="black-text bold-text">$80.00</p>
                        <p class="smallest-text"><i class="fas fa-heart" style={{ color: '#38adcc' }}></i> 122</p>
                      </div>
                    </div>
                    <div class="marketplace-col wow fadeInUp" data-wow-delay="0.9s">
                      <img src="assets/img/cover1.jpg" alt=""/>
                      <div class="marketplace-info" style={{ paddingTop: '40px' }}>
                        <div class="marketplace-profile"><img src="assets/img/profile-3.jpeg" alt=""/></div>
                        <p class="bold-text black-text">@johndoe</p>
                        <p class="smallest-text"><span class="bold-text black-text"><i class="fas fa-star"></i> 5.0</span> (145)</p>
                        <h4>I will make an effective  TV commercial with live...</h4>
                      </div>
                      <div class="m-border"></div>
                      <div class="marketplace-info">
                        <p class="smallest-text">Starting at</p>
                        <p class="black-text bold-text">$80.00</p>
                        <p class="smallest-text"><i class="far fa-heart"></i> 122</p>
                      </div>
                    </div>
                    <div class="marketplace-col  wow fadeInUp" data-wow-delay="1.2s">
                      <img src="assets/img/cover2.jpg" alt=""/>
                      <div class="marketplace-info" style={{ paddingTop: '40px' }}>
                        <div class="marketplace-profile"><img src="assets/img/profile-4.jpeg" alt=""/></div>
                        <p class="bold-text black-text">@johndoe</p>
                        <p class="smallest-text"><span class="bold-text black-text"><i class="fas fa-star"></i> 5.0</span> (145)</p>
                        <h4>I will make an effective  TV commercial with live...</h4>
                      </div>
                      <div class="m-border"></div>
                      <div class="marketplace-info">
                        <p class="smallest-text">Starting at</p>
                        <p class="black-text bold-text">$80.00</p>
                        <p class="smallest-text"><i class="fas fa-heart" style={{ color: '#38adcc' }}></i> 122</p>
                      </div>
                    </div>
                    <div class="marketplace-col  wow fadeInUp" data-wow-delay="1.5s">
                      <img src="assets/img/cover1.jpg" alt=""/>
                      <div class="marketplace-info" style={{ paddingTop: '40px' }}>
                        <div class="marketplace-profile"><img src="assets/img/profile-5.jpeg" alt=""/></div>
                        <p class="bold-text black-text">@johndoe</p>
                        <p class="smallest-text"><span class="bold-text black-text"><i class="fas fa-star"></i> 5.0</span> (145)</p>
                        <h4>I will make an effective  TV commercial with live...</h4>
                      </div>
                      <div class="m-border"></div>
                      <div class="marketplace-info">
                        <p class="smallest-text">Starting at</p>
                        <p class="black-text bold-text">$80.00</p>
                        <p class="smallest-text"><i class="far fa-heart"></i> 122</p>
                      </div>
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <br/><br/><br/>
                    <a href="" class="btn wow fadeInUp" data-wow-delay="0.3s">View All</a>
                  </div>
                </div>
              </section>

              <section class="green-bg">
                <div class="container" style={{ textAlign: 'center' }}>
                  <h2>Top Collectors</h2>
                  <br/><br/>
                  <div class="collectors-col wow fadeInUp" data-wow-delay="0.3s">
                    <div class="collectors-profile" style={{ backgroundImage: 'url(assets/img/profile-3.jpeg)' }}>
                      <div class="collectors-shade"></div>
                      <div class="collectors-name">@Lilyrose</div>
                    </div>
                  </div>
                  <div class="collectors-col wow fadeInUp" data-wow-delay="0.3s">
                    <div class="collectors-profile" style={{ backgroundImage: 'url(assets/img/profile-4.jpeg)' }}>
                      <div class="collectors-shade"></div>
                      <div class="collectors-name">@josephinehenry</div>
                    </div>
                  </div>
                  <div class="collectors-col wow fadeInUp" data-wow-delay="0.3s">
                    <div class="collectors-profile" style={{ backgroundImage: 'url(assets/img/profile-5.jpeg)' }}>
                      <div class="collectors-shade"></div>
                      <div class="collectors-name">@brandonwillis</div>
                    </div>
                  </div>
                  <div class="collectors-col wow fadeInUp" data-wow-delay="0.3s">
                    <div class="collectors-profile" style={{ backgroundImage: 'url(assets/img/profile-6.jpeg)' }}>
                      <div class="collectors-shade"></div>
                      <div class="collectors-name">@josemario</div>
                    </div>
                  </div>
                  <div class="collectors-col wow fadeInUp" data-wow-delay="0.3s">
                    <div class="collectors-profile" style={{ backgroundImage: 'url(assets/img/profile-7.jpeg)' }}>
                      <div class="collectors-shade"></div>
                      <div class="collectors-name">@mirandafun</div>
                    </div>
                  </div>
                  <div class="collectors-col wow fadeInUp" data-wow-delay="0.3s">
                    <div class="collectors-profile" style={{ backgroundImage: 'url(assets/img/profile-8.jpeg)' }}>
                      <div class="collectors-shade"></div>
                      <div class="collectors-name">@aryahopkins</div>
                    </div>
                  </div>

                  <div class="collectors-col wow fadeInUp" data-wow-delay="0.3s">
                    <div class="collectors-profile" style={{ backgroundImage: 'url(assets/img/profile-9.jpeg)' }}>
                      <div class="collectors-shade"></div>
                      <div class="collectors-name">@santana</div>
                    </div>
                  </div>
                  <div class="collectors-col wow fadeInUp" data-wow-delay="0.3s">
                    <div class="collectors-profile" style={{ backgroundImage: 'url(assets/img/profile-10.jpeg)' }}>
                      <div class="collectors-shade"></div>
                      <div class="collectors-name">@billydoe</div>
                    </div>
                  </div>
                  <div class="collectors-col wow fadeInUp" data-wow-delay="0.3s">
                    <div class="collectors-profile" style={{ backgroundImage: 'url(assets/img/profile-11.jpeg)' }}>
                      <div class="collectors-shade"></div>
                      <div class="collectors-name">@veronicavanh</div>
                    </div>
                  </div>
                  <div class="collectors-col wow fadeInUp" data-wow-delay="0.3s">
                    <div class="collectors-profile" style={{ backgroundImage: 'url(assets/img/profile-3.jpeg)' }}>
                      <div class="collectors-shade"></div>
                      <div class="collectors-name">@Lilyrose</div>
                    </div>
                  </div>
                  <div class="collectors-col wow fadeInUp" data-wow-delay="0.3s">
                    <div class="collectors-profile" style={{ backgroundImage: 'url(assets/img/profile-4.jpeg)' }}>
                      <div class="collectors-shade"></div>
                      <div class="collectors-name">@josephinehenry</div>
                    </div>
                  </div>
                  <div class="collectors-col wow fadeInUp" data-wow-delay="0.3s">
                    <div class="collectors-profile" style={{ backgroundImage: 'url(assets/img/profile-5.jpeg)' }}>
                      <div class="collectors-shade"></div>
                      <div class="collectors-name">@brandonwillis</div>
                    </div>
                  </div>
                  <div style={{ clear: 'both' }}></div>
                </div>
              </section>

              <section style={{ textAlign: 'center' }}>
                <div class="container">
                  <h2>Featured Creators</h2>
                  <br/><br/>
                  <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.3s">
                      <img src="assets/img/cover1.jpg" alt=""/>
                      <div class="creators-col">
                        <div class="creators-profile"><img src="assets/img/profile-2.jpeg" alt=""/></div>
                        <p>John Doe</p>
                        <p class="bold-text black-text">@johndoe</p>
                        <p class="smallest-text">8 Collections</p>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.6s">
                      <img src="assets/img/cover2.jpg" alt=""/>
                      <div class="creators-col">
                        <div class="creators-profile"><img src="assets/img/profile-1.jpg" alt=""/></div>
                        <p>Nancy Tan</p>
                        <p class="bold-text black-text">@nancytan</p>
                        <p class="smallest-text">22 Collections</p>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.9s">
                      <img src="assets/img/cover3.jpg" alt=""/>
                      <div class="creators-col">
                        <div class="creators-profile"><img src="assets/img/profile-12.jpeg" alt=""/></div>
                        <p>Billy Martin</p>
                        <p class="bold-text black-text">@illustratorguy</p>
                        <p class="smallest-text">12 Collections</p>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="1.2s">
                      <img src="assets/img/cover4.jpg" alt=""/>
                      <div class="creators-col">
                        <div class="creators-profile"><img src="assets/img/profile-13.jpeg" alt=""/></div>
                        <p>Mario Brothers</p>
                        <p class="bold-text black-text">@theartist</p>
                        <p class="smallest-text">36 Collections</p>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.3s">
                      <img src="assets/img/cover1.jpg" alt=""/>
                      <div class="creators-col">
                        <div class="creators-profile"><img src="assets/img/profile-2.jpeg" alt=""/></div>
                        <p>John Doe</p>
                        <p class="bold-text black-text">@johndoe</p>
                        <p class="smallest-text">8 Collections</p>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.6s">
                      <img src="assets/img/cover2.jpg" alt=""/>
                      <div class="creators-col">
                        <div class="creators-profile"><img src="assets/img/profile-1.jpg" alt=""/></div>
                        <p>Nancy Tan</p>
                        <p class="bold-text black-text">@nancytan</p>
                        <p class="smallest-text">22 Collections</p>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.9s">
                      <img src="assets/img/cover3.jpg" alt=""/>
                      <div class="creators-col">
                        <div class="creators-profile"><img src="assets/img/profile-12.jpeg" alt=""/></div>
                        <p>Billy Martin</p>
                        <p class="bold-text black-text">@illustratorguy</p>
                        <p class="smallest-text">12 Collections</p>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="1.2s">
                      <img src="assets/img/cover4.jpg" alt=""/>
                      <div class="creators-col">
                        <div class="creators-profile"><img src="assets/img/profile-13.jpeg" alt=""/></div>
                        <p>Mario Brothers</p>
                        <p class="bold-text black-text">@theartist</p>
                        <p class="smallest-text">36 Collections</p>
                      </div>
                    </div>
                  </div>
                  <br/><br/>
                  <a href="" class="btn blue-btn wow fadeInUp" data-wow-delay="0.3s">More</a>
                </div>
              </section>

              <div class="top-footer">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-8 col-md-8 v-pad"> 
                      <h2>Stay in the loop</h2>
                      <h3>Join our mailing list to stay in the loop with our newest feature releases,<br/> NFT drops, and tips and tricks for navigating TradeMints</h3>
                      <br/>
                      <input class="subscribe-input" placeholder="Your email"/>
                      <button class="btn signup-btn">Sign Up</button>
                      <div style={{ clear: 'both' }}></div>
                    </div>
                    <div class="col-lg-4 col-md-4 v-pad"> 
                      <h2>Join the community</h2>
                      <br/>
                      <ul class="social">
                        <li><a href=""><i class="fab fa-instagram"></i></a></li>
                        <li><a href="https://discord.com/channels/852307113056272426/852312287107743795" target="_blank"><i class="fab fa-discord"></i></a></li>
                        <li><a href=""><i class="fab fa-twitter"></i></a></li>
                        <li><a href=""><i class="fab fa-telegram-plane"></i></a></li>
                        <li><a href=""><i class="fab fa-reddit-alien"></i></a></li>
                        <li><a href=""><i class="far fa-envelope"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <footer>
                    <div class="container">
                        <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12 v-pad">
                            <p>TradeMint.io</p>
                            <p><a href="about-us.html">About Us</a></p>
                            <p><a href="create-mint.html">Create a Mint with us</a></p>
                            <p><a href="careers.html">Careers</a></p>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12 v-pad">
                            <p>Marketplace</p>
                            <p><a href="most-recent-drops.html">Most Recent Drops</a></p>
                            <p><a href="most-bidded-drops.html">Most bidded drops</a></p>
                            <p><a href="nft-art.html">NFT Art</a></p>
                            <p><a href="collectibles.html">Collectibles</a></p>
                            <p><a href="collectors.html">Collectors</a></p>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12 v-pad">
                            <p>Resources</p>
                            <p><a href="https://discord.com/channels/852307113056272426/852312287107743795" target="_blank">Discord Comunity</a></p>
                            <p><a href="blog.html">Blog</a></p>
                            <p><a href="#">Subscribe to newsletter</a></p>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12 v-pad">
                            <p>Customer Care</p>
                            <p><a href="faq.html">Faq</a></p>
                            <p><a href="report-issue.html">Report issue</a></p>
                            <p><a href="contact-us.html">Contact</a></p>
                        </div>
                        </div>
                        <br/><br/>
                        <div class="copyright-sec">
                        <div class="terms-privacy">
                            <a href="">Terms & Conditions</a> &nbsp;&nbsp;<span style={{ color: '#3dbb95' }}>&bull;</span> &nbsp;&nbsp;<a href="">Privacy Policy</a>
                        </div>
                        <div class="copyright">© Copyright of Novum Global Consultancy Pte Ltd. All rights reserved.</div>
                        <div style={{ clear: 'both' }}></div>
                        </div>
                    </div>
                </footer>    
            </div>
        )
    }
}
export default Home