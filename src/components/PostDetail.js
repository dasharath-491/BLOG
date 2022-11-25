import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostCom from "./PostCom";
import img from "./image.jpg";

function PostDetail() {
  const [postdetails, setPostDetails] = useState(null);
  const id = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id.id}`)
      .then((response) => response.json())
      .then((json) => setPostDetails(json));
  }, [id.id]);

  return (
    <>
      {postdetails && postdetails !== null && (
        <div className="PostID " key={postdetails.id}>
          <h1 className="details" style={{ marginLeft: "17px" }}>
            PostDetails
          </h1>
          <div className="my-3">
            <div className="card-image">
              <img src={img} className="card-img-top" alt="..." />
              <h1 className="card-id">
                <b>id: {postdetails.id}</b>
              </h1>
              <h4 className="card-name">
                <b>title: {postdetails.title}</b>
              </h4>
              <h5 className="card-name ">
                <b>body: {postdetails.body}</b>
              </h5>
              <PostCom />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PostDetail;
