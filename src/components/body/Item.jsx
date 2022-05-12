import styles from './Body.module.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

function Item({ title, description, thumbnails }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.video}>
      <p> {title} </p>
      <p> {description} </p>
      <img src={thumbnails.default.url} alt="thumbnail" />
    </div>
  );
}

Item.propTypes = {};

export default Item;
