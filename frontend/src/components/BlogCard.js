import "./BlogCard.css";
import { useNavigate } from "react-router-dom";

function BlogCard({ content, title, author, externalUrl }) {
  
  const image = `https://ipfs.moralis.io:2053/ipfs/QmWEsG4ayh75BMk2H1CowAdALPjsi3fD7CSZ6qxNM1yNnz/image/moralis.png`;
  const length = 100;
  const trimmedString = content.length > 100 ? content.substring(0, length) : content;

  const account = `${author.slice(0, 4)}...${author.slice(38)}`;

  async function clickHandler() {}

  return (
    <div className="blog" onClick={clickHandler}>
      <div className="blog_leftSide">
      <div className="blogger">
          <span className="blogger_name">{account}</span>
          <span className="blogger_date">Mar 21</span>
      </div>
      <div className="blog_title">
          <h3>{title}</h3>
      </div>
      <div className="blog_content">
          <p>{trimmedString}...</p>
      </div>
      </div>
      <div className="blog_rightSide">
        <div>
          <img className="blog_image" src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
