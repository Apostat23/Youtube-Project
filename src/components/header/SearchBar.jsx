import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import { useEffect, useState } from 'react';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { useDataFetch } from '../../hooks/useDataFetch';
import styled from 'styled-components';

function SearchBar({ setList }) {
  const [data, fetchData] = useDataFetch();
  const [input, setInput] = useState('');
  const Input = styled.input`
    background: none;
    border: none;
    color: white;

    &::placeholder {
      color: white;
    }

    &:focus {
      outline: none;
    }
  `;
  const SearchBar = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    border: none;
    border-radius: 18px;
    background-color: rgba(255, 255, 255, 0.445);
    color: white;
    padding: 1rem;
  `;
  const inputHandler = (input) => {
    setInput(input.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    fetchData(
      // eslint-disable-next-line max-len
      `https://youtube.googleapis.com/youtube/v3/search?&q=${input}&part=snippet&key=${process.env.REACT_APP_YOUTUBE_APY_KEY}&maxResults=20`
    );
    setInput('');
  };
  useEffect(() => {
    setList(data);
  }, [data]);

  return (
    <div className={styles.searchBar}>
      <GiMagnifyingGlass style={{ color: 'white', transform: 'scale(2.0)' }} />
      <form onSubmit={submitHandler}>
        <input type="text" onChange={inputHandler} value={input} />
      </form>
    </div>
  );
}

SearchBar.propTypes = {};

export default SearchBar;
