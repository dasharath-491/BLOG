import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import AddPost from "./AddPost";
import img1 from "./new.jpg";
//import Pagination from "./Pegination";

function Post() {
  const [userIds, setUserIds] = useState([]);
  const id = useParams();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const changeHandler = (event) => {
    setTitle(event.target.value);
  };

  const changeBody = (event) => {
    setBody(event.target.value);
  };

  const newPost = {
    userid: `${id.id}`,
    id: 101,
    title: `${title}`,
    body: `${body}`,
  };

  const submitHandler = () => {
    // event.preventDefalt();
    setUserIds([newPost, ...userIds]);
    handleClose();
    setTitle("");
    setBody("");
  };

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

  //Delete Button
  function handleDeleteClick(id) {
    const removeItem = userIds.filter((userId) => {
      return userId.id !== id;
    });
    setUserIds(removeItem);
  }

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
            return (
              title.startsWith(searchTerm) ||
              title === searchTerm ||
              title.includes(searchTerm)
            );
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
                    <b>Title: {userId.title.slice(0, 15)}...</b>
                  </h5>
                  <h5 className="card-body1 my-3">
                    <b>body: </b>
                    {userId.body.slice(0, 50)}...
                  </h5>
                  <Link
                    className="btn btn-sn btn-primary m-1"
                    to={`/postdetail/${userId.id}`}
                  >
                    Detail
                  </Link>
                  <Button
                    className="deletebuttonpost"
                    onClick={() => handleDeleteClick(userId.id)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}
      </div>
      <AddPost
        show={show}
        changeHandler={changeHandler}
        submitHandler={submitHandler}
        changeBody={changeBody}
        handleClose={handleClose}
      />

      {/*<Pagination
        postsPerPage={postsPerPage}
        totaluserIds={userIds.length}
        paginate={paginate}
      />*/}
    </div>
  );
}

export default Post;
