const GigDetails = () => {
    return(
        <div>
        <section style={{paddingTop: "120px", paddingBottom: "60px"}}>
           <div class="container">
               <div class="row">
               <div class="col-lg-5 col-md-4 col-sm-12 v-pad">
                   <div class="gigdetail-img">
                   <div class="gigdetail-img-center">
                       <img src="assets/img/cover1.jpg" alt=""/>
                   </div>
                   </div>
               </div>
               <div class="col-lg-7 col-md-8 col-sm-12 v-pad">
                   <h2>Gigs Title Here Lorem Ipsum</h2>
                   <div class="small-profile">
                   <div class="small-profile-img" style={{backgroundImage: 'url(img/profile-4.jpeg)'}}></div>
                   <div class="small-profile-name">Creativeguy</div>
                   </div>
                   <div class="nft-snippets"><i class="fas fa-check"></i> 100 gigs completed</div>
                   <div class="nft-snippets"><i class="fas fa-star"></i> <span class="black-text bold-text" style={{fontSize: '13px'}}>4.9</span> (145)</div>
                   <div style={{clear: 'both'}}></div>
                   <br/>
                   <p class="black-text">Edition of 4157</p>
                   <br/><br/>
                   <div class="ethereum-icon"><i class="fab fa-ethereum"></i></div>
                   <div class="ethereum-prize"><h2>0.525 <span style={{fontWeight: '400', fontSize: '18px'}}>($1,299.65)</span></h2></div>
                   <div style={{clear: 'both'}}></div>
                   <br/>
                   <button class="btn blue-btn gig-btn">Hire</button>
                   <button class="btn gig-btn">Message</button>
                   <div class="gig-share">
                   <a href="" class="share-icon"><i class="fas fa-share-alt"></i></a>
                   </div>
                   <div class="gig-heart">
                   <p class="smallest-text"><i class="far fa-heart"></i> 122</p>
                   </div>
                   <div style={{clear: 'both'}}></div>
                   <br/><br/>
                   <div class="coin-detail">
                   <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                       <div class="panel">
                           <div class="panel-heading" role="tab" >
                           <p class="panel-title" style={{borderBottom: '1px solid #ddd'}}> <a role="button" data-toggle="collapse" data-parent="#accordion" href="#description" aria-expanded="false" aria-controls="status"> Description </a> </p>
                           </div>
                           <div id="description" class="panel-collapse collapse" role="tabpanel" >
                           <div class="panel-body" style={{borderBottom: '1px solid #ddd'}}>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a urna nunc. Praesent congue diam in aliquam interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam fermentum, sapien at ultrices porttitor, lacus nulla commodo magna, eget dignissim eros massa quis urna.
                           </div>
                       </div>
                       </div>
                   </div>
                   <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                       <div class="panel">
                           <div class="panel-heading" role="tab" >
                           <p class="panel-title" style={{borderBottom: '1px solid #ddd'}}> <a role="button" data-toggle="collapse" data-parent="#accordion" href="#chaininfo" aria-expanded="false" aria-controls="status"> Chain Info </a> </p>
                           </div>
                           <div id="chaininfo" class="panel-collapse collapse" role="tabpanel" >
                           <div class="panel-body">
                               <table>
                                   <tr valign="top">
                                   <td>Contract Address</td>
                                   <td>0xedb6...e452</td>
                                    </tr>
                                    <tr valign="top">
                                        <td>Token ID</td>
                                        <td>2987</td>
                                    </tr>
                                    <tr valign="top">
                                        <td>Blockchain</td>
                                        <td>Ethereum</td>
                                    </tr>
                               </table>
                           </div>
                       </div>
                       </div>
                   </div>
                   </div>
               </div>
               </div>
           </div>
           </section>

           <section style={{paddingTop: '0'}}>
           <div class="container">
               <div class="gig-table" style={{overflowX: 'auto'}}>
               <table>
                   <tr valign="top">
                   <th>
                       <div class="small-profile-img" style={{backgroundImage: 'url(img/profile-12.jpeg)'}}></div>
                       <div class="small-profile-name">CryptoPunks</div>
                   </th>
                   <th>
                       <p class="bold-text">Excellent work!</p>
                       <br/>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique bibendum erat vitae egestas. Pellentesque mattis nisl nunc, non rutrum libero pretium id. Sed commodo id ipsum vel imperdiet. Praesent at arcu enim. Nunc neque tellus, lobortis id turpis ut, varius volutpat ante. Fusce rhoncus placerat est ut feugiat.</p>
                   </th>
                   </tr>
                   <tr valgn="top">
                   <td>i
                       <div class="small-profile-img" style={{backgroundImage: 'url(img/profile-12.jpeg)'}}></div>
                       <div class="small-profile-name">CryptoPunks</div>
                   </td>
                   <td>
                       <p class="bold-text black-text">Excellent work!</p>
                       <br/>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique bibendum erat vitae egestas. Pellentesque mattis nisl nunc, non rutrum libero pretium id. Sed commodo id ipsum vel imperdiet. Praesent at arcu enim. Nunc neque tellus, lobortis id turpis ut, varius volutpat ante. Fusce rhoncus placerat est ut feugiat.</p>
                   </td>
                   </tr>
                   <tr valign="top">
                   <td>
                       <div class="small-profile-img" style={{backgroundImage: 'url(img/profile-12.jpeg)'}}></div>
                       <div class="small-profile-name">CryptoPunks</div>
                   </td>
                   <td>
                       <p class="bold-text black-text">Excellent work!</p>
                       <br/>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique bibendum erat vitae egestas. Pellentesque mattis nisl nunc, non rutrum libero pretium id. Sed commodo id ipsum vel imperdiet. Praesent at arcu enim. Nunc neque tellus, lobortis id turpis ut, varius volutpat ante. Fusce rhoncus placerat est ut feugiat.</p>
                   </td>
                   </tr>
                   <tr valign="top">
                   <td>
                       <div class="small-profile-img" style={{backgroundImage: 'url(img/profile-12.jpeg)'}}></div>
                       <div class="small-profile-name">CryptoPunks</div>
                   </td>
                   <td>
                       <p class="bold-text black-text">Excellent work!</p>
                       <br/>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique bibendum erat vitae egestas. Pellentesque mattis nisl nunc, non rutrum libero pretium id. Sed commodo id ipsum vel imperdiet. Praesent at arcu enim. Nunc neque tellus, lobortis id turpis ut, varius volutpat ante. Fusce rhoncus placerat est ut feugiat.</p>
                   </td>
                   </tr>
                   <tr valign="top">
                   <td>
                       <div class="small-profile-img" style={{backgroundImage: 'url(img/profile-12.jpeg)'}}></div>
                       <div class="small-profile-name">CryptoPunks</div>
                   </td>
                   <td>
                       <p class="bold-text black-text">Excellent work!</p>
                       <br/>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique bibendum erat vitae egestas. Pellentesque mattis nisl nunc, non rutrum libero pretium id. Sed commodo id ipsum vel imperdiet. Praesent at arcu enim. Nunc neque tellus, lobortis id turpis ut, varius volutpat ante. Fusce rhoncus placerat est ut feugiat.</p>
                   </td>
                   </tr>
                   <tr valign="top">
                   <td>
                       <div class="small-profile-img" style={{backgroundImage: 'url(img/profile-12.jpeg)'}}></div>
                       <div class="small-profile-name">CryptoPunks</div>
                   </td>
                   <td>
                       <p class="bold-text black-text">Excellent work!</p>
                       <br/>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique bibendum erat vitae egestas. Pellentesque mattis nisl nunc, non rutrum libero pretium id. Sed commodo id ipsum vel imperdiet. Praesent at arcu enim. Nunc neque tellus, lobortis id turpis ut, varius volutpat ante. Fusce rhoncus placerat est ut feugiat.</p>
                   </td>
                   </tr>
                   <tr valign="top">
                   <td>
                       <div class="small-profile-img" style={{backgroundImage: 'url(img/profile-12.jpeg)'}}></div>
                       <div class="small-profile-name">CryptoPunks</div>
                   </td>
                   <td>
                       <p class="bold-text black-text">Excellent work!</p>
                       <br/>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique bibendum erat vitae egestas. Pellentesque mattis nisl nunc, non rutrum libero pretium id. Sed commodo id ipsum vel imperdiet. Praesent at arcu enim. Nunc neque tellus, lobortis id turpis ut, varius volutpat ante. Fusce rhoncus placerat est ut feugiat.</p>
                   </td>
                   </tr>
                   <tr valign="top">
                   <td>
                       <div class="small-profile-img" style={{backgroundImage: 'url(img/profile-12.jpeg)'}}></div>
                       <div class="small-profile-name">CryptoPunks</div>
                   </td>
                   <td>
                       <p class="bold-text black-text">Excellent work!</p>
                       <br/>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique bibendum erat vitae egestas. Pellentesque mattis nisl nunc, non rutrum libero pretium id. Sed commodo id ipsum vel imperdiet. Praesent at arcu enim. Nunc neque tellus, lobortis id turpis ut, varius volutpat ante. Fusce rhoncus placerat est ut feugiat.</p>
                   </td>
                   </tr>
               </table>
               </div>
               <br/><br/><br/><br/><br/>
               <div style={{textAlign: 'center'}}>
               <h4 class="black-text bold-text">Past Works</h4>
               <br/>
               <div class="marketplace-col wow fadeInUp" data-wow-delay="0.3s">
                   <img src="assets/img/cover1.jpg" alt=""/>
                   <div class="marketplace-info" style={{paddingTop: '40px'}}>
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
                   <div class="marketplace-info" style={{paddingTop: '40px'}}>
                   <div class="marketplace-profile"><img src="assets/img/profile-1.jpg" alt=""/></div>
                   <p class="bold-text black-text">@johndoe</p>
                   <p class="smallest-text"><span class="bold-text black-text"><i class="fas fa-star"></i> 5.0</span> (145)</p>
                   <h4>I will make an effective  TV commercial with live...</h4>
                   </div>
                   <div class="m-border"></div>
                   <div class="marketplace-info">
                   <p class="smallest-text">Starting at</p>
                   <p class="black-text bold-text">$80.00</p>
                   <p class="smallest-text"><i class="fas fa-heart" style={{color: '#38adcc'}}></i> 122</p>
                   </div>
               </div>
               <div class="marketplace-col wow fadeInUp" data-wow-delay="0.9s">
                   <img src="assets/img/cover1.jpg" alt=""/>
                   <div class="marketplace-info" style={{paddingTop: '40px'}}>
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
                   <div class="marketplace-info" style={{paddingTop: '40px'}}>
                   <div class="marketplace-profile"><img src="assets/img/profile-4.jpeg" alt=""/></div>
                   <p class="bold-text black-text">@johndoe</p>
                   <p class="smallest-text"><span class="bold-text black-text"><i class="fas fa-star"></i> 5.0</span> (145)</p>
                   <h4>I will make an effective  TV commercial with live...</h4>
                   </div>
                   <div class="m-border"></div>
                   <div class="marketplace-info">
                   <p class="smallest-text">Starting at</p>
                   <p class="black-text bold-text">$80.00</p>
                   <p class="smallest-text"><i class="fas fa-heart" style={{color: '#38adcc'}}></i> 122</p>
                   </div>
               </div>
               <div class="marketplace-col  wow fadeInUp" data-wow-delay="1.5s">
                   <img src="assets/img/cover1.jpg" alt=""/>
                   <div class="marketplace-info" style={{paddingTop: '40px'}}>
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
               <div style={{clear: 'both'}}></div>
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
export default GigDetails