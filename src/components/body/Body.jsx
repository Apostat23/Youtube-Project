import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Body.module.scss';
import Item from './Item';

function Body({ list }) {
  return (
    <div className={styles.body}>
      {list?.length > 0 &&
        list.map(
          (
            { id: { videoId }, etag, snippet: { title, description, thumbnails } },
            index
          ) => {
            return (
              <Link to={`/${videoId}`} key={videoId + index} >
                <Item className={styles.video}
                  key={etag + index}
                  title={title}
                  // description={description}
                  thumbnails={thumbnails}
                />
              </Link>
            );
          }
        )}
    </div>
  );
}

Body.propTypes = {};

export default Body;
