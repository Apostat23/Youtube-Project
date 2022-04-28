import PropTypes from 'prop-types'
import styles from './Header.module.scss'
import { TextField } from "@mui/material"
import { GiMagnifyingGlass } from 'react-icons/gi'

function SearchBar(props) {
  return (
    <div className={styles.searchBar}>
      <GiMagnifyingGlass style={{color: 'white', transform: 'scale(2.0)'}} />
      <TextField id="outlined-basic" label="Search" variant="outlined" />
    </div>
  )
}

SearchBar.propTypes = {}

export default SearchBar