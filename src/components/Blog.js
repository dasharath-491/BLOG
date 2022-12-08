import React, { useState, useEffect } from "react";
import BlogItem from "./BlogItem";
import Pagination1 from "./Pegination1";

const Blog = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentusers = users.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container my-3">
      <h1>UserList</h1>
      <div className="row">
        {currentusers.map((user) => {
          return (
            <div className="col-md-4" key={user.id}>
              <BlogItem
                id={user.id}
                name={user.name}
                username={user.username}
                email={user.email}
              />
            </div>
          );
        })}
      </div>
      <Pagination1
        postsPerPage={postsPerPage}
        totalusers={users.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Blog;
