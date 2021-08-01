import React from 'react';
import './blog.css'

import blogPhoto1 from "./photos/06DrNxjsSoacWIEUI35EF5U-2..1569491152.jpg"
import blogPhoto2 from "./photos/campus-4.jpg_w_1952.jpeg"
import blogPhoto3 from "./photos/javascript.jpg.webp"
import blogPhoto4 from "./photos/1*NYFhkQXeclrhupE_P64r3g.png"

const Blog = () => {

    return (
       <div className="blog-page">
          <div className="b-cards">
             <div>
                <h1 className="blog-header">BLOG</h1>
                <div className="line"></div>
             </div>
             <div className="blog-card">
                <a href="https://harrf-akbar.medium.com/the-basics-of-building-an-app-e198884644d7">
                   <img className="blog-image" src={blogPhoto1} alt="app" />
                </a>
                <a
                   className="b-text"
                   href="https://harrf-akbar.medium.com/the-basics-of-building-an-app-e198884644d7"
                >
                   <p className="blog-title">The Basics of Building an App</p>
                   <p className="blog-date"> February 17, 2021</p>
                   <p className="blog-text">
                      How do you even start building an app using rails? The first thing you need to
                      do is come up with an idea...
                   </p>
                </a>
             </div>
             <div className="blog-card">
                <a href="https://harrf-akbar.medium.com/my-experience-in-bootcamp-so-far-d574a77ac52d">
                   <img className="blog-image" src={blogPhoto2} alt="bootcamp" />
                </a>
                <a
                   className="b-text"
                   href="https://harrf-akbar.medium.com/my-experience-in-bootcamp-so-far-d574a77ac52d"
                >
                   <p className="blog-title">My Experience in Bootcamp </p>
                   <p className="blog-date"> February 28, 2021</p>
                   <p className="blog-text">
                      It has been 7 weeks since I started my new career path to becoming software
                      engineer. Going into a new career path is very frightening...
                   </p>
                </a>
             </div>
             <div className="blog-card">
                <a href="https://harrf-akbar.medium.com/the-love-and-the-struggle-of-java-26eefb8587de">
                   <img className="blog-image" src={blogPhoto3} alt="javascript" />
                </a>
                <a
                   className="b-text"
                   href="https://harrf-akbar.medium.com/the-love-and-the-struggle-of-java-26eefb8587de"
                >
                   <p style={{ marginRight: "25px" }} className="blog-title">The Love and the Struggle of JavaScript</p>
                   <p className="blog-date"> March 15, 2021</p>
                   <p className="blog-text">
                      Going into my first vanilla JavaScript project was one of the most exciting
                      and stressful things to experience at the same time...
                   </p>
                </a>
             </div>
             <div className="blog-card">
                <a href="https://harrf-akbar.medium.com/the-basics-of-building-an-app-e198884644d7">
                   <img className="blog-image" src={blogPhoto4} alt="lifecycle" />
                </a>
                <a
                   className="b-text"
                   href="https://harrf-akbar.medium.com/the-basics-of-building-an-app-e198884644d7"
                >
                   <p style={{ marginRight: "50px" }} className="blog-title">LifeCycle Components</p>
                   <p className="blog-date"> March 29, 2021</p>
                   <p className="blog-text">
                      When you have a beginning there is always an ending in almost every way you
                      look it this statement. However, in this case we are referring to react life...
                   </p>
                </a>
             </div>
          </div>
       </div>
    )
}

export default Blog; 