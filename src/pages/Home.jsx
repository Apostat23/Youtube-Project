import PropTypes from 'prop-types'
import { useState } from 'react'
import Body from '../components/body/Body'
import Header from '../components/header/Header'
import styles from './Home.module.scss'

function Home(props) {
  const [list, setList] = useState([]);
  return (
    <div className={styles.container}>
      <Header setList={setList}/>
      <h1>Faketube</h1>
      <Body list={list}/>
    </div>
  )
}

Home.propTypes = {}

export default Home
