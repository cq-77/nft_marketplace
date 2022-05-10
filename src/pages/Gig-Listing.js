const GigListing = () => {
        return(
            <div> 
                <section class="explore-section">
                    <div class="container">
                        <div class="row">
                        <div class="col-lg-3 col-md-4 v-pad explore-search">
                            <div class="explore-sidebar sticky">
                            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div class="panel">
                                <div class="panel-heading" role="tab" >
                                    <p class="panel-title" style={{borderBottom: "1px solid #ddd"}}> <a role="button" data-toggle="collapse" data-parent="#accordion" href="#status" aria-expanded="false" aria-controls="status"> Filter Here </a> </p>
                                </div>
                                <div id="status" class="panel-collapse collapse" role="tabpanel" >
                                    <div class="panel-body">
                                    <div class="status-btn-wrapper"><button class="status-btn">Buy Now</button></div>
                                    <div class="status-btn-wrapper"><button class="status-btn">On Action</button></div>
                                    <div class="status-btn-wrapper"><button class="status-btn active">New</button></div>
                                    <div class="status-btn-wrapper"><button class="status-btn">Has Offers</button></div>
                                    <div style={{clear: "both"}}></div>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div class="panel">
                                <div class="panel-heading" role="tab" >
                                    <p class="panel-title"> <a role="button" data-toggle="collapse" data-parent="#accordion" href="#sellerdetail" aria-expanded="false" aria-controls="status"> Seller Detail </a> </p>
                                </div>
                                <div id="sellerdetail" class="panel-collapse collapse" role="tabpanel" >
                                    <div class="panel-body" >
                                    <label class="checkmark-wrapper">One
                                        <input type="checkbox" checked="checked" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkmark-wrapper">Two
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkmark-wrapper">Three
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkmark-wrapper">Four
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div class="panel">
                                <div class="panel-heading" role="tab" >
                                    <p class="panel-title"> <a role="button" data-toggle="collapse" data-parent="#accordion" href="#otherfilter" aria-expanded="false" aria-controls="status"> Other Filter </a> </p>
                                </div>
                                <div id="otherfilter" class="panel-collapse collapse" role="tabpanel" >
                                    <div class="panel-body">
                                    <label class="checkmark-wrapper">One
                                        <input type="checkbox" checked="checked" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkmark-wrapper">Two
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkmark-wrapper">Three
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkmark-wrapper">Four
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-lg-9 col-md-8 v-pad">
                            <div class="tab">
                            <button class="tablinks" onclick="openTab(event, 'architects')" id="defaultOpen">Architects</button>
                            <button class="tablinks" onclick="openTab(event, 'artists')">Artists (Commisioned Work)</button>
                            <button class="tablinks" onclick="openTab(event, 'crypto')">Crypto Developers</button>
                            <button class="tablinks" onclick="openTab(event, 'djs')">DJ's</button>
                            <button class="tablinks" onclick="openTab(event, 'designers')">Designers</button>
                            </div>
                            <br/>
                            <div id="architects" class="tabcontent">
                            <div class="gig-dropdown">
                                <div class="dropdown">
                                <button class="dropbtn">Sort by</button>
                                <div class="dropdown-content">
                                    <a href="#">Popularity</a>
                                    <a href="#">Rating</a>
                                    <a href="#">Lowest Price</a>
                                    <a href="#">Highest Price</a>
                                </div>
                                </div>
                            </div>
                            <h2>Gigs Category here</h2>
                            <div class="h-line"></div>
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.3s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.6s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{ paddingTop: "40px" }}>
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
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.9s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.3s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.6s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.9s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                            </div>
                            </div>
                            <div id="artists" class="tabcontent">
                            <div class="gig-dropdown">
                                <div class="dropdown">
                                <button class="dropbtn">Sort by</button>
                                <div class="dropdown-content">
                                    <a href="#">Popularity</a>
                                    <a href="#">Rating</a>
                                    <a href="#">Lowest Price</a>
                                    <a href="#">Highest Price</a>
                                </div>
                                </div>
                            </div>
                            <h2>Gigs Category here</h2>
                            <div class="h-line"></div>
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.3s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.6s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.9s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.3s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.6s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.9s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                            </div>
                            </div>
                            <div id="crypto" class="tabcontent">
                            <div class="gig-dropdown">
                                <div class="dropdown">
                                <button class="dropbtn">Sort by</button>
                                <div class="dropdown-content">
                                    <a href="#">Popularity</a>
                                    <a href="#">Rating</a>
                                    <a href="#">Lowest Price</a>
                                    <a href="#">Highest Price</a>
                                </div>
                                </div>
                            </div>
                            <h2>Gigs Category here</h2>
                            <div class="h-line"></div>
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.3s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.6s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.9s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.3s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.6s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.9s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                            </div>
                            </div>
                            <div id="djs" class="tabcontent">
                            <div class="gig-dropdown">
                                <div class="dropdown">
                                <button class="dropbtn">Sort by</button>
                                <div class="dropdown-content">
                                    <a href="#">Popularity</a>
                                    <a href="#">Rating</a>
                                    <a href="#">Lowest Price</a>
                                    <a href="#">Highest Price</a>
                                </div>
                                </div>
                            </div>
                            <h2>Gigs Category here</h2>
                            <div class="h-line"></div>
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.3s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.6s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.9s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.3s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.6s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.9s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                            </div>
                            </div>
                            <div id="designers" class="tabcontent">
                            <div class="gig-dropdown">
                                <div class="dropdown">
                                <button class="dropbtn">Sort by</button>
                                <div class="dropdown-content">
                                    <a href="#">Popularity</a>
                                    <a href="#">Rating</a>
                                    <a href="#">Lowest Price</a>
                                    <a href="#">Highest Price</a>
                                </div>
                                </div>
                            </div>
                            <h2>Gigs Category here</h2>
                            <div class="h-line"></div>
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.3s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.6s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.9s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.3s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.6s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6 v-pad wow fadeInUp" data-wow-delay="0.9s">
                                <img src="assets/img/cover1.jpg" alt=""/>
                                <div class="marketplace-info" style={{paddingTop: "40px"}}>
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
export default GigListing
    