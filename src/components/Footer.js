import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <div>
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
export default Footer