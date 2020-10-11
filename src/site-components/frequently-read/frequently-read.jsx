import React from 'react'

const FrequentlyRead = props => {

    return (
        <div className="col-lg-12">
            <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                <div className="iq-card-header d-flex justify-content-between align-items-center position-relative">
                    <div className="iq-header-title">
                        <h4 className="card-title mb-0">Favorite Reads</h4>
                    </div>
                    <div className="iq-card-header-toolbar d-flex align-items-center">
                        <a href="category.html" className="btn btn-sm btn-primary view-more">View More</a>
                    </div>
                </div>
                <div className="iq-card-body favorites-contens">
                    <ul id="favorites-slider" className="list-inline p-0 mb-0 row">
                        <li className="col-md-4">
                            <div className="d-flex align-items-center">
                                <div className="col-5 p-0 position-relative">
                                    <a href="#">
                                        <img src="images/favorite/01.jpg" className="img-fluid rounded w-100" alt="" />
                                    </a>
                                </div>
                                <div className="col-7">
                                    <h5 className="mb-2">Every Book is a new Wonderful Travel..</h5>
                                    <p className="mb-2">Author : Pedro Araez</p>
                                    <div className="d-flex justify-content-between align-items-center text-dark font-size-13">
                                        <span>Reading</span>
                                        <span className="mr-4">78%</span>
                                    </div>
                                    <div className="iq-progress-bar-linear d-inline-block w-100">
                                        <div className="iq-progress-bar iq-bg-primary">
                                            <span className="bg-primary" data-percent="78"></span>
                                        </div>
                                    </div>
                                    <a href="#" className="text-dark">Read Now<i className="ri-arrow-right-s-line"></i></a>
                                </div>
                            </div>
                        </li>
                        <li className="col-md-4">
                            <div className="d-flex align-items-center">
                                <div className="col-5 p-0 position-relative">
                                    <a href="#">
                                        <img src="images/favorite/02.jpg" className="img-fluid rounded w-100" alt="" />
                                    </a>
                                </div>
                                <div className="col-7">
                                    <h5 className="mb-2">Casey Christie night book into find...</h5>
                                    <p className="mb-2">Author : Michael klock</p>
                                    <div className="d-flex justify-content-between align-items-center text-dark font-size-13">
                                        <span>Reading</span>
                                        <span className="mr-4">78%</span>
                                    </div>
                                    <div className="iq-progress-bar-linear d-inline-block w-100">
                                        <div className="iq-progress-bar iq-bg-danger">
                                            <span className="bg-danger" data-percent="78"></span>
                                        </div>
                                    </div>
                                    <a href="#" className="text-dark">Read Now<i className="ri-arrow-right-s-line"></i></a>
                                </div>
                            </div>
                        </li>
                        <li className="col-md-4">
                            <div className="d-flex align-items-center">
                                <div className="col-5 p-0 position-relative">
                                    <a href="#">
                                        <img src="images/favorite/03.jpg" className="img-fluid rounded w-100" alt="" />
                                    </a>
                                </div>
                                <div className="col-7">
                                    <h5 className="mb-2">The Secret to English Busy People..</h5>
                                    <p className="mb-2">Author : Daniel Ace</p>
                                    <div className="d-flex justify-content-between align-items-center text-dark font-size-13">
                                        <span>Reading</span>
                                        <span className="mr-4">78%</span>
                                    </div>
                                    <div className="iq-progress-bar-linear d-inline-block w-100">
                                        <div className="iq-progress-bar iq-bg-info">
                                            <span className="bg-info" data-percent="78"></span>
                                        </div>
                                    </div>
                                    <a href="#" className="text-dark">Read Now<i className="ri-arrow-right-s-line"></i></a>
                                </div>
                            </div>
                        </li>
                        <li className="col-md-4">
                            <div className="d-flex align-items-center">
                                <div className="col-5 p-0 position-relative">
                                    <a href="#">
                                        <img src="images/favorite/04.jpg" className="img-fluid rounded w-100" alt="" />
                                    </a>
                                </div>
                                <div className="col-7">
                                    <h5 className="mb-2">The adventures of Robins books...</h5>
                                    <p className="mb-2">Author : Luka Afton</p>
                                    <div className="d-flex justify-content-between align-items-center text-dark font-size-13">
                                        <span>Reading</span>
                                        <span className="mr-4">78%</span>
                                    </div>
                                    <div className="iq-progress-bar-linear d-inline-block w-100">
                                        <div className="iq-progress-bar iq-bg-success">
                                            <span className="bg-success" data-percent="78"></span>
                                        </div>
                                    </div>
                                    <a href="#" className="text-dark">Read Now<i className="ri-arrow-right-s-line"></i></a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default FrequentlyRead