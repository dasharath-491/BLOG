import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function Album() {
  const [albums, setAlbums] = useState([]);
  const id = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id.id}/albums`)
      .then((response) => response.json())
      .then((json) => setAlbums(json));
  }, [id.id]);

  function handleDeleteClick(title) {
    //console.log(title);
    const removeItem = albums.filter((album) => {
      return album.title !== title;
    });
    setAlbums(removeItem);
  }

  return (
    <div className="container my-3">
      <h1 className="album1">Album</h1>
      <div className="row">
        {albums.map((album) => {
          return (
            <div className="card my-1" key={album.id}>
              <div className="card-body">
                <h4 className="card-title">{album.title}</h4>
                <Link
                  className="btn btn-sn btn-primary"
                  to={`/photo/${album.id}`}
                >
                  Photos
                </Link>
                <Button
                  className="deletebuttonalbum mx-2"
                  onClick={() => handleDeleteClick(album.title)}
                  variant="danger"
                >
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Album;
