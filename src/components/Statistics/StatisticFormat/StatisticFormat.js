import React from 'react';
import s from './StatisticFormat.module.css';
import createRandomColor from './createRandomColor';

export default function StatisticFormat({ stats }) {
  return (
    <ul className={s.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          key={id}
          className={s.item}
          style={{ backgroundColor: createRandomColor() }}
        >
          <span className={s.label}>{label}</span>
          <span className={s.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  );
}