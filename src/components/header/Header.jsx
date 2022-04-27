import PropTypes from 'prop-types'
import { GiHamburgerMenu } from 'react-icons/gi'
import Search from './Search'
import styles from './Header.module.scss'

function Header(props) {
  return (
    <nav className={styles.container}>
      <div className={styles.left}>
        <GiHamburgerMenu style={{color: 'white'}} />
        <Search />
      </div>
      <div className={styles.right}>
        <div>
          Theme Selector
        </div>
        <div>
          Avatar
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {}

export default Header
