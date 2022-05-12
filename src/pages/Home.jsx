import PropTypes from 'prop-types';
import { useState } from 'react';
import Body from '../components/body/Body';
import Header from '../components/header/Header';
import styles from './Home.module.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { sessionLogin } from '../store/services/sessionService';
import { Link, Navigate } from 'react-router-dom';
import Login from '../pages/Login';

function Home() {
  const { videos, isLoading, isError } = useSelector((state) => state.video);

  return (
    <div className={styles.container}>
      <Header />
      <h1>Faketube</h1>
      <Body list={videos} />
    </div>
  );
}

Home.propTypes = {};

export default Home;
