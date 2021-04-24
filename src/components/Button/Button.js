import React from 'react';
import styles from './Button.scss';
import PropTypes from 'prop-types';

const Button = ({ variant = '', onClick, ...otherProps }) => {

  const handleClick = () => {
    if (variant.split(' ').find(name => name === 'confirm')) {
      if (window.confirm('Are you sure?')) {
        onClick();
      }
    } else {
      onClick();
    }

  };

  return (
    <button 
      {...otherProps} 
      onClick={handleClick}
      className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}
    />
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
