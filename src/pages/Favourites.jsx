import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Favourites = (props) => {
  const { favouriteList } = useSelector((state) => state.video);

  return (
    <>
      <h1>Favourites</h1>
      {favouriteList.map((video) => (
        <div key={video.title}>
          <h2>{video.title}</h2>
          <iframe
            title={video.videoId}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.videoId}`}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      ))}
    </>
  );
};

Favourites.propTypes = {};

export default Favourites;
