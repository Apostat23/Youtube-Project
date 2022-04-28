import PropTypes from 'prop-types'
import styles from './Body.module.scss'
import Item from './Item'
import data from '../../mocks/youtube-videos-mock'

function Body(props) {
  const {items} = data
  console.log(items)

  return (
    <div className={styles.body}>
      {items.map(({etag, snippet:{channelTitle, description, thumbnails}}) => {
        return <Item 
          key={etag} 
          title={channelTitle} 
          description={description} 
          thumbnails={thumbnails} />
      })}
    </div>
  )
}

Body.propTypes = {}

export default Body
