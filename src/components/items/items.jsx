import React from 'react'

const Items = ({ items }) => {

    if (!items) return null;

    return items.map((item, index) => (
        <div key={item.id} className="col-sm-6 col-md-4 col-lg-3">
            <div className="iq-card iq-card-block iq-card-stretch iq-card-height browse-bookcontent">
                <div className="iq-card-body p-0">
                    <div className="d-flex align-items-center">
                        <div className="col-6 p-0 position-relative image-overlap-shadow">
                            <a href="#"><img className="img-fluid rounded w-100"
                                src={item.coverImage} alt={item.title} /></a>
                            <div className="view-book">
                                <a href="#" className="btn btn-sm btn-white">Читать</a>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-2">
                                <h6 className="mb-1">{item.title}</h6>
                                <p className="font-size-13 line-height mb-1">
                                    {item.author != '-' ? item.author : null}
                                </p>
                                <div className="d-block line-height">
                                    <span className="font-size-11 text-warning">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="price d-flex align-items-center">
                                {/* <span className="pr-1 old-price">{item.price}₽</span> */}
                                {
                                    item.year !== 1 ? <span>Год: <b>{item.year}</b></span> : null
                                }

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))
}

export default Items;