import PropTypes from 'prop-types'
import { useState } from 'react'
import Body from '../components/body/Body'
import Header from '../components/header/Header'
import styles from './Home.module.scss'
import { useSelector } from 'react-redux'
function Home(props) {
  const [list, setList] = useState([]);
  const { videos, isLoading, isError } = useSelector(state => state.video);
  return (
    <div className={styles.container}>
      <Header setList={setList}/>
      <h1>Faketube</h1>
      {console.log(videos)}
      <Body list={videos}/>
    </div>
  )
}

Home.propTypes = {}

export default Home
