import { useEffect, useState } from "react";
import "./Home.css";
import BlogCard from "../components/BlogCard";
import { getContract } from "../App";

function Home() {

    const [blogs, setBlogs] = useState();
    const [blogContents, setBlogContents] = useState();

    async function getTokenURIs() {
        const total = await getContract().totalSupply();
        let objs = [];
        for (let i = 0; i < total; i++) {
            const obj = await getContract().visibleTokenURI(i);
            console.log(obj);
            i = obj[1];
            objs.push({uri: obj[0], mode: obj[2]});
        }
        setBlogs(objs);
    }

    async function getBlogContents() {

        let contents = [];

        setBlogContents(contents);
    }

    // useEffect(() => {if (blogs && ! blogContents) getBlogContents();}, [blogs, blogContents]);
    useEffect(() => {if (! blogs) getTokenURIs();}, [blogs]);

    return (
        <div className="homeContainer">
            <div className="homeHeader">Recommended Blogs</div>
            <div className="homeBlogs">
                {/* {blogContents && blogContents.map((blog, index) => {
                    const { title, content, author, url } = blog;
                    return (
                        <BlogCard key={index} title={title} content={content} author={author} url={url} />
                    );
                })} */}
                {blogs && blogs.map((obj, index) => (<p key={index}>{String(obj.uri)+ ' | ' + String(obj.mode)}</p>))} 
            </div>
        </div>
    );
}

export default Home;