import React from "react";
const Blog = () => {
    return (
        <>

            <section className="blog-one blog-page pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="blog-one__single">
                                <div className="blog-one__image">
                                    <img src="/assets/images/img/bl1.jpg" alt="" />
                                    <a className="blog-one__plus" href="news-details.html">
                                        <i className="kipso-icon-plus-symbol" />
                                    </a>
                                </div>
                                <div className="blog-one__content text-center">
                                    <div className="blog-one__meta">
                                        <a data-toggle="tooltip" data-placement="top" title="Posted On Jan 19" href="#">
                                            <i className="fa fa-calendar-alt" />
                                        </a>
                                        <a data-toggle="tooltip" data-placement="top" title="No Comments" href="#">
                                            <i className="fa fa-comments" />
                                        </a>
                                        <a data-toggle="tooltip" data-placement="top" title="Posted By Admin" href="#">
                                            <i className="fa fa-user" />
                                        </a>
                                    </div>
                                    <h2 className="blog-one__title">
                                        <a href="news-details.html">Summer high school journalism camp</a>
                                    </h2>
                                    <p className="blog-one__text">Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros.</p>
                                    <a href="news-details.html" className="blog-one__link">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-one__single">
                                <div className="blog-one__image">
                                    <img src="/assets/images/img/bl1.jpg" alt="" />
                                    <a className="blog-one__plus" href="news-details.html">
                                        <i className="kipso-icon-plus-symbol" />
                                    </a>
                                </div>
                                <div className="blog-one__content text-center">
                                    <div className="blog-one__meta">
                                        <a data-toggle="tooltip" data-placement="top" title="Posted On Jan 19" href="#">
                                            <i className="fa fa-calendar-alt" />
                                        </a>
                                        <a data-toggle="tooltip" data-placement="top" title="No Comments" href="#">
                                            <i className="fa fa-comments" />
                                        </a>
                                        <a data-toggle="tooltip" data-placement="top" title="Posted By Admin" href="#">
                                            <i className="fa fa-user" />
                                        </a>
                                    </div>
                                    <h2 className="blog-one__title">
                                        <a href="news-details.html">Get a tips to develop a quality education</a>
                                    </h2>
                                    <p className="blog-one__text">Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros.</p>
                                    <a href="news-details.html" className="blog-one__link">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-one__single">
                                <div className="blog-one__image">
                                    <img src="/assets/images/img/bl1.jpg" alt="" />
                                    <a className="blog-one__plus" href="news-details.html">
                                        <i className="kipso-icon-plus-symbol" />
                                    </a>
                                </div>
                                <div className="blog-one__content text-center">
                                    <div className="blog-one__meta">
                                        <a data-toggle="tooltip" data-placement="top" title="Posted On Jan 19" href="#">
                                            <i className="fa fa-calendar-alt" />
                                        </a>
                                        <a data-toggle="tooltip" data-placement="top" title="No Comments" href="#">
                                            <i className="fa fa-comments" />
                                        </a>
                                        <a data-toggle="tooltip" data-placement="top" title="Posted By Admin" href="#">
                                            <i className="fa fa-user" />
                                        </a>
                                    </div>
                                    <h2 className="blog-one__title">
                                        <a href="news-details.html">Learn variety of programs and courses</a>
                                    </h2>
                                    <p className="blog-one__text">Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros.</p>
                                    <a href="news-details.html" className="blog-one__link">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="post-pagination">
                        <a href="#">
                            <i className="fa fa-angle-double-left" />
                        </a>
                        <a className="active" href="#">
                            1
                        </a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">
                            <i className="fa fa-angle-double-right" />
                        </a>
                    </div> */}
                </div>
            </section>
        </>
    );
};

export default Blog;
