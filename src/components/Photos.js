import React, { useEffect, useState } from "react";
import axios from "axios";
import Photo from "./Photo";
import SearchBar from "./SearchBar";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("african");
  const [loading, setLoading] = useState(false);

  const fetchPhotos = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=h5rAkH1-d4CxBlS5TfV9LTylifWegDT5vjfgVxj1YIY`
    );
    await setPhotos(res.data.results);
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPhotos();
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const result =
    photos.length > 0 &&
    photos.map((photo) => (
      <div class="col-md-4 mb-3" key={photo.id}>
        <Photo urls={photo.urls} user={photo.user} id={photo.id} />
      </div>
    ));
  return (
    <>
      <SearchBar
        setSearchTerm={setSearchTerm}
        loading={loading}
        searchTerm={searchTerm}
        handleSubmit={handleSubmit}
      />
      <div class="row">{result}</div>
    </>
  );
};

export default Photos;
