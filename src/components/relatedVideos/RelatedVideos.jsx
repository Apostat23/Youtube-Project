import React from 'react'
import PropTypes from 'prop-types'
import { useDataFetch } from '../../hooks/useDataFetch'
import { useEffect } from 'react'
import Item from '../body/Item'
import { Link } from 'react-router-dom'
import styles from '../body/Body.module.scss';

const RelatedVideos = ({videoId}) => {
  const [data, fetchData, loading] = useDataFetch();
  useEffect(() => {
    fetchData(
      // eslint-disable-next-line max-len
      `https://youtube.googleapis.com/youtube/v3/search?&part=snippet&relatedToVideoId=${videoId}&key=${process.env.REACT_APP_YOUTUBE_APY_KEY}&maxResults=20&type=video`
    );
  }, [])
  return (
    <>
    {loading ? <div>Loading...</div> : (
      <div className="related-videos">
        <h2>Related Videos</h2>
        <div className="related-videos__list">
          {data.slice(1).map(
            (
              { id: { videoId }, etag, snippet: { title, description, thumbnails } },
              index
            ) => {
              return (
                <Link to={`/${videoId}`} key={videoId + index}>
                  <Item 
                    key={etag + index}
                    title={title}
                    thumbnails={thumbnails}
                  />
                </Link>
              );
            }
          )}
        </div>
      </div>
    )}
    </>
  )
}

RelatedVideos.propTypes = {}

export default RelatedVideos