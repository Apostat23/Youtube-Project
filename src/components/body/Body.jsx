import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Body.module.scss';
import Item from './Item';
import { addFavourite } from '../../store/slices/videoSlice';
import { useDispatch, useSelector } from 'react-redux';

function Body({ list }) {
  const { user } = useSelector((state) => state.session);
  const dispatch = useDispatch();
  const addToFavouriteList = (video) => {
    dispatch(addFavourite(video));
  };
  return (
    <div className={styles.body}>
      {list?.length > 0 &&
        list.map(
          (
            { id: { videoId }, etag, snippet: { title, description, thumbnails } },
            index
          ) => {
            return (
              <>
                <Link to={`/${videoId}`} key={videoId + index}>
                  <Item
                    className={styles.video}
                    key={etag + index}
                    title={title}
                    // description={description}
                    thumbnails={thumbnails}
                  />
                </Link>
                {user && (
                  <button
                    onClick={() =>
                      addToFavouriteList({ videoId, title, description, thumbnails })
                    }
                    type="button"
                  >
                    Add to Favourites
                  </button>
                )}
              </>
            );
          }
        )}
    </div>
  );
}

Body.propTypes = {};

export default Body;
