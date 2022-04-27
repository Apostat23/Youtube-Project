import PropTypes from 'prop-types'
import TextField from "@mui/material/TextField"

function Search(props) {
  return (
    <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </div>
  )
}

Search.propTypes = {}

export default Search