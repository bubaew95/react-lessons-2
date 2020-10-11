import React from 'react'

const RecommendedBooks = props => {

    return (
        <>
            <div className="col-lg-6">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                    <div className="iq-card-header d-flex justify-content-between mb-0">
                        <div className="iq-header-title">
                            <h4 className="card-title">Featured Books</h4>
                        </div>
                        <div className="iq-card-header-toolbar d-flex align-items-center">
                            <div className="dropdown">
                                <span className="dropdown-toggle p-0 text-body" id="dropdownMenuButton2" data-toggle="dropdown">
                                    This Week<i className="ri-arrow-down-s-fill"></i>
                                </span>
                                <div className="dropdown-menu dropdown-menu-right shadow-none" aria-labelledby="dropdownMenuButton2">
                                    <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2"></i>View</a>
                                    <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                    <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2"></i>Edit</a>
                                    <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2"></i>Print</a>
                                    <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2"></i>Download</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="iq-card-body">
                        <div className="row align-items-center">
                            <div className="col-sm-5 pr-0">
                                <a href="#"><img className="img-fluid rounded w-100"
                                    src="images/page-img/featured-book.png" alt="" /></a>
                            </div>
                            <div className="col-sm-7 mt-3 mt-sm-0">
                                <h4 className="mb-2">Casey Christie night book into find...</h4>
                                <p className="mb-2">Author: Gheg origin</p>
                                <div className="mb-2 d-block">
                                    <span className="font-size-12 text-warning">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </span>
                                </div>
                                <span className="text-dark mb-3 d-block">Lorem Ipsum is simply dummy test in find a of the printing and
                    typeset ing industry into end.</span>
                                <button type="submit" className="btn btn-primary learn-more">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                    <div className="iq-card-header d-flex justify-content-between mb-0">
                        <div className="iq-header-title">
                            <h4 className="card-title">Featured Writer</h4>
                        </div>
                        <div className="iq-card-header-toolbar d-flex align-items-center">
                            <div className="dropdown">
                                <span className="dropdown-toggle p-0 text-body" id="dropdownMenuButton3" data-toggle="dropdown">
                                    This Week<i className="ri-arrow-down-s-fill"></i>
                                </span>
                                <div className="dropdown-menu dropdown-menu-right shadow-none" aria-labelledby="dropdownMenuButton3">
                                    <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2"></i>View</a>
                                    <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                    <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2"></i>Edit</a>
                                    <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2"></i>Print</a>
                                    <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2"></i>Download</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="iq-card-body">
                        <ul className="list-inline row mb-0 align-items-center iq-scrollable-block">
                            <li className="col-sm-6 d-flex mb-3 align-items-center">
                                <div className="icon iq-icon-box mr-3">
                                    <a href="#"><img className="img-fluid avatar-60 rounded-circle"
                                        src="images/user/01.jpg" alt="" /></a>
                                </div>
                                <div className="mt-1">
                                    <h6>Brandon Guidelines</h6>
                                    <p className="mb-0 text-primary">Publish Books: <span className="text-body">2831</span></p>
                                </div>
                            </li>
                            <li className="col-sm-6 d-flex mb-3 align-items-center">
                                <div className="icon iq-icon-box mr-3">
                                    <a href="#"><img className="img-fluid avatar-60 rounded-circle"
                                        src="images/user/02.jpg" alt="" /></a>
                                </div>
                                <div className="mt-1">
                                    <h6>Hugh Millie-Yate</h6>
                                    <p className="mb-0 text-primary">Publish Books: <span className="text-body">432</span></p>
                                </div>
                            </li>
                            <li className="col-sm-6 d-flex mb-3 align-items-center">
                                <div className="icon iq-icon-box mr-3">
                                    <a href="#"><img className="img-fluid avatar-60 rounded-circle"
                                        src="images/user/03.jpg" alt="" /></a>
                                </div>
                                <div className="mt-1">
                                    <h6>Nathaneal Down</h6>
                                    <p className="mb-0 text-primary">Publish Books: <span className="text-body">5471</span></p>
                                </div>
                            </li>
                            <li className="col-sm-6 d-flex mb-3 align-items-center">
                                <div className="icon iq-icon-box mr-3">
                                    <a href="#"><img className="img-fluid avatar-60 rounded-circle"
                                        src="images/user/04.jpg" alt="" /></a>
                                </div>
                                <div className="mt-1">
                                    <h6>Thomas R. Toe</h6>
                                    <p className="mb-0 text-primary">Publish Books: <span className="text-body">8764</span></p>
                                </div>
                            </li>
                            <li className="col-sm-6 d-flex mb-3 align-items-center">
                                <div className="icon iq-icon-box mr-3">
                                    <a href="#"><img className="img-fluid avatar-60 rounded-circle"
                                        src="images/user/05.jpg" alt="" /></a>
                                </div>
                                <div className="mt-1">
                                    <h6>Druid Wensleydale</h6>
                                    <p className="mb-0 text-primary">Publish Books: <span className="text-body">8987</span></p>
                                </div>
                            </li>
                            <li className="col-sm-6 d-flex mb-3 align-items-center">
                                <div className="icon iq-icon-box mr-3">
                                    <a href="#"><img className="img-fluid avatar-60 rounded-circle"
                                        src="images/user/06.jpg" alt="" /></a>
                                </div>
                                <div className="mt-1">
                                    <h6>Natalya Undgrowth</h6>
                                    <p className="mb-0 text-primary">Publish Books: <span className="text-body">2831</span></p>
                                </div>
                            </li>
                            <li className="col-sm-6 d-flex mb-3 align-items-center">
                                <div className="icon iq-icon-box mr-3">
                                    <a href="#"><img className="img-fluid avatar-60 rounded-circle"
                                        src="images/user/07.jpg" alt="" /></a>
                                </div>
                                <div className="mt-1">
                                    <h6>Desmond Eagle</h6>
                                    <p className="mb-0 text-primary">Publish Books: <span className="text-body">4324</span></p>
                                </div>
                            </li>
                            <li className="col-sm-6 d-flex mb-3 align-items-center">
                                <div className="icon iq-icon-box mr-3">
                                    <a href="#"><img className="img-fluid avatar-60 rounded-circle"
                                        src="images/user/08.jpg" alt="" /></a>
                                </div>
                                <div className="mt-1">
                                    <h6>Lurch Schpellchek</h6>
                                    <p className="mb-0 text-primary">Publish Books: <span className="text-body">012</span></p>
                                </div>
                            </li>
                            <li className="col-sm-6 d-flex mb-3 align-items-center">
                                <div className="icon iq-icon-box mr-3">
                                    <a href="#"><img className="img-fluid avatar-60 rounded-circle"
                                        src="images/user/09.jpg" alt="" /></a>
                                </div>
                                <div className="mt-1">
                                    <h6>Natalya Undgrowth</h6>
                                    <p className="mb-0 text-primary">Publish Books: <span className="text-body">2831</span></p>
                                </div>
                            </li>
                            <li className="col-sm-6 d-flex mb-3 align-items-center">
                                <div className="icon iq-icon-box mr-3">
                                    <a href="#"><img className="img-fluid avatar-60 rounded-circle"
                                        src="images/user/10.jpg" alt="" /></a>
                                </div>
                                <div className="mt-1">
                                    <h6>Natalya Undgrowth</h6>
                                    <p className="mb-0 text-primary">Publish Books: <span className="text-body">2831</span></p>
                                </div>
                            </li>
                            <li className="col-sm-6 d-flex mb-3 align-items-center">
                                <div className="icon iq-icon-box mr-3">
                                    <a href="#"><img className="img-fluid avatar-60 rounded-circle"
                                        src="images/user/11.jpg" alt="" /></a>
                                </div>
                                <div className="mt-1">
                                    <h6>Natalya Undgrowth</h6>
                                    <p className="mb-0 text-primary">Publish Books: <span className="text-body">2831</span></p>
                                </div>
                            </li>
                            <li className="col-sm-6 d-flex mb-3 align-items-center">
                                <div className="icon iq-icon-box mr-3">
                                    <a href="#"><img className="img-fluid avatar-60 rounded-circle"
                                        src="images/user/01.jpg" alt="" /></a>
                                </div>
                                <div className="mt-1">
                                    <h6>Natalya Undgrowth</h6>
                                    <p className="mb-0 text-primary">Publish Books: <span className="text-body">2831</span></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}


export default RecommendedBooks;