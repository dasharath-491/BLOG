import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Photos() {
  const [photos, setPhotos] = useState([]);
  const id = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id.id}/photos`)
      .then((response) => response.json())
      .then((json) => setPhotos(json));
  }, [id.id]);

  return (
    <div className="container my-3">
      <h1 className="photos">Photos</h1>
      <div className="row">
        {photos.map((photo) => {
          return (
            <div
              className="card-image"
              style={{ width: "18rem" }}
              key={photo.id}
            >
              <img
                src={photo.thumbnailUrl}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h4 className="card-title">
                  <b>{photo.title}</b>
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Photos;
