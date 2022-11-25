import React from "react";
import { Link } from "react-router-dom";
import img from "./image.jpg";

const BlogItem = (props) => {
  let { id, name, username, email } = props;
  return (
    <div>
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-text">{id}</h6>
            <p className="card-title" style={{ fontWeight: "bold" }}>
              {name}
            </p>
            <h5 className="card-userid " style={{ fontWeight: "bold" }}>
              {username}
            </h5>
            <h6 className="card-usermail " style={{ fontWeight: "bold" }}>
              {email}
            </h6>
            <Link className="btn btn-sn btn-primary" to={`userdetail/${id}`}>
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
