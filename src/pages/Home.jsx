import PropTypes from 'prop-types'
import Body from '../components/body/Body'
import Header from '../components/header/Header'

function Home(props) {
  return (
    <div>
      <Header />
      <br />
      <Body />
    </div>
  )
}

Home.propTypes = {}

export default Home
