import { useState } from "react";
import "./NewBlog.css"
import { getContract } from '../App';

function NewBlog() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [mode, setMode] = useState(true); // mode public
  
    async function uploadFile(event) {
      event.preventDefault();
      const data = {
        title: title,
        content: content,
        image: "https://ipfs.moralis.io:2053/ipfs/QmWEsG4ayh75BMk2H1CowAdALPjsi3fD7CSZ6qxNM1yNnz/image/moralis.png",
      };   

      //...
      let uri = "result return of ipfs";
      //...

      const tx = getContract().ownedMint(uri, mode);
    }

    return (
        <div>
        <form onSubmit={uploadFile} className="writeForm">
            <div className="writeFormGroup">
                <input className="writeInput" placeholder="Title"
                    autoFocus={true}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="writeFormGroup">
                <textarea className="writeInput writeContent" placeholder="Write your story..."
                    autoFocus={true}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div className="writeFormGroup">
                <label>Mode public: </label>
                <input className="" type="checkbox" 
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                />
            </div>
            <button className="writeSubmit" type="submit">
                Save
            </button>
        </form>
        </div>
    );
  };
  
  export default NewBlog;