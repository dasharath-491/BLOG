import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Album() {
  const [albums, setAlbums] = useState([]);
  const id = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id.id}/albums`)
      .then((response) => response.json())
      .then((json) => setAlbums(json));
  }, [id.id]);

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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Album;
