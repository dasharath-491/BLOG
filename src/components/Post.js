import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import AddPost from "./AddPost";

import img1 from "./new.jpg";
//import Pagination from "./Pegination";

function Post() {
  const [userIds, setUserIds] = useState([]);
  const id = useParams();

  //const [currentPage, setCurrentPage] = useState(1);
  //const [postsPerPage] = useState(5);

  //const indexOfLastPost = currentPage * postsPerPage;
  //const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentuserIds = userIds.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id.id}`)
      .then((response) => response.json())
      .then((json) => setUserIds(json));
  }, [id.id]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container my-3">
      <Button
        variant="primary"
        style={{ marginLeft: "9px" }}
        onClick={handleShow}
      >
        AddPost
      </Button>
      <h1 style={{ marginLeft: "6px" }}>POST</h1>

      <div className="row">
        <div className="search-inner">
          <input
            type="text"
            className="search my-2"
            value={value}
            onChange={onChange}
          />
          <button className="searchb" onClick={() => onSearch(value)}>
            Search
          </button>
        </div>
        {userIds
          .filter((userId) => {
            const searchTerm = value.toLowerCase();
            const title = userId.title.toLowerCase();
            return title.startsWith(searchTerm) || title === searchTerm;
          })
          .map((userId) => {
            return (
              <div
                className="card-posts"
                style={{ width: "18rem" }}
                key={userId.id}
              >
                <img src={img1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    <b>{userId.title}</b>
                  </h5>
                  <Link
                    className="btn btn-sn btn-primary m-1"
                    to={`/postdetail/${userId.id}`}
                  >
                    Detail
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
      <AddPost show={show} handleClose={handleClose} />

      {/*<Pagination
        postsPerPage={postsPerPage}
        totaluserIds={userIds.length}
        paginate={paginate}
      />*/}
    </div>
  );
}

export default Post;
