import { useState } from 'react'
import PropTypes from 'prop-types'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'
import { Switch } from '@mui/material'
import SearchBar from './SearchBar'
import styles from './Header.module.scss'
function Header({setList}) {
  const [checked, setChecked] = useState(false)
  const switchHandler = () => { setChecked(!checked) }

  return (
    <nav className={styles.container}>
      <div className={styles.innerContainer}>
        <GiHamburgerMenu style={{color: 'white', transform: 'scale(2)'}} />
        <SearchBar setList={setList}/>
      </div>
      <div className={styles.innerContainer}>
        <Switch
          checked={true}
          onChange={() => switchHandler()}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <CgProfile style={{transform: 'scale(2)'}}/>
      </div>
    </nav>
  )
}

Header.propTypes = {}

export default Header
