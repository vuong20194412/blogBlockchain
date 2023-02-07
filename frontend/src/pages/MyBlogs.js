import { useEffect, useState } from "react";
import "./MyBlogs.css";
import BlogCard from "../components/BlogCard";
import { useNavigate } from "react-router-dom";
import { getContract } from '../App';

function MyBlogs() {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState();
    const [blogContents, setBlogContents] = useState();

    async function getOwnedTokenURIs() {
        
        const ownedTotal = await getContract().ownedTotalSupply();
        let objs = [];

        for (let i = 0; i < ownedTotal; i++) {
            const obj = await getContract().ownedTokenURI(i);
            objs.push({ uri: obj[0], mode: obj[1] });
        }

        setBlogs(objs);
    }

    async function getOwnedBlogContents() {

        let contents = [];

        setBlogContents(contents);
    }

    useEffect(() => { if (blogs && !blogContents) getOwnedBlogContents(); }, [blogs, blogContents]);

    useEffect(() => { if (!blogs) getOwnedTokenURIs(); }, [blogs]);

    function navigateNewBlog() { navigate("/new-blog"); };

    return (
        <div>
            <div className="myBlogsHeader">Your Blogs</div>
            {/* {blogContents && blogContents?.length > 0 ? (blogContents.map((blog, index) => {
                const { title, content, author, url } = blog;
                return (
                    <BlogCard key={index} title={title} content={content} author={author} url={url} />
                );
            })) : (
                <div style={{ fontSize: "30px", width: "100%", marginLeft: "40%", }} >
                    <p>No Blogs Yet</p>
                    <button onClick={navigateNewBlog}>Create one</button>
                </div>
            )} */}
            {blogs && blogs.map((obj, index) => (<p key={index}>{obj.uri + ' | ' + obj.mode}</p>))} 
        </div>
    );
}


export default MyBlogs;