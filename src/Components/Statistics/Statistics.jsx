import React from 'react';
import PropTypes from 'prop-types';

import randomColor from './randomColor';

import styles from './Statistics.module.css';

const Statistics = ({ title = 'Default title', stats = [] }) => (
  <section className={styles.container}>
    {title.length > 0 && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.statList}>
      {stats.map(stat => (
        <li
          key={stat.id}
          className={styles.statItem}
          style={{
            width: 300 / stats.length,
            backgroundColor: randomColor(),
          }}
        >
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ),
};

export default Statistics;
