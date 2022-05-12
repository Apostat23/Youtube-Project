import { useState } from 'react';
import PropTypes from 'prop-types';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import { Switch } from '@mui/material';
import SearchBar from './SearchBar';
import styles from './Header.module.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header({ setList }) {
  const { user } = useSelector((state) => state.session);
  const [checked, setChecked] = useState(false);
  const switchHandler = () => {
    setChecked(!checked);
  };

  return (
    <nav className={styles.container}>
      <div className={styles.innerContainer}>
        <GiHamburgerMenu style={{ color: 'white', transform: 'scale(2)' }} />
        <SearchBar setList={setList} />
      </div>
      <div className={styles.innerContainer}>
        <Link to="/favourites">Favourites</Link>
        <Switch
          checked={true}
          onChange={() => switchHandler()}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        {user ? (
          <img src={user.avatarUrl} alt="avatar" className={styles.avatar} />
        ) : (
          <CgProfile style={{ color: 'white', transform: 'scale(2)' }} />
        )}
      </div>
    </nav>
  );
}

Header.propTypes = {};

export default Header;
