import css from './Statistics.module.css';
import { getRandomPastelColor } from 'utils/randomColor';
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statlist}>
        {stats.map(data => (
          <li
            className={css.item}
            key={data.id}
            style={{ backgroundColor: getRandomPastelColor() }}
          >
            <span className={css.label}>{data.label} </span>
            <span className={css.percentage}>{data.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

// Statistics.propTypes = {
//   percentage: PropTypes.number.isRequired,
//   label: PropTypes.string.isRequired,
// };
