import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useDataFetch } from '../../hooks/useDataFetch'
import { useEffect } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { GrOverview } from 'react-icons/gr';
import styles from './VideoPlayer.module.scss';

const VideoPlayer = ({ videoId }) => {
  const [data, fetchData, loading] = useDataFetch();
  
  useEffect(() => {
    fetchData(
      // eslint-disable-next-line max-len
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_APY_KEY}&part=snippet,statistics`
    );
  }, []);

  return (
    <>
    {loading ? (
      <div>Loading...</div>
      ) : (
        <div className={styles.container}>
        <iframe
          title={videoId}
          width="100%"
          height="100%"
          src={`//www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allowFullScreen
          allow={
            'accelerometer; autoplay; clipboard-write;' +
            'encrypted-media; gyroscope; picture-in-picture'
          }
        />
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div>
            <AiFillLike /> <span> Likes: {data[0].statistics.likeCount}</span>{' '}
          </div>
          <div>
            <GrOverview /> <span> Views: {data[0].statistics.viewCount}</span>{' '}
          </div>
        </div>
      </div>
        )}
    </>
  );
};

VideoPlayer.propTypes = {};

export default VideoPlayer;
