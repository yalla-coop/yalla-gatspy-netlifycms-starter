import React from 'react';
import { Link } from 'gatsby';
import YallaLogo from '../img/yalla-logo.svg';

const style = {
  root: { flexGrow: 1 },
  bar: {
    justifyContent: 'space-between',
    width: '100%',
    background: '#4156b5',
    position: 'relative',
    top: 0,
    display: 'flex',
  },
  button: {
    background: 'none',
    border: 'none',
    margin: '0 20px',
    cursor: 'pointer',
    outline: 'none',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    fontSize: 30,
  },
};

export default function ButtonAppBar() {
  return (
    <div style={style.root}>
      <div style={style.bar}>
        <button style={style.button} aria-label="menu" type="button">
          <Link to="/">
            <img src={YallaLogo} alt="yalla logo" />
          </Link>
        </button>
        <button style={style.button} type="button">
          <Link to="/about" style={style.link}>
            About
          </Link>
        </button>
      </div>
    </div>
  );
}
