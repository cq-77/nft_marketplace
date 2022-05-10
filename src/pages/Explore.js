import React, {Component} from 'react';

class Explore extends Component{
    render(){
        return(
            <div>
                <section class="explore-section">
                    <div class="container">
                        <div class="row">
                        <div class="col-lg-3 col-md-4 v-pad explore-search">
                            <div class="explore-sidebar sticky">
                            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div class="panel">
                                <div className="panel-heading" role="tab" >
                                    <p class="panel-title" style={{ borderBottom: '1px solid #ddd' }}> <a role="button" data-toggle="collapse" data-parent="#accordion" href="#status" aria-expanded="false" aria-controls="status"> Status </a> </p>
                                </div>
                                <div id="status" class="panel-collapse collapse" role="tabpanel" >
                                    <div class="panel-body" style={{ borderBottom: '1px solid #ddd' }}>
                                    <div className="status-btn-wrapper"><button class="status-btn">Buy Now</button></div>
                                    <div className="status-btn-wrapper"><button class="status-btn">On Action</button></div>
                                    <div className="status-btn-wrapper"><button class="status-btn active">New</button></div>
                                    <div className="status-btn-wrapper"><button class="status-btn">Has Offers</button></div>
                                    <div style={{ clear: 'both' }}></div>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div class="panel">
                                <div class="panel-heading" role="tab" >
                                    <p class="panel-title"> <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collections" aria-expanded="false" aria-controls="status"> Collections </a> </p>
                                </div>
                                <div id="collections" class="panel-collapse collapse" role="tabpanel" >
                                    <div class="panel-body">
                                    <div class="collections-wrapper">
                                        <input class="filter" placeholder="Filter"/>
                                        <br/><br/>
                                        <table class="profile-table">
                                        <tr valign="center">
                                            <td><div class="profile-img" style={{ backgroundImage: 'url(assets/img/profile-12.jpeg)' }}></div></td>
                                            <td>Cryptopunks</td>
                                        </tr>
                                        <tr valign="center">
                                            <td><div class="profile-img" style={{ backgroundImage: 'url(assets/img/profile-10.jpeg)' }}></div></td>
                                            <td>Somnium Space VR</td>
                                        </tr>
                                        <tr valign="center">
                                            <td><div class="profile-img" style={{ backgroundImage: 'url(assets/img/profile-13.jpeg)' }}></div></td>
                                            <td>Rarible</td>
                                        </tr>
                                        </table>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-8 v-pad">
                            <h2>Trending Mints</h2>
                            <div class="h-line"></div>
                            <div class="row">
                            <div class="col-xl-7 col-lg-6 col-md-12 v-pad">
                                <img src="assets/img/img-7.jpg" alt=""/>
                                <br/><br/>
                                <div class="mint-info">
                                <div class="bid-btn-wrapper">
                                    <button class="btn blue-btn bid-btn">Bid</button>
                                </div>
                                <div class="mint-title">Lorem Ipsum Title Here</div>
                                <div class="small-profile">
                                    <div class="small-profile-img" style={{ backgroundImage: 'url(assets/img/profile-4.jpeg)' }}></div>
                                    <div class="small-profile-name">Creativeguy</div>
                                </div>
                                <div class="mint-deadline">3 days left</div>
                                <div style={{ clear: 'both' }}></div>
                                <br/>
                                <p>Edition of 4157</p>
                                <table class="mintstats-table">
                                    <tr>
                                    <td>
                                        <p class="smallest-text">Original Listing</p>
                                        <p>$0</p>
                                    </td>
                                    <td>
                                        <p class="smallest-text">Lowest Ask</p>
                                        <p>$1,000.00</p>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td>
                                        <p class="smallest-text">Original Listing</p>
                                        <p>$3,333.00</p>
                                    </td>
                                    <td>
                                        <p class="smallest-text">Last sold</p>
                                        <p>$1,000.00</p>
                                    </td>
                                    </tr>
                                </table>
                                </div>
                            </div>
                            <div class="col-xl-5 col-lg-6 col-md-12 v-pad">
                                <div class="featured-mints">
                                <div class="featured-img" style={{ backgroundImage: 'url(assets/img/img-3.jpg)' }}></div>
                                <div class="featured-info">
                                    <p>The Bitcoin Angel (Open Edition)</p>
                                    <div class="small-profile">
                                    <div class="small-profile-img" style={{ backgroundImage: 'url(assets/img/profile-4.jpeg)' }}></div>
                                    <div class="small-profile-name">Creativeguy</div>
                                    <div style={{ clear: 'both' }}></div>
                                    <p class="smaller-p">Not Accepting Offers</p>
                                    <p class="smallest-text">22 Dec 2030</p>
                                    <button class="featured-bid">Bid</button>
                                    <div class="featured-heart">
                                        <p class="smallest-text"><i class="far fa-heart"></i> 122</p>
                                    </div>
                                    <div style={{ clear: 'both' }}></div>
                                    </div>
                                </div>
                                <div style={{ clear: 'both' }}></div>
                                </div>
                                <div class="featured-mints">
                                <div class="featured-img" style={{ backgroundImage: 'url(assets/img/img-3.jpg)' }}></div>
                                <div class="featured-info">
                                    <p>The Bitcoin Angel (Open Edition)</p>
                                    <div class="small-profile">
                                    <div class="small-profile-img" style={{ backgroundImage: 'url(assets/img/profile-4.jpeg)' }}></div>
                                    <div class="small-profile-name">Creativeguy</div>
                                    <div style={{ clear: 'both' }}></div>
                                    <p class="smaller-p">Not Accepting Offers</p>
                                    <p class="smallest-text">22 Dec 2030</p>
                                    <button class="featured-bid">Bid</button>
                                    <div class="featured-heart">
                                        <p class="smallest-text"><i class="fas fa-heart" style={{ color: '#38adcc' }}></i> 122</p>
                                    </div>
                                    <div style={{ clear: 'both' }}></div>
                                    </div>
                                </div>
                                <div style={{ clear: 'both' }}></div>
                                </div>
                                <div class="featured-mints">
                                <div class="featured-img" style={{ backgroundImage: 'url(assets/img/img-3.jpg)' }}></div>
                                <div class="featured-info">
                                    <p>The Bitcoin Angel (Open Edition)</p>
                                    <div class="small-profile">
                                    <div class="small-profile-img" style={{ backgroundImage: 'url(assets/img/profile-4.jpeg)' }}></div>
                                    <div class="small-profile-name">Creativeguy</div>
                                    <div style={{ clear: 'both' }}></div>
                                    <p class="smaller-p">Not Accepting Offers</p>
                                    <p class="smallest-text">22 Dec 2030</p>
                                    <button class="featured-bid">Bid</button>
                                    <div class="featured-heart">
                                        <p class="smallest-text"><i class="far fa-heart"></i> 122</p>
                                    </div>
                                    <div style={{ clear: 'both' }}></div>
                                    </div>
                                </div>
                                <div style={{ clear: 'both' }}></div>
                                </div>
                                <div class="featured-mints">
                                <div class="featured-img" style={{ backgroundImage: 'url(assets/img/img-3.jpg)' }}></div>
                                <div class="featured-info">
                                    <p>The Bitcoin Angel (Open Edition)</p>
                                    <div class="small-profile">
                                    <div class="small-profile-img" style={{ backgroundImage: 'url(assets/img/profile-4.jpeg)' }}></div>
                                    <div class="small-profile-name">Creativeguy</div>
                                    <div style={{ clear: 'both' }}></div>
                                    <p class="smaller-p">Not Accepting Offers</p>
                                    <p class="smallest-text">22 Dec 2030</p>
                                    <button class="featured-bid">Bid</button>
                                    <div class="featured-heart">
                                        <p class="smallest-text"><i class="fas fa-heart" style={{ color: '#38adcc' }}></i> 122</p>
                                    </div>
                                    <div style={{ clear: 'both' }}></div>
                                    </div>
                                </div>
                                <div style={{ clear: 'both' }}></div>
                                </div>
                            </div>
                            </div>
                            <br/><br/>
                            <br/><br/>
                            <h2>Latest Mints</h2>
                            <div class="h-line"></div>
                            <div class="row" style={{ textAlign: 'center' }}>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.3s">
                                <img src="assets/img/img-1.jpg" alt=""/>
                                <br/>
                                <div class="painting-info">
                                <p>The Bitcoin Angel (Open Edition)</p>
                                <p class="smallest-text">Last Sold</p>
                                <p class="black-text bold-text">$900.00</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-6 v-pad  wow fadeInUp" data-wow-delay="0.6s">
                                <img src="assets/img/img-2.jpg" alt=""/>
                                <br/>
                                <div class="painting-info">
                                <p>Grafitti Children on Bike</p>
                                <p class="smallest-text">Last Sold</p>
                                <p class="black-text bold-text">$900.00</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-6 v-pad  wow fadeInUp" data-wow-delay="0.9s">
                                <img src="assets/img/img-3.jpg" alt=""/>
                                <br/>
                                <div class="painting-info">
                                <p>The Bitcoin Angel (Open Edition)</p>
                                <p class="smallest-text">Last Sold</p>
                                <p class="black-text bold-text">$900.00</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-6 v-pad  wow fadeInUp" data-wow-delay="0.3s">
                                <img src="assets/img/img-4.jpg" alt=""/>
                                <br/>
                                <div class="painting-info">
                                <p>Colorful Oil Paint Abstract</p>
                                <p class="smallest-text">Last Sold</p>
                                <p class="black-text bold-text">$900.00</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-6 v-pad  wow fadeInUp" data-wow-delay="0.6s">
                                <img src="assets/img/img-5.jpg" alt=""/>
                                <br/>
                                <div class="painting-info">
                                <p>Golden Nature Sunset Illustration</p>
                                <p class="smallest-text">Last Sold</p>
                                <p class="black-text bold-text">$900.00</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-6 v-pad  wow fadeInUp" data-wow-delay="0.9s">
                                <img src="assets/img/img-6.jpg" alt=""/>
                                <br/>
                                <div class="painting-info">
                                <p>Colorful Instruments</p>
                                <p class="smallest-text">Last Sold</p>
                                <p class="black-text bold-text">$900.00</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
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
export default Explore