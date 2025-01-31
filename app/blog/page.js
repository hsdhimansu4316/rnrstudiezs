import { api_url } from "@/Auth";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";

const getData = async () => {
    try {
        const res = await fetch(`${api_url}/posts?_embed`, {
            next: { revalidate: 2 },
        });

        console.log("jii");
        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

async function Page() {
    const data = await getData();
    return (
        <>
            <Navbar />
            <section className="gre_inner-banner new_inner">
                <div className="container">
                    <ul className="list-unstyled thm-breadcrumb">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        {/* <li className="active">
                            <a href="#">Abroad Exam</a>
                        </li> */}
                    </ul>
                    <h2 className="inner-banner__title">BLOG</h2>
                </div>
            </section>
            <section className="blog-one blog-page">
                <div className="container">
                    <div className="row">
                        {data.map((item, index) => (
                            <div key={item.id} className="col-lg-4">
                                <div className="blog-one__single">
                                    <Link href={`/blog/${item.slug}`}>
                                        <div className="blog-one__image">
                                            <img src={`${item._embedded["wp:featuredmedia"][0].source_url}`} alt={`blog ${index}`} style={{ width: "100%" }} height={300} width={500} />
                                            <a className="blog-one__plus" href={`/blog/${item.slug}`}>
                                                <i className="kipso-icon-plus-symbol" />
                                            </a>
                                        </div>
                                    </Link>
                                    <div className="blog-one__content text-center">
                                        {/* <div className="blog-one__meta">
                      <a
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Posted On Jan 19"
                        href="#"
                      >
                        <i className="fa fa-calendar-alt" />
                      </a>
                      <a
                        data-toggle="tooltip"
                        data-placement="top"
                        title="No Comments"
                        href="#"
                      >
                        <i className="fa fa-comments" />
                      </a>




                      
                      <a
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Posted By Admin"
                        href="#"
                      >
                        <i className="fa fa-user" />
                      </a>
                    </div> */}
                                        <Link href={`/blog/${item.slug}`}>
                                            <h2 className="blog-one__title">
                                                <a href={`/blog/${item.slug}`}>{item.title.rendered} </a>
                                            </h2>

                                            {/* <p className="blog-one__text"></p> */}
                                            <div
                                                className="blog-grid-text"
                                                dangerouslySetInnerHTML={{
                                                    __html: item.excerpt.rendered,
                                                }}
                                            />
                                            <a href={`/blog/${item.slug}`} className="blog-one__link">
                                                Read More
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="post-pagination">
            <a href="#">
              <i className="fa fa-angle-double-left" />
            </a>
            <a
              className="active"
              href="#"
            >
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
            <Footer />
        </>
    );
}

export default Page;
