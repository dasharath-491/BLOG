import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const [details, setDetails] = useState(null);
  const id = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id.id}`)
      .then((response) => response.json())
      .then((json) => setDetails(json));
  }, [id.id]);

  return (
    <>
      {details && details !== null && (
        <div className="container-detail " key={details.id}>
          <h1>UserDetails</h1>
          <div className="my-3">
            <div className="card-body-detail">
              <h1 className="card-id">
                <b>id: {details.id}</b>
              </h1>
              <h4 className="card-name">
                <b>Name: {details.name}</b>
              </h4>
              <h5 className="card-name ">
                <b>Username: {details.username}</b>
              </h5>
              <h4 className="card-email ">
                <b>email: {details.email}</b>
              </h4>
              <h4 className="card-email ">
                <b>
                  address: {details.address.street}, {details.address.suite},
                  {details.address.city}, {details.address.zipcode}
                </b>
              </h4>
              <h4 className="card-address ">
                <b>phone: {details.phone}</b>
              </h4>
              <h5 className="card-website ">
                <b>website: {details.website}</b>>
              </h5>
              <h5 className="card-website ">
                <b>companyname: {details.company.name}</b>
              </h5>

              <Link
                className="btn btn-sn btn-primary m-1"
                to={`/post/${details.id}`}
              >
                Post
              </Link>
              <Link
                className="btn btn-sn btn-primary m-2"
                to={`/todo/${details.id}`}
              >
                Todo
              </Link>
              <Link
                className="btn btn-sn btn-primary m-1"
                to={`/album/${details.id}`}
              >
                Album
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Detail;
