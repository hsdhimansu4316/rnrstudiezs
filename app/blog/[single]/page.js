

import { api_url } from "@/Auth";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const getData = async (slug) => {
    try {
      const res = await fetch(`${api_url}/posts?slug=${slug}`, {
        next: { revalidate: 2 },
      });
  
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status}`);
      }
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null; 
    }
  };
  
  export async function generateMetadata({ params }) {
    const product = await getData(params.single);
  
    
    if (!product || !product[0] || !product[0].yoast_head_json) {
      return {
        title: "Default Title",
        description: "",
        openGraph: {
          title: "Default Title",
          description: "",
          locale: "en_US",
          type: "website",
          url: `https://blog.rnrstudiezs.com/${params.single}`,
          site_name: "Nexgen",
        },
        alternates: {
          canonical: `https://www.rnrstudiezs.com/blog/${params.single}`,
        },
      };
    }
  
    
    return {
      title: product[0]?.yoast_head_json?.og_title || "Default Title",
      description: product[0]?.yoast_head_json?.og_description || "",
      openGraph: {
        title: product[0]?.yoast_head_json?.og_title || "Default Title",
        description: product[0]?.yoast_head_json?.og_description || "",
        locale: "en_US",
        type: "website",
        url: `https://blog.rnrstudiezs.com/${params.single}`,
        site_name: "Nexgen",
      },
      alternates: {
        canonical: `https://www.rnrstudiezs.com/blog/${params.single}`,
      },
    };
  }
  
  async function Page({ params }) {
    const data = await getData(params.single);
  
    if (!data || !data[0]) {
      return <div>Error loading blog data</div>;
    }
  
    const blogPost = data[0];
    return (
        <>
        <Navbar/>
        <section className="gre_inner-banner new_inner">
        <div className="container">
          <ul className="list-unstyled thm-breadcrumb">
            <li>
              <a href="/">Blog</a>
            </li>
            {/* <li className="active">
                            <a href="#">Abroad Exam</a>
                        </li> */}
          </ul>
          <h2 className="inner-banner__title" style={{fontSize:'50px'}}>{blogPost.title?.rendered}</h2>
        </div>
      </section>
      <section className="blog-details">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="blog-one__single">
                    <div className="blog-one__image">
                        <img
                            src={blogPost.yoast_head_json?.og_image[0]?.url} // Accessing the image URL from blogPost
                            alt="The Importance of Career Counselling"
                            style={{ width: "100%" }}
                           
                        />
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
                        <h2 className="blog-one__title">{blogPost.title?.rendered}</h2>
                        <div
                            className="blog-one__text"
                            dangerouslySetInnerHTML={{ __html: blogPost.content?.rendered }} // Correct usage
                            style={{ marginBottom: "70px" }}
                        />
                    </div>
                </div>
                <div className="share-block">
                    <div className="left-block">
                        <p>
                            Tags: <a href="#">Business,</a> <a href="#">Agency,</a> <a href="#">Technology</a>
                        </p>
                    </div>
                    <div className="social-block">
                        <a href="#">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="#">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                            <i className="fab fa-instagram" />
                        </a>
                        <a href="#">
                            <i className="fab fa-dribbble" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

            <Footer/>
        </>
    );
}

export default Page;
