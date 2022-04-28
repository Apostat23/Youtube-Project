import styles from './Body.module.scss'
import PropTypes from 'prop-types'

function Item({title, description, thumbnails}) {
  console.log(thumbnails.default)
  return (
    <div className={styles.video}>
      <p> { title } </p>
      <p> { description } </p>
      <img src={thumbnails.default.url} alt="thumbnail" />
    </div> 
  )
}

Item.propTypes = {}

export default Item
