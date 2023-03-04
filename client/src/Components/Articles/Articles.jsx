import React, { useState } from "react";

import "../Articles/Article.scss"

const Article = ( ) => {
const [posts, setPosts] = useState([])
const [loading, setLoading] = useState(true)

React.useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch("http://localhost:5000/api/products")).json();
      // set state when the data received
      setPosts(data);
      setLoading(false);
    };
    dataFetch();
  }, []);

    return(
        <>
        <div className="card">
            {loading && "Loading..."}
            <div className="wrapper">
                {posts.map(posts =>(
                  <a href="#">
                    <div key={posts.id} className='cards'>
                        {/* {console.log(posts.image)} */}
                        <img src={posts.image} alt={posts.name} />
                        <h3>{posts.category}</h3>
                        <div className="content">
                        </div>
                        <b>{posts.brand}</b>
                        <p>${posts.price}</p>
                    </div>
                    </a>
                ))}
            </div>
            </div>
            </>
    )
}
export default Article