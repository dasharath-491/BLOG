import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PostCom() {
  const [postcoms, setPostComs] = useState([]);
  const id = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id.id}/comments`)
      .then((response) => response.json())
      .then((json) => setPostComs(json));
  }, [id.id]);

  return (
    <div className="container my-3">
      <h1 style={{ marginLeft: "-20px" }}>Comments.</h1>
      <div className="row">
        {postcoms.map((postcom) => {
          return (
            <div className="card-body" key={postcom.id}>
              <h4 className="card-postcom">
                <b>BODY: </b>
                {postcom.body}.
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostCom;
